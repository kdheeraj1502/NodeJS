const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    available: {    
        type: Boolean,
        required: true,
        default: false
    },
    price: {
        type: Number,
        required: true
    }
})

const Items = mongoose.model('Items', itemsSchema)
module.exports = Items
