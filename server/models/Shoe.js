const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema(
    {
        Name: String,
        Model: String,
        USMens: Number,
        USWomens: Number,
        UKSize: Number,
        EUSize: Number,
        boxCM: Number,
        soleCM: Number,
        toeBox: String,
        Width: String,
        inStock: Boolean,
        imageUrl: String,
        productUrl: String, 
    }
    );
    
    const Shoe = mongoose.model('Shoe', shoeSchema);
    
    module.exports = Shoe;