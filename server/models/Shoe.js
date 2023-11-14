const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema(
    {
        name: String,
        model: String,
        usMens: Number,
        usWomens: Number,
        ukSize: Number,
        euSize: Number,
        boxCm: Number,
        soleCm: Number,
        toeBox: String,
        width: String,
        inStock: Boolean,
        imageUrl: String,
        productUrl: String, 
    }
    );
    
    const Shoe = mongoose.model('Shoe', shoeSchema);
    
    module.exports = Shoe;