
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

    static async postPokemon ( req, res ) {
        const newPokemon = req.body
        try{
            const createPokemon = await service.createNewRegister(newPokemon);
            return res.status(201).json({registro: createPokemon, message: "Registro adicionado com sucesso!"});
        }catch(err){
            return res.status(400).json({
                message: `Não foi possível criar um novo registro.`,
                error: err.message,
              });
        }
    }

    static async putPokemon (req, res){
        const { id } = req.params;
        const newData = req.body;
        try{
            const updatePokemon = await service.updateRegister(newData, id);
            return res.status(200).json({registro: updatePokemon, message: "Registro atualizado com sucesso!"});
        }catch(err){     
            return res.status(400).json({
                message: `Não foi possível atualizar o registro.`,
                error: err.message,
              });
        };
    };

    static async deletePokemon (req, res){
        const { id } = req.params;
        try{
            await service.deleteRegister(id);
            return res.status(200).json({ 
                mensagem: `Registro de id ${id} deletado com sucesso!`
            });
        }catch(err){     
            return res.status(500).json({
                message: `Não foi possível deleter o registro de id ${id}.`,
                error: err.message,
              });
        };
    };

}

module.exports = pokemonController