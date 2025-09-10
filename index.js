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
        return res.status(404).json({error: "Usuario não encontrado" })
    }
    
    res.json(pessoa);


});

// req => requisiçao | res => resposta
app.get('/totalPessoas' , (req , res) => {

    console.log("REQUISICAO:" ,req);
   console.log("/n/nRESPONSE: " ,res)
  res.json(pessoas.length);
});


app.put('/pessoa2/:id' , (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa =  pessoas.find( u => u.id === id) ;

    if (!pessoa) {
        return res.status(404).json({error: "Usuario não encontrado" })
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
        return res.status(404).json({error: "Usuario não encontrado" })
    }


pessoas.splice(pessoas.id - 1 , 1) ;
console.log(pessoas) ;
res.json(pessoas);

})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let doces = [
    { id: 1 ,nome: 'brigadeiro' , peso:'14g', formato:'bola' , validade: 2026},

    { id: 2 ,nome: 'bolo de morango' , peso:'500g', formato:'retangular' , validade: 2026},

    { id: 3 ,nome: 'cookie' , peso:'70g', formato:'redondo' , validade: 2026},
    
    { id: 4 ,nome: 'gelatina' , peso:'300g', formato:'retangular' , validade: 2026},

    { id: 5 ,nome: 'croissaint' , peso:'100g', formato:'meia lua' , validade: 2026},
]


app.get('/doce' , (req , res) => {
  if(doces.length === 0){
    res.status(404).json({
    status  : 404 ,
    error : "NOT_FOUND" ,
    message : "informaçao nao encontrada"
    
    })
}

    res.json(doces);
});


app.get('/doce/:id', (req, res) =>{
    
    const id = parseInt(req.params.id);
    const doce =  doces.find( u => u.id === id) ;

    if (!doce) {
        return res.status(484).json({error: "Usuario não encontrado" })
    }
    
    res.json(doce);


});


app.put('/doce/:id' , (req, res) => {
    const id = parseInt(req.params.id);
    const doce =  doces.find( u => u.id === id) ;

    if (!doce) {
        return res.status(484).json({error: "Usuario não encontrado" })
    }
    


    const {nome, peso , formado, validade} = req.body;

     novoDoce= req.body;
     console.log("doce antigo : " ,doce)
     console.log("doce novo : " ,novoDoce)

    doce.nome=novoDoce.nome || doce.nome
    doce.peso=novoDoce.peso || doce.peso
    doce.formato=novoDoce.formato || doce.formato
    doce.validade=novoDoce.validade || doce.validade



     doces[doce.id - 1] = {...doce , id: doce.id}
     console.log("doces: " ,doces);
    res.json(doces);

});


app.post("/doce",(req,res) => {
    const {nome, peso , formato, validade } = req.body;
    const novoDoce = {
        id: doces.length +1,
        nome, 
        peso ,
        formato,
        validade
    };
    pessoas.push(novoDoce);
    res.status(201).json(novoDoce); // codigo de criaçao com sucesso
});

app.delete("/doce/:id" , (res , req) => {
    const id = parseInt(req.params.id);
    const doce =  doces.find( (u) => u.id === id) ;

    if (!doce) {
        return res.status(404).json({error: "Usuario não encontrado" })
    }

doces.splice(doce.id - 1 , 1) ;
console.log(doces) ;
res.json(doces);

});




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidores rodando em http://localhost:${PORT}`);

});