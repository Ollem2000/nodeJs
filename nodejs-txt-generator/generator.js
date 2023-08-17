//Programa gerado pelo chatGPT para estudos
const fs = require('fs');

// Lista de objetos
const lista = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 22 }
];

// Converte a lista para formato JSON
const listaJSON = JSON.stringify(lista, null, 2);

// Cria o arquivo e escreve a lista JSON dentro dele
fs.writeFile('lista.txt', listaJSON, function (err) {
  if (err) {
    console.error('Ocorreu um erro ao criar o arquivo:', err);
  } else {
    console.log('Arquivo criado com sucesso!');
  }
});