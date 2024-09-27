const { applyRandomError } = require("../GeneratorErrors/Errors");

function applyErrorsToString(str, errorCount, region) {

	let modifiedRecord = str;
	const errorsAmount = Math.floor(errorCount);
	const additionalError = errorCount - errorsAmount;

	for (let i = 0; i < errorsAmount; i++) {
		modifiedRecord = applyRandomError(modifiedRecord, region);
	}

	if (Math.random() <= additionalError) {
		modifiedRecord = applyRandomError(modifiedRecord, region);
	}

	return modifiedRecord;
}

module.exports = {
	applyErrorsToString
}