const express = require('express');
const battleController = require('../controllers/battle.controller');
const router = express.Router();

router.get('/battle', battleController.getBattles);
router.get('/battle/:id', battleController.getBattleById)
router.post('/battle/start', battleController.postBattleStart)
router.post('/battle/attack', battleController.postBattleAttack)
router.post('/battle/finish', battleController.postBattleFinish)

module.exports = router;