//const url = "http://localhost.5500/api";
const url = "https://api.github.com/users/ollem2000";

function getUsers(){
	fetch(url)
		.then(r => r.json())
		.then(data => renderApiResult.textContent += JSON.stringify(data.login))
		.catch(e => console.log(e))
}
getUsers();