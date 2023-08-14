const express = require("express");
const app = express();

app.listen("3000");

let author = "nome"

app.use(express.json())
app.route("/").post( (req, res) => {
	author = req.body.author;
	res.send(author);
});