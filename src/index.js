const express = require('express');
const pokemonRoute = require('./routes/pokemon.routes')
const townRoute = require('./routes/town.routes')
const battleRoute = require('./routes/battle.routes')
const logger = require('./logger');
const pinoHttp = require('pino-http')({logger})

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
      message: 'A api de Pokemon está funcionando!',
    });
});

app.use(pinoHttp)

app.use(pokemonRoute)
app.use(townRoute)
app.use(battleRoute)
  
const port = 3000;

app.listen(port, () => { console.log(`O servidor está rodando na porta ${port}.`) });

module.exports = app