function addUser(newUser){
	fetch(url, {
		method: "POST",
		body: JSON.stringify(newUser),
		headers: {
			"content-type": "application/json; charset=UTF-8"
		}
	})
		.then(r => r.json())
		.then(data => alertApi.textContent = data)
		.catch(e => console.log(e));
}

const newUser = {
	login: "João",
	avatar_url: "",
	location: "RJ"
}
addUser(newUser);