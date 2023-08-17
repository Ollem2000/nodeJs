import axios from 'axios'

axios.get("https://api.github.com/users/maykbrito").then(response => {
	console.log(response)
})