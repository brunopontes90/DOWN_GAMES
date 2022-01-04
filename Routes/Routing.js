const express = require('express');
const application = express();
const port = 3000;

function Router()
{
    application.get('/', (req, res) => 
    {
        res.send('Informações Solicitadas!');
    });

    application.post('/enviar', (req, res) => 
    {
        res.send('Requisição Enviada!!');
    });

    application.put('/atualizar', (req, res) => 
    {
        res.send('Requisição Atualizada!');
    });

    application.delete('/deletar', (req, res) => 
    {
        res.send('Requisição Deletada!');
    });

    application.listen(port, () => 
    {
        console.log(`Rodando na porta: ${port}`);
    });
}

module.exports = Router();