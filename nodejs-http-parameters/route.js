const express = require("express");
const app = express();

app.listen("3000");

app.route("/").get((req, res) => res.send("hello")); //é necessário uma rota / sem parâmetros
app.route("/:name").get((req, res) => res.send(req.params.name));
app.route("/about/:city").get((req, res) => res.send(req.params.city)); //funcionará apenas se haver /about