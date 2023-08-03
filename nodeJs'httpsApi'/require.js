const https = require('https');
const API = "https://sdw-2023-prd.up.railway.app/users/1";
//const API = "https://jsonplaceholder.typicode.com/users/_limit=2";

https.get(API, res => {
	console.log(res.statusCode);
})

console.log("API Online")