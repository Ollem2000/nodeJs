const express = require("express");
const app = express();

app.listen("3000");
app.use(express.json()); //middleware

app.route("/").post((req, res) => {
	const {name, city} = req.body;
	res.send(`My name is ${name} n my city is ${city}`);
});