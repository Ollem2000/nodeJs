//Programa gerado pelo chatGPT para estudos
const fs = require('fs');

// Caminho para o arquivo .txt
const arquivo = 'lista.txt';

// Função para ler o arquivo e retornar o conteúdo
function lerArquivo(nomeArquivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(nomeArquivo, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Função para processar o conteúdo do arquivo
async function processarLista() {
  try {
    const conteudo = await lerArquivo(arquivo);
    const listaDeObjetos = JSON.parse(conteudo);
    console.log(listaDeObjetos);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
}

// Chamada da função principal
processarLista();