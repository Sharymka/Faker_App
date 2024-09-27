const {spanishFullNames} = require("./repo/SpainRepo");
const {ukrainianFullNames} = require("./repo/UkrainRepo");
const {generatePhoneNumber} = require("./generatePhoneNumber");
const {generateAddress} = require("./generateAddress");

const config = {
	'ES': {
		locale: 'es',
		fullNameArray: spanishFullNames,
		generateAddress: () => generateAddress('ES'),
		generatePhoneNumber: () => generatePhoneNumber('ES'),
	},
	'UK': {
		locale: 'uk',
		fullNameArray: ukrainianFullNames,
		generateAddress: () => generateAddress('UK'),
		generatePhoneNumber: () => generatePhoneNumber('UK'),
	},
	'US': {
		locale: 'en_US',
		fullNameArray: null, // Faker по умолчанию предоставляет полные имена для 'en_US'
		generateAddress: () => generateAddress('US'),
		generatePhoneNumber: () => generatePhoneNumber('US'),
	}
};

module.exports = {
	config
}