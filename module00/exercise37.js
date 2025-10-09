console.log("Application is just started...");
fetch("https://api.binance.com/api/v3/ticker/price")
   .then(res => res.json())
   .then(tickers => tickers.forEach(ticker => console.log(ticker)));
console.log("Application is just completed...");
