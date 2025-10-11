import Container from "./components/common/container";
import Card from "./components/common/card";
import SelectBox from "./components/common/select-box";
import {useCallback, useEffect, useState} from "react";

function Algotrader() {
    const [symbols,setSymbols] = useState([]);
    const [symbol,setSymbol] = useState("");

    const handleSymbolChange = useCallback((e) => {
        setSymbol(e.target.value);
    });

    useEffect(() => {
        fetch("https://api.binance.com/api/v3/ticker/price")
            .then(res => res.json())
            .then( tickers => {
                let symbols = tickers.map(ticker => ticker.symbol);
                symbols.sort();
                setSymbols(symbols);
            })
    },[]);

  return (
    <Container>
        <Card title={"Market Data"}>
             <SelectBox label={"Symbol"}
                        options={symbols}
                        value={symbol}
                        id={"symbol"}
                        change={handleSymbolChange}/>
        </Card>
    </Container>
  );
}

export default Algotrader;
