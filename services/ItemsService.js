const Items = require('../models/ItemsModel')

module.exports = {
    getItems: function () {
        return Items.find()
            .then(function (items) {
                if (!items) {
                    throw ({ msg: "No Itmes found" });
                }
                return items;
            })
            .catch(error => {
                res.json({
                    message: 'An error occured!'
                })
            })
    },

    getItemById: function (itemId) {
        return Items.findById(itemId)
            .then(function (item) {
                if (!item) {
                    throw ({ msg: 'Item Not Found for ' + itemId });
                }
                return item;
            })
            .catch(error => {
                throw err
            })
    },

    updateItem: function (itemId, name, description, available, price) {
        const item = Items.findById(itemId)
        if (name != null) {
            item.name = name
        }
        if (description != null) {
            item.Description = description
        }
        if (available != null) {
            item.available = available
        }
        if (price != null) {
            item.price = price
        }
        const items = new Items(item)
        return items.save()
            .then(function (saved) {
                if (!saved) {
                    throw ({ msg: "Item updated" });
                }
                return items;
            })
            .catch(error => {
                res.json({
                    message: 'An error occured!'
                })
            })
    }
}