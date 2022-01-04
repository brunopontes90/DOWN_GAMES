const mysql = require('mysql');

const express = require('express');
const application = express();
const port = 3000;


function Router()
{

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'down_games'
    });
    
    con.connect(function(err){
        if(err) throw err;
        console.log('Conectado ao banco de dados!');
    });


    application.get('/', (req, res) => 
    {
        const selecionar = "SELECT * FROM jogos";
        con.query(selecionar, function(err, result, fields)
        {
            if(err) throw err;
            console.log(result);
            res.send(result);
        });
    });

    application.post('/enviar', (req, res) => 
    {
        const enviar = "INSERT INTO jogos (name, descricao, imagem, arquivo) VALUES (:nome, :descricao, :imagem, :arquivo)";
        con.query(enviar, function(err, result)
        {
            if(err)throw err;
            console.log(`${result.affectedRows} inserida(s)`);
            res.send(result);
        });
    });

    application.put('/atualizar', (req, res) => 
    {
        const atualizar = "UPDATE jogos SET nome = :nome, descricao = :descricao, imagem = :imagem, arquivo = :arquivo WHERE jogo_id = jogo_id";
        con.query(atualizar, function(err, result)
        {
            if(err) throw err;
            console.log(`${result.affectedRows} registro(s) atualizado(s)`);
            res.send(result);
        });
    });

    application.delete('/deletar', (req, res) => 
    {
        const deletar = "DELETE FROM jogos WHERE jogo_id = jogo_id";
        con.query(deletar, function(err, result, fields)
        {
            if(err) throw err;
            console(`Número de registros excluídos: ${result.affectedRows}`);
            res.send(result);
        })
    });

    application.listen(port, () => 
    {
        console.log(`Aplicação rodando na porta: ${port}`);
    });
}

module.exports = Router();