
const { pokemonsService } = require('../services');
const service = new pokemonsService();

class pokemonController {

    static async getPokemons ( req, res ) {
        try{
            const allPokemons = await service.getAllRegisters();
            return res.status(200).json({registros: allPokemons, message: "Registros encontrados com sucesso!"});
        }catch(err){
            return res.status(404).json({
                message: `Não foram encontrados registros.`,
                error: err.message,
              });
        }
    }

    static async getPokemonById ( req, res ) {
        const { id } = req.params;
        try{
            const aPokemon = await service.getOneRegister(id);
            return res.status(200).json({registro: aPokemon, message: "Registro encontrado com sucesso!"});
        }catch(err){
            return res.status(404).json({
                message: `Não foi encontrado um registro com este id: ${id}.`,
                error: err.message,
              });
        }
    }

}

module.exports = pokemonController