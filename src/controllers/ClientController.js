const Client = require('../models/Client');
const { validateName } = require('../utils/Validation');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        if (!validateName(name))
            return res.status(400).json({ message: 'You have entered and invalid name! Try using just letters.'});

        client = await Client.create({ name });

        return res.status(201).json(client);
    }
};