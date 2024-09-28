const { applyRandomError } = require("../GeneratorErrors/Errors");

function applyErrorsToString(str, errorCount, region, faker) {

	let modifiedRecord = str;
	const errorsAmount = Math.floor(errorCount);
	const additionalError = errorCount - errorsAmount;

	for (let i = 0; i < errorsAmount; i++) {
		modifiedRecord = applyRandomError(modifiedRecord, region, faker);
	}

	if (Math.random() <= additionalError) {
		modifiedRecord = applyRandomError(modifiedRecord, region, faker);
	}

	return modifiedRecord;
}

module.exports = {
	applyErrorsToString
}