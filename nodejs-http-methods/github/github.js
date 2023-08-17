const express = require("express");
const app = express();
const axios = require("axios");

app.listen("3000");

app.route("/").get( (req, res) => {
	axios.get("https://api.github.com/users/ollem2000").then(result => res.send(`<img src="${result.data.avatar_url}"/>`)).catch(error => console.log(error))
})