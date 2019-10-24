const Payment = require('../models/Payment');
const Buyer = require('../models/Buyer');
const Client = require('../models/Client');
const { validateNumber,
        validateType,
        validateName,
        validateExpDate,
        validateCVV } = require('../utils/Validation');
const cardValidator = require('card-validator');

const generateBoleto = () => {
    var result = '';
    const characters = '0123456789';
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 10));
    }
    return result;
};

module.exports = {
    async store(req, res) {
        const { amount, type, card, buyer_id, client_id } = req.body;
        
        if (!validateNumber(amount) || amount <= 0)
            return res.status(400).json({ message: 'You have entered an invalid amount! Try using just numbers, where the last two digits are always the cents. Ex: $1.00 = 100'});

        if (!validateType(type))
            return res.status(400).json({ message: 'You have entered an invalid type! Try choosing between \'credit card\' and \'boleto\'.'});
        
        if (type == 'credit card') {
            if (!validateName(card.holder_name))
                return res.status(400).json({ message: 'You have entered an invalid card holder name! Try using just letters.'});

            var validateCard = cardValidator.number(card.number);
            if (!validateCard.isValid)
                return res.status(400).json({ message: 'You have entered an invalid card number!'});

            if (!validateExpDate(card.expiration_date))
                return res.status(400).json({ message: 'You have entered an invalid card expiration date! Try following this format: 10/19'});
            
            if (!validateCVV(card.cvv))
                return res.status(400).json({ message: 'You have entered an invalid card CVV! Try typing just 3 or 4 numbers.'});

            const buyer = await Buyer.findById(buyer_id);
            if (!buyer)
                return res.status(404).json({ message: 'Buyer not found!'});
        
            const client = await Client.findById(client_id);
            if (!client)
                return res.status(404).json({ message: 'Client not found!'});
            
            const payment = await Payment.create({
                amount,
                type,
                card,
                buyer: buyer_id,
                client: client_id,
                status: true
            });

            return res.status(201).json({ payment, message: 'Payment successful!' });
        }
        else {
            const buyer = await Buyer.findById(buyer_id);
            if (!buyer)
                return res.status(404).json({ message: 'Buyer not found!'});

            const client = await Client.findById(client_id);
            if (!client)
                return res.status(404).json({ message: 'Client not found!'});
         
            const payment = await Payment.create({
                amount,
                type,
                buyer: buyer_id,
                client: client_id
            });

            return res.status(201).json({ payment, boleto_number: generateBoleto() });
        }
    },

    async show(req, res) {
        const { paymentid } = req.params;

        const payment = await Payment.findOne({ _id: paymentid });
        if (!payment)
            return res.status(404).json({ message: 'Payment not found!' });

        return res.json(payment);
    },

    async update(req, res) {
        const { paymentid } = req.params;

        const payment = await Payment.findByIdAndUpdate(paymentid, {status: true});
        if (!payment)
            return res.status(404).json({ message: 'Payment not found!' });

        return res.json({ message: 'Payment successfully approved!' });
    },

    generateBoleto
};