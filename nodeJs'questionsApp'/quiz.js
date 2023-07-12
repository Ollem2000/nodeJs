const questions = [
	"Questão 1",
	"Questão 2",
	"Questão 3",
]
const ask = ( index = 0 ) =>{
	process.stdout.write("Questão: "+questions[index]+"\nResponda: ");
}
ask()

const answers = [];
process.stdin.on("data", data =>{
	//process.stdout.write("Seu input foi: "+data.toString().trim()+"\n\n");
	answers.push(data.toString().trim());
	if(answers.length<questions.length){
		ask(answers.length)
	}
	else{
		console.log("\nRespostas: "+answers)
		process.exit();		
	}
})

process.on("log", () =>{
	console.log("lol")
})

process.on("exit", () =>{
	console.log("Fim do questionário. Até mais!")
})