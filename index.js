const routing = require('./Routes/Routing');

function StartServer()
{
    try {
        routing.Router();
    } catch (e) {
        console.log(`Erro na aplicação: ${e}`);
    }
}