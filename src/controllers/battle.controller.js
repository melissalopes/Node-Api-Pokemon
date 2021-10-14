const getBattles = (req, res) => {
    try{
        res.status(200).json({ message: "Todas as batalhas consultadas com sucesso!"})
    }catch(err){
        res.status(404).json(err)
    }
}

const getBattleById = (req,res) => {
    try{
        res.status(200).json({ message: "Batalha de id 1 encontrada com sucesso!"})
    }catch(err){
        res.status(404).json(err)
    }
}

const postBattleStart = (req,res) => {
    try{
        res.status(200).json({ message: "Nova battle iniciada com sucesso!"})
    }catch(err){
        res.status(500).json(err)
    }
}

const postBattleAttack = (req,res) => {
    try{
        res.status(200).json({ message: "Battle adicionada a attack com sucesso!"})
    }catch(err){
        res.status(500).json(err)
    }
}

const postBattleFinish = (req,res) => {
    try{
        res.status(200).json({ message: "Battle finalizada com sucesso!"})
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getBattles,
    getBattleById,
    postBattleStart,
    postBattleAttack,
    postBattleFinish
}