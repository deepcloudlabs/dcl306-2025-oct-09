const symbols = require("./symbols.json");
symbols.sort();
let promises = [];
for (const symbol of symbols.slice(0,100)) {
    const promise = fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
        .then(res => res.json());
    promises.push(promise);
}
Promise.all(promises).then(tickers => {
    for (const {symbol,price} of tickers) {
        console.log(`${symbol}: ${price}`);
    }
})