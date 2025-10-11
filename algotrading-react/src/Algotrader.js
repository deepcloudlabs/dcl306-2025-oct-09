import Container from "./components/common/container";
import Card from "./components/common/card";
import SelectBox from "./components/common/select-box";
import {useCallback, useEffect, useMemo, useState, useTransition} from "react";
import Button from "./components/common/button";
import io from "socket.io-client";
import Table from "./components/common/table";

// {symbol: "BTCUSDT", price: "112278.29000000", quantity: "0.00016000", timestamp: 1760184367509}
function Algotrader() {
    const [symbols, setSymbols] = useState([]);
    const [symbol, setSymbol] = useState("");
    const [isPending, startTransition] = useTransition();
    const [trades, setTrades] = useState([]);
    const [isMonitoring, setMonitoring] = useState(false);
    const [windowSize, setWindowSize] = useState(10);

    const socket = useMemo(() => {
        return io("ws://127.0.0.1:5555");
    }, []);

    const handleSymbolChange = useCallback((e) => {
        setSymbol(e.target.value);
    }, []);

    const handleWindowSizeChange = useCallback((e) => {
        setWindowSize(Number(e.target.value));
    }, []);

    useEffect(() => {
        socket.on("ticker", trade => {
            if (!isMonitoring) {
                return;
            }
            setTrades(prevTrades => {
                let nextTrades = [...prevTrades, {
                    price: Number(trade.price),
                    quantity: Number(trade.quantity),
                    volume: Number(trade.price * trade.quantity),
                    timestamp: new Date(trade.timestamp).toString(),
                    sequence: trade.sequence
                }];
                if (nextTrades.length > windowSize) {
                    nextTrades.splice(0, nextTrades.length - windowSize);
                }
                return nextTrades;
            });
        });
        return () => {
            socket.off("ticker");
        };
    }, [windowSize, isMonitoring]);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSymbols() {
            fetch("https://api.binance.com/api/v3/ticker/price", {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                },
                signal: controller.signal
            })
                .then(res => res.json())
                .then(tickers => {
                    startTransition(() => {
                        let symbols = tickers.map(ticker => ticker.symbol);
                        symbols.sort();
                        setSymbols(symbols);
                    });
                })
        }

        fetchSymbols().then(() => {
        });

        return () => {
            controller.abort();
        };
    }, []);

    const startMonitoring = useCallback(() => {
        setMonitoring(true);
    }, []);
    const stopMonitoring = useCallback(() => {
        setMonitoring(false);
    }, []);

    const monitoringButton = useMemo(() => {
        return (
            <>
                {!isMonitoring && <Button click={startMonitoring} label={"Start Monitoring"} color={"btn-success"}/>}
                {isMonitoring && <Button click={stopMonitoring} label={"Stop Monitoring"} color={"btn-danger"}/>}
            </>
        );
    }, [isMonitoring, stopMonitoring, startMonitoring]);
    return (
        <Container>
            <Card title={"Market Data"}>
                {isPending && <h5>Retrieving symbols...</h5>}
                <SelectBox label={"Symbol"}
                           options={symbols}
                           value={symbol}
                           id={"symbol"}
                           change={handleSymbolChange}/>
                <SelectBox label={"Window Size"}
                           options={[10, 25, 50, 100]}
                           value={windowSize}
                           id={"windowSize"}
                           change={handleWindowSizeChange}/>
                {monitoringButton}
            </Card>
            <p></p>
            <Card title={"Trades Data"}>
                <Table fields={["sequence", "price", "quantity", "volume", "timestamp"]}
                       items={trades}
                       column_names={["Sequence", "Price", "Quantity", "Volume", "Timestamp"]}/>
            </Card>
            <p></p>
            <Card title={"Market Chart"}>

            </Card>
        </Container>
    );
}

export default Algotrader;
