const express = require("express");
const app = express();

app.listen("3000");

app.use(express.json())
app.route("/").post( (req, res) => console.log(req.body)) //recebendo dados de Insomnia
//app.route("/").post( (req, res) => res.send(req.body)) //recebendo dados de Insomnia