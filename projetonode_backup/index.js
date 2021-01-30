const express = require("express");
const app = express();
const handlebars = require ('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const { queryByDisplayValue, queryAllByAltText } = require("@testing-library/react");
const  moment = require('moment')
const path = require("path")
const buscaCep = require('./src/functions/buscacep');
const { Router } = require("express");
const { getCiphers } = require("crypto");

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set ('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Router.get('/', function(req, res, next){
//     res.render('resultado',{title:'Express',teste:""});
// });

// Router.post("/teste001", async function (req, res, next){
//     let t = req.body.teste;
//     const cep = await buscaCep(t);
//     res.render("index",{title: "teste", tste: cep})
// });







app.get('/cad', function(req,res){
    Post.findAll().then(function(posts){
        console.log(posts)
       res.render('home', {posts: posts})
       
        // res.render('home', {posts: posts})
    }).catch(function(error){console.log(error)})

})

app.get('/contato', function(req,res){
    res.sendFile(__dirname + "/paginahtml/contato.html")
})

//especificar local do css e da imagem
app.use(express.static(__dirname +'/public'));

app.get('/cep', function(req,res){
    res.render('./cep/index.ejs')
})

app.get('/', function(req,res){
    res.render('formulario')
})


app.get('/formulario', function(req,res){
    res.render('formulario')
})

app.get('/endereco', function(req,res){
    res.render('endereco')
})

app.post('/seuendereco', function(req,res){
  
    res.send("<h3>confira seu email: </h3>"+req.body.email 
    +"</br>"+"<h3>confira seu endereço: </h3>"+ req.body.endereco+"<br>"
    +"<h3>Confira sua cidade: </h3>"+"<br>"+ req.body.cidade+ "<h3>Confira seu cep: </h3>"+req.body.cep )
})



app.post('/add', function(req,res){
    Post.create({
       
        nome_produto : req.body.produto,
        sobrenome : req.body.sobrenome,
        quantidade_produto : req.body.email,
        assunto : req.body.assunto,
        mensagem : req.body.mensagem


    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("falha no pedido "+ erro)
    })
})



app.get('/deletar/:id', function(req,res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/cad')
    }).catch(function(erro){
        res.send("esta postagem nao existe!")
    })
})


app.listen(8085, function(){
    console.log("servidor rodando na url http://localhost:8085")
;});

