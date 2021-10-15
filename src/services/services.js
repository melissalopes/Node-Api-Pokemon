const database = require('../models')

class Services {

    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async getAllRegisters () {
        return database[this.nomeDoModelo].findAll();
    }

    async getOneRegister (id) {
        const registro = await database[this.nomeDoModelo].findOne({
            where: {
                id: Number(id)
            }
        });
        
        if(!registro){
            throw new Error('Not Found!');
        }

        return registro;
    }

    async createNewRegister (dados) {
        const novoRegistro = await database[this.nomeDoModelo].create(dados);
        return novoRegistro
    }

    async updateRegister (dadosAtualizados, id) {

        await database[this.nomeDoModelo].update(
            dadosAtualizados, 
            { where: { id : Number(id) }
        });

        const registroAtualizado = await database[this.nomeDoModelo].findOne({
            where: { id: Number(id) } 
        });

        if(!registroAtualizado){
            throw new Error('Not Found!');
        }

        return registroAtualizado;
    }

    async deleteRegister (registroId) {
        await database[this.nomeDoModelo].destroy({ 
            where: { id : Number(registroId) } 
        });
    }

}

module.exports = Services