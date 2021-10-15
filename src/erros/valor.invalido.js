class valorInvalido extends Error {
    constructor(nome){ 
        super(`O campo ${nome} é inválido. Por favor digite um valor válido.`)
        this.name = 'valorInvalido'
        this.idErro = 0
    }
}

module.exports = valorInvalido