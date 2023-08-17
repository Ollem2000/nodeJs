const { EventEmitter } = require("events");
const events = new EventEmitter();

events.once("event", (message) => {
	console.log("Lerei apenas: hello, ", message);
});

events.on("event", (message) => {
	console.log("hello, ", message);
});

events.emit("event", "world");
events.emit("event", "earth");

console.log(require("events"));