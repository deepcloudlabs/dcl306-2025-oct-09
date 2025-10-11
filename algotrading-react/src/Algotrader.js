import Container from "./components/common/container";
import Card from "./components/common/card";
import SelectBox from "./components/common/select-box";
import {useCallback, useEffect, useMemo, useState, useTransition} from "react";
import Button from "./components/common/button";

function Algotrader() {
    const [symbols, setSymbols] = useState([]);
    const [symbol, setSymbol] = useState("");
    const [isPending, startTransition] = useTransition();
    const [isMonitoring, setMonitoring] = useState(false);

    const handleSymbolChange = useCallback((e) => {
        setSymbol(e.target.value);
    },[]);

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

        fetchSymbols().then(()=>{});

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
                {monitoringButton}
            </Card>
        </Container>
    );
}

export default Algotrader;
