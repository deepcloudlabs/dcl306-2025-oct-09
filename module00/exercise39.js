const symbols = require("./symbols.json");
symbols.sort();
for (const symbol of symbols.slice(0,100)) {
    fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
        .then(res => res.json())
        .then(ticker => console.log(ticker));
}