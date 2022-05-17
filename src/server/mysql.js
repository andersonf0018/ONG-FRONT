import { useHistory } from "react-router-dom";

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "developer",
    password: "root",
    host: "localhost",
    database: "login-cristolandia",
});

app.post('/login', (req, res) => {
    alert("teste")
    const matricula = req.body.matricula;
    const senha = req.body.senha;
     
    db.query("SELECT * FROM users WHERE matricula = ? AND senha = ?", [matricula, senha],
        (err, result) => {
            if (err) {
                res.send({
                    err: err
                });
            }                       
            if (result.length > 0) {
                res.send({
                    message: "Olá, " + matricula                    
                });
                console.log("Olá, " + matricula);
            } else {
                res.send({
                    message: "Wrong username/password combination"
                });
                console.log("Senha/Matricula errada")                
            }
        });

    /*db.query("INSERT INTO users (matricula, senha) VALUES (?,?)", [matricula, senha], 
    (err, result) => {
        console.log(err);
    });*/
});

//Retorna os meses do banco de dados
function getMes () {
    db.connect(function (err) {
        if (err) throw err;        
        db.query("SELECT * FROM cadastros", function (err, result, fields) {
            if (err) throw err;
            // for (var i of result) {
            //     dados.push(Object.assign({}, i));
            // }
            Object.keys(result).forEach(function(key) {            
                let row = result[key];                
                console.log(row.mes)
                return row.mes;
            });            
        });
    });
};
module.exports = {getMes};

// let array = []
// array = getMes();
// console.log(array)

//Retorna a quantidade de cadastros do banco de dados
function getQtd () {
    db.connect(function (err) {
        if (err) throw err;
        
        db.query("SELECT * FROM cadastros", function (err, result, fields) {
            if (err) throw err;
            Object.keys(result).forEach(function(key) {            
                let row = result[key];                
                //console.log(row.qtd)
                return row.qtd;
            });            
        });
    });
}
module.exports = {getQtd};

app.listen(8002, () => {
    console.log("Server rodando!");
});