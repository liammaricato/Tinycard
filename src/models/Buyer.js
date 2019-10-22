const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    name: String,
    email: String,
    cpf: String,
});

module.exports = mongoose.model('Buyer', BuyerSchema);