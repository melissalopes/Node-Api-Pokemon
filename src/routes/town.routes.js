const express = require('express');
const townController = require('../controllers/town.controller');
const router = express.Router();

router.get('/town', townController.getTowns);
router.get('/town/:id', townController.getTownsById)
router.post('/town', townController.postTown)
router.put('/town', townController.putTown)

module.exports = router;