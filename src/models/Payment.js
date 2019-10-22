const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    amount: Number,
    type: String,
    status:  { type: Boolean, default: false },
    card: {
        holder_name: String,
        number: String,
        expiration_date: String,
        cvv: String
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer'
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);