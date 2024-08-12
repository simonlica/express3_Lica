//criar uma query (consulta) simples
const express = require ('express');
const mysql = require ('mysql2');

const app = express();

app.listen(3000, ()=>{
    console.log("conexão deu certo parça, já pode ir pra chapa (:");
})

//criação da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL90P4TDcQGB2R97Djet7vXYHggatTSZE4',
    database: 'nodejs_tasks'

})

//testar conexão
connection.connect(error =>{
    if(error){
        console.log('erro na conexão ao MySql:'+error.message)
        return
    }
    console.log('conexão deu certo parça, já pode ir pra chapa (:')
})
