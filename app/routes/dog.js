const router = require('express').Router()
const dogController = require('../controllers/dog')

router.get('/', (req, res) => dogController.getAllDogs(req, res))

module.exports = router
