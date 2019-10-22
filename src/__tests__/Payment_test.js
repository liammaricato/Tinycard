const { generateBoleto } = require('../controllers/PaymentController');

describe('Payment unit tests', () => {
    it('Validate generateBoleto', () => {
        expect(generateBoleto().length).toEqual(10);
        expect((/^[0-9]+$/).test(generateBoleto())).toEqual(true);
    })
});