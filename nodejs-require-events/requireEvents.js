const { inherits } = require("util");
const { EventEmitter } = require("events");

function Character(name){
	this.name = name;
}

inherits(Character, EventEmitter);

const chr = new Character("Gordon");
chr.on("event", () => console.log(`My name is ${chr.name} Freeman`));

console.log("Who are u?");
chr.emit("event");