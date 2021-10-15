const express = require('express');
const pokemonController = require('../controllers/pokemon.controller');
const router = express.Router();

router.get('/pokemon', pokemonController.getPokemons);
router.get('/pokemon/:id', pokemonController.getPokemonById)
router.post('/pokemon', pokemonController.postPokemon)
/* router.put('/pokemon/:id', pokemonController.putPokemon)
router.delete('/pokemon/:id', pokemonController.deletePokemon) */

module.exports = router;