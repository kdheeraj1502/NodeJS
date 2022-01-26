const express = require("express")
const router = express.Router()
// const Items = require('../models/ItemsModel')
const ItemsController = require('../controllers/ItemsController')

router.get('/find/all', ItemsController.getItems)
router.get('/find/by/:id', ItemsController.getItemById)
router.patch('/update/item/:id', ItemsController.updateItem)
router.delete('/delete/:id', ItemsController.removeItem)
router.post('/save', ItemsController.saveItem)

module.exports = router