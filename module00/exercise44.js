// event-driven programming
const timer_id = setInterval(() => {
    console.log("Time is ticking...");
}, 1_000);

setTimeout(()=>{
    clearInterval(timer_id);
}, 10_000)

fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
    .then(res => res.json())
    .then( ({price}) => console.log(price));