const symbols = require("./symbols.json");

async function get_tickers(n=100){
    symbols.sort();
    for (const symbol of symbols.slice(0,100)) {
        let response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`).then(res => res.json());
        console.log(response);
    }
}

console.log("Application is just started!");
get_tickers().then(() => console.log("Application is just completed!"));