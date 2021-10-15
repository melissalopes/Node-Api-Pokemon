
const { pokemonsService } = require('../services');
const service = new pokemonsService();

class pokemonController {

    static async getPokemons ( req, res ) {
        try{
            const allPokemons = await service.getAllRegisters();
            return res.status(200).json({registros: allPokemons, message: "Registros encontrados com sucesso!"});
        }catch(err){
            return res.status(404).json(err.message);
        }
    }

}

module.exports = pokemonController