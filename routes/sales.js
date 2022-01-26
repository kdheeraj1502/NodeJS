const express = require("express")
const router = express.Router()
// const Items = require('../models/ItemsModel')
const ItemsController = require('../controllers/ItemsController')

router.get('/', ItemsController.getItems)
router.get('/:id', ItemsController.getItemById)
router.patch('/:id', ItemsController.updateItem)
router.delete('/deleteUser/:id', ItemsController.removeItem)
router.post('/', ItemsController.saveItem)

module.exports = router