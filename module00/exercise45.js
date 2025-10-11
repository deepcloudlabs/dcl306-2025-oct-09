const BINANCE_WSS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const WebSocket = require("ws");
const wss = new WebSocket(BINANCE_WSS_URL);
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

wss.on("message", payload => {
    const trade = JSON.parse(payload);
    eventEmitter.emit("trade-event", trade);
});

eventEmitter.on("trade-event", async trade => {
    console.log("Saving trade event to mongodb...");
})

eventEmitter.on("trade-event", trade => {
    console.log("Calculating moving average...");
})

eventEmitter.on("trade-event", trade => {
    console.log("Sending the event to kafka/rabbitmq...");
})