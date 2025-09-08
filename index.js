const express = require('express');
const app = express();

app.use(express.json());

let pessoas = [
    { id: 1 ,nome: 'leda' , Idade:14, signo:'virgem'},

    { id: 2, nome: 'valentina' , Idade:13, signo:'aquario'},

    { id: 3, nome: 'heitor' , Idade:15, signo:'virgem'},
    
    { id: 4, nome: 'ana luiza' , Idade:13, signo:'peixes'},

    { id: 5 ,nome: 'luana' , Idade:39, signo:'capricornio'}
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





app.post("/pessoas",(req,res) => {
    const {nome, idade , signo} = req.body;
    const newUser = {
        id: pessoas.length +1,
        nome,
        idade,
        signo
    };
    pessoas.push(newUser);
    res.status(201).json(newUser); // codigo de criaçao com sucesso
}
)

//get para buscar uma pessoa so por id

app.get('/pessoa/:id', (req, res) =>{
    
    const id = parseInt(req.params.id);
    const pessoa =  pessoas.find( u => u.id === id) ;

    if (!pessoa) {
        return res.status(484).json({error: "Usuario não encontrado" })
    }
    
    res.json(pessoa);


});



app.put('/pessoa2/:id' , (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa =  pessoas.find( u => u.id === id) ;

    if (!pessoa) {
        return res.status(484).json({error: "Usuario não encontrado" })
    }
    


    const {nome, idade , signo} = req.body;

     novaPessoa= req.body;
     console.log("pessoa antiga : " ,pessoa)
     console.log("pessoa antiga : " ,novaPessoa)



     pessoas[pessoa.id - 1] = novaPessoa
     console.log("pessoas: " ,pessoa);
    res.json(pessoas);

});

app.delete("/removerPessoa/:id" , (res , req) => {
    const id = parseInt(req.params.id);
    const pessoa =  pessoas.find( u => u.id === id) ;

    if (!pessoa) {
        return res.status(484).json({error: "Usuario não encontrado" })
    }


pessoas.splice(pessoas.id - 1 , 1) ;
console.log(pessoas) ;
res.json(pessoas);

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidores rodando em http://localhost:${PORT}`);

});