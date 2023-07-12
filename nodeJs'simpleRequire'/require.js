//console.log("Nome do diretório: "+__dirname);
//console.log("Nome do arquivo: "+__filename);

const path = require('path');
//path é um módulo
//console.log(require('path'));
console.log(path.basename(__filename)); //Pegando o nome do arquivo

const myModule = require('./export')
console.log(myModule)//retorna o que há dentro do arquivo invocado