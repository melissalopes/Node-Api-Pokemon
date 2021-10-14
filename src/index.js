const express = require('express');
const pokemonRoute = require('./routes/pokemon.routes')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
      message: 'A api de Pokemon está funcionando!',
    });
});

app.use(pokemonRoute)
  
const port = 3000;

app.listen(port, () => { console.log(`O servidor está rodando na porta ${port}.`) });

module.exports = app