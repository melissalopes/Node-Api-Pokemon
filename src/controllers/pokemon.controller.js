const getPokemons = (req, res) => {
    try{
        res.status(200).json({ message: "Todos os pokemons consultados com sucesso!"})
    }catch(err){
        res.status(404).json(err)
    }
}

const getPokemonById = (req,res) => {
    try{
        res.status(200).json({ message: "Pokemon de id 1 encontrado com sucesso!"})
    }catch(err){
        res.status(404).json(err)
    }
}

const postPokemon = (req,res) => {
    try{
        res.status(200).json({ message: "Novo Pokemon adicionado com sucesso!"})
    }catch(err){
        res.status(500).json(err)
    }
}

const putPokemon = (req,res) => {
    try{
        res.status(200).json({ message: "Pokemon de id 1 atualizado com sucesso!"})
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getPokemons,
    getPokemonById,
    postPokemon,
    putPokemon
}