const { 
    validateName,
    validateNumber,
    validateType,
    validateCVV,
    validateExpDate,
    validateCPF,
    validateEmail
} = require('../utils/Validation');

describe('Validation unit tests', () => {
    it('validateName with correct inputs', () => {
        expect(validateName('Liam Maricato Pitta Brás')).toEqual(true);
        expect(validateName('Pedro Bial')).toEqual(true);
        expect(validateName('João até foi à janela caçoar dos leões de Schrödinger')).toEqual(true);
    }),

    it('validateName with incorrect inputs', () => {
        expect(validateName('123456789')).toEqual(false);
        expect(validateName('Jamir, o incontestável')).toEqual(false);
        expect(validateName('Cuidado!')).toEqual(false);
        expect(validateName('gatinha_assassina@yakult.com')).toEqual(false);
        expect(validateName('')).toEqual(false);
    }),

    it('validateNumber with correct inputs', () => {
        expect(validateNumber('123456789')).toEqual(true);
        expect(validateNumber('1')).toEqual(true);
        expect(validateNumber('000000000')).toEqual(true);
    }),

    it('validateNumber with incorrect inputs', () => {
        expect(validateNumber('1234 5678')).toEqual(false);
        expect(validateNumber('senha123')).toEqual(false);
        expect(validateNumber('100.00')).toEqual(false);
        expect(validateNumber('1!')).toEqual(false);
        expect(validateNumber('')).toEqual(false);
    }),

    it('validateType with correct inputs', () => {
        expect(validateType('credit card')).toEqual(true);
        expect(validateType('boleto')).toEqual(true);
    }),

    it('validateType with incorrect inputs', () => {
        expect(validateType('anything thats not credit card or boleto')).toEqual(false);
        expect(validateType('123')).toEqual(false);
        expect(validateType('boletow')).toEqual(false);
        expect(validateType('')).toEqual(false);
    }),

    it('validateCVV with correct inputs', () => {
        expect(validateCVV('123')).toEqual(true);
        expect(validateCVV('000')).toEqual(true);
        expect(validateCVV('9999')).toEqual(true);
    }),

    it('validateCVV with incorrect inputs', () => {
        expect(validateCVV('12345')).toEqual(false);
        expect(validateCVV('jaguatirica')).toEqual(false);
        expect(validateCVV('123!')).toEqual(false);
        expect(validateCVV('')).toEqual(false);
    }),

    it('validateExpDate with correct inputs', () => {
        expect(validateExpDate('11/19')).toEqual(true);
        expect(validateExpDate('11/27')).toEqual(true);
        expect(validateExpDate('07/27')).toEqual(true);
    }),

    it('validateExpDate with incorrect inputs', () => {
        expect(validateExpDate('2019')).toEqual(false);
        expect(validateExpDate('07.27')).toEqual(false);
        expect(validateExpDate('errado')).toEqual(false);
        expect(validateExpDate('')).toEqual(false);
    }),
    
    it('validateCPF with correct inputs', () => {
        expect(validateCPF('12345678909')).toEqual(true);
        expect(validateCPF('75883948030')).toEqual(true);
    }),

    it('validateCPF with incorrect inputs', () => {
        expect(validateCPF('11111111111')).toEqual(false);
        expect(validateCPF('75883948031')).toEqual(false);
        expect(validateCPF('errado')).toEqual(false);
        expect(validateCPF('')).toEqual(false);
    }),

    it('validateEmail with correct inputs', () => {
        expect(validateEmail('liammaricato@gmail.com')).toEqual(true);
        expect(validateEmail('gatinha_assassina@yakult.com')).toEqual(true);
    }),

    it('validateEmail with incorrect inputs', () => {
        expect(validateEmail('liammaricato')).toEqual(false);
        expect(validateEmail('gatinha_assassina@yakult/com')).toEqual(false);
        expect(validateEmail('gatinha_assassina@yakult..com')).toEqual(false);
        expect(validateEmail('pedrobial.com')).toEqual(false);
        expect(validateEmail('123')).toEqual(false);
        expect(validateEmail('')).toEqual(false);
    })
});
  