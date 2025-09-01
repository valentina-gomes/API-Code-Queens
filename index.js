const express = require('express');
const app = express();

app.use(express.json());

let pessoas = [
    {nome: 'leda' ,Idade:14, signo:'virgem'},

    { nome: 'valentina' , Idade:13, signo:'aquario'},

    {nome: 'heitor' ,Idade:15,signo:'virgem'},
    
    {nome: 'ana luiza' ,Idade:13,signo:'peixes'},

    { nome: 'luana' ,Idade:39,signo:'capricornio'}
]

app.get('/', (req, res) =>{
    res.json({ mensagem : 'API de pessoas funcionando'});
});

app.get('/pessoas', (req, res) =>{
    res.json(pessoas);
});

app.get('/pessoas2', (req, res) =>{
    res.json(pessoas[2]);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidores rodando em http://localhost:${PORT}`);

});