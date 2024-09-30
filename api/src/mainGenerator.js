
const  FakerClass  = require('./FakerClass');
const ErrorProvider = require("./ErrorProvider");
const ErrorClass = require("./ErrorClass");

function generateRecords(region, errors, seed ) {


	const errorsCount = Math.round(errors/4 * 10)/10;

	const fakerIns = new FakerClass(region);
	fakerIns.setSeed(parseInt(seed));

	const recordsNumber = 20;
	const records = []

	for (let i = 0; i < recordsNumber; i++) {

		const record = fakerIns.generateUserData();

		Object.entries(record).forEach(([key, value]) => {
			const mixedSeed = `${seed}${i + 1}${key}`;
			const errorsIns = new ErrorClass(region, errorsCount, mixedSeed);
			record[key] = errorsIns.applyError(value);
		});
		records.push(record);
	}
	return records;
}

module.exports = {
	generateRecords
};
