/* modulo que fara automaticamente a conexao*/
global.db = require('./db');
/**
 * cria o objeto da nosso aplicação
 */
const express = require('express');
const path = require('path');
const app = express();
/**
 * 
 */
const bodyParser = require('body-parser');
const router = express.Router();
const port = 8000;//porta padrao

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'dist/')));
app.use('/',express.static(path.join(__dirname,'dist/')));
app.use('/api',router);
/*Definindo as rotas*/
router.get('/',(req,res)=> res.json({message:'Work baby'}));

//GET clientes 
router.get('/clientes',(req,res)=>
    global.db.findList((err,docs)=>{
    if(err) res.status(500).json(err);
    else res.json(docs);
}))
//get CLientes com parametro
router.get('/clientes/:id',(req,res)=>
{   
    const id = parseInt(req.params.id);
    global.db.findListId(id,(err,docs)=>{
    if(err) res.status(500).json(err)
    else res.json(docs)
})})
 //post cliente
 router.post('/clientes',(req,res)=>{
     const cliente = req.body;
     global.db.insertCliente(cliente,(err,resulr)=>{
         if(err)res.status(500).json(err);
         else res.json({message:"cliente cadastrado com sucesso"})
     })
 })
 //updateCliente
 router.put('/clientes/:id',(req,res)=>{
     const id = parseInt(req.params.id);
     const cliente = req.body;
     global.db.updateCLiente(id,cliente,(err,result)=>{
         if(err)res.status(500).json(err);
         else res.json({message:"Cliente Alterado com sucesso"})
     })
 })
 //altera clente Patch/clientes/id
 router.patch('/clientes:id',(req,res)=>{
     const id = parseInt(req.params.id);
     const clientes = req.body;
     global.db.patchCliente(id,clientes,(err,result)=>{
         if(err)res.status(500).json(err);
         else res.json({message:'Cliente atualizado com sucesso'});
     })
 })
/* delete cliente*/
router.delete('/clientes:id',(req,res)=>{
    const id = parseInt(req.params.id);
    global.db.deleteCliente(id,(err,result)=>{
        if(err)res.result(500).json(err);
        else res.json({message:"Cliente exlcuido com sucesso"})
    })
})
//inicia o servidor
app.listen(port);
console.log("Api funcionando");
module.exports = app;