

function getUsers(){
	fetch(url)
		.then(r => r.json())
		.then(data => renderApiResult.textContent += JSON.stringify(data.login))
		.catch(e => console.log(e))
}
getUsers();