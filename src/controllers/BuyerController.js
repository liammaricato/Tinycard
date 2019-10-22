const Buyer = require('../models/Buyer');
const { validateName,
        validateEmail,
        validateNumber,
        validateCPF } = require('../utils/Validation');

module.exports = {
    async store(req, res) {
        const { name, email, cpf } = req.body;

        if (!validateName(name))
            return res.status(400).json({ message: 'You have entered an invalid name! Try using just letters.'});

        if (!validateEmail(email))
            return res.status(400).json({ message: 'You have entered an invalid e-mail!'});

        if (!validateNumber(cpf))
            return res.status(400).json({ message: 'You have entered an invalid CPF format! Try using just numbers.'});
        else {
            if (!validateCPF(cpf))
                return res.status(400).json({ message: 'You have entered an invalid CPF!'});
        }

        const haveBuyer = await Buyer.findOne({ cpf });

        if (haveBuyer)
            return res.status(409).json({ message: "Buyer already exists!" });

        const buyer = await Buyer.create({ name, email, cpf });
        return res.status(201).json(buyer);
    }
};