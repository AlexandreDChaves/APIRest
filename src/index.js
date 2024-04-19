const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./users/routes'); // Asegure-se que o caminho e o nome do arquivo estão corretos

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => console.log('Conectado ao MongoDB...'))
    .catch(err => console.error('Não foi possível conectar ao MongoDB...', err));

app.get('/api', (req, res) => {
    res.send('teste');
});

app.listen(3000, () => {
    console.log('Servidor iniciado');
});


//Esse código configura a conexão com o banco de dados MongoDB e define as rotas
// relacionadas ao módulo de usuário. O app.use(express.json()) permite que nosso 
//aplicativo utilize o formato JSON para enviar e receber dados. As rotas do módulo
// de usuário são definidas pelo userRoutes, que é um arquivo separado contendo
// as definições das rotas.