
const  FakerClass  = require('./FakerClass');

function generateUserData(region, errors, seed ) {


	const errorsCount = Math.round(errors/4 * 10)/10;
	const fakerIns = new FakerClass(region, errorsCount);
	fakerIns.setSeed(parseInt(seed));

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

