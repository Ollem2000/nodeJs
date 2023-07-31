//Programa gerado pelo chatGPT para estudos
const fs = require('fs');
const express = require('express');
const app = express();

// Lista de objetos
const lista = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 22 }
];

// Converte a lista para formato JSON
const listaJSON = JSON.stringify(lista, null, 2);

// Rota para salvar a lista em arquivo
app.post('/salvar', function (req, res) {
  // Cria o arquivo e escreve a lista JSON dentro dele
  fs.writeFile('lista.txt', listaJSON, function (err) {
    if (err) {
      console.error('Ocorreu um erro ao criar o arquivo:', err);
      res.send('Erro ao salvar a lista em arquivo');
    } else {
      console.log('Arquivo criado com sucesso!');
      res.send('Lista salva com sucesso!');
    }
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, function () {
  console.log('Servidor rodando em http://localhost:3000');
});