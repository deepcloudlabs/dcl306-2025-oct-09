const fs = require("fs");

console.log("Application is just started...");
fetch("https://api.binance.com/api/v3/ticker/price")
   .then(res => res.json())
   .then(tickers => {
       const symbols = tickers.map( ticker => ticker.symbol);
       fs.writeFileSync("./symbols.json", JSON.stringify(symbols));
   });
console.log("Application is just completed...");
