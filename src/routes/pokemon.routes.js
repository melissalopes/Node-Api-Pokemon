const express = require('express');
const pokemonController = require('../controllers/pokemon.controller');
const router = express.Router();

router.get('/pokemon', pokemonController.getPokemons);
router.get('/pokemon/:id', pokemonController.getPokemonById)
router.post('/pokemon', pokemonController.postPokemon)
router.put('/pokemon', pokemonController.putPokemon)

module.exports = router;