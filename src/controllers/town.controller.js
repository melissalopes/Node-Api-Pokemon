const getTowns = (req, res) => {
    try{
        res.status(200).json({ message: "Todas as cidades consultadas com sucesso!"})
    }catch(err){
        res.status(404).json(err)
    }
}

const getTownsById = (req,res) => {
    try{
        res.status(200).json({ message: "Cidade de id 1 encontrada com sucesso!"})
    }catch(err){
        res.status(404).json(err)
    }
}

const postTown = (req,res) => {
    try{
        res.status(200).json({ message: "Nova cidade adicionada com sucesso!"})
    }catch(err){
        res.status(500).json(err)
    }
}

const putTown = (req,res) => {
    try{
        res.status(200).json({ message: "Cidade de id 1 atualizada com sucesso!"})
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getTowns,
    getTownsById,
    postTown,
    putTown
}