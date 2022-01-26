const Items = require('../models/ItemsModel')
const ItemsService = require('../services/ItemsService')

module.exports = {
    getItems: async (req, res) => {
        await ItemsService.getItems()
            .then(function (items) {
                res.json(items)
            })
            .catch(function (err) {
                res.send('Items not found ' + err);
            })
    },

    getItemById: async (req, res) => {
    await ItemsService.getItemById(req.params.id)
        .then(function (item) {
            res.json(item)
        })
        .catch(function (err) {
            res.send('Item not found');
        })
},

    updateItem: async (req, res) => {
    try {
        let name = req.body.name
        let description = req.body.description
        let available = req.body.available
        let price = req.body.price
        const items = await ItemsService.updateItem(req.params.id, name, description, available, price)
        res.json(items)
    } catch (err) {
        res.send('Could not update the item :: ' + err)
    }
},

/*const show = async (req, res) => {
    try {
        const item = await Items.findById(req.params.id)
        res.json(item)
    } catch (err) {
        res.send('Error ' + err)
    }
}*/
/*
const update = async (req, res) => {
    try {
        const items = await Items.findById(req.params.id)
        if (req.body.name != null) {
            items.name = req.body.name
        }
        if (req.body.available != null) {
            items.available = req.body.description
        }
        if (req.body.available != null) {
            items.available = req.body.available
        }
        if (req.body.price != null) {
            items.price = req.body.price
        }
        const itemUpdate = await items.save()
        res.json(itemUpdate)
    } catch (err) {
        res.send('Error ' + err)
    }
}*/
removeItem: async (req, res) => {
    try {
        const items = await Items.findById(req.params.id)
        if (items != null) {
            const itemDeleted = await items.remove();
            res.json('Item got deleted ' + itemDeleted.name)
        } else {
            res.json('Item Not Present for ID ' + req.params.id)
        }

    } catch (err) {
        res.send('Error ' + err)
    }
}
/*   removeItem: async (req, res) => {
            return await ItemsService.removeItem(req.params.id)
                .then(function (itemName) {
                    res.json('Item got deleted ' + itemName)
                })
                .catch(function (err) {
                    res.json('Item Not Present for ID ' + req.params.id)
                })
    }*/,

    saveItem: (req, res, next) => {
    const items = new Items({
        name: req.body.name,
        description: req.body.description,
        available: req.body.available,
        price: req.body.price
    })
        const item = items.save()
            .then(response => {
                res.json({
                    message: 'Item Added Successfully! You Item id is : ' + items.id
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error occured!'
                })
            })
}
}
