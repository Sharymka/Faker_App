
const { applyErrorsToString } = require("../GeneratorErrors/applyErrorsToString");
const  FakerClass  = require('../GeneratorErrors/FakerClass');

function generateUserData(region, errors, seed ) {

	const fakerIns = new FakerClass(region);
	fakerIns.setSeed(parseInt(seed));

	const errorsCount = Math.round(errors/4 * 10)/10;
	const recordsNumber = 20;
	const records = []

	for (let i = 0; i < recordsNumber; i++) {
		records.push(fakerIns.generateUserData())
	}
	return records;
}

module.exports = {
	generateUserData
};
