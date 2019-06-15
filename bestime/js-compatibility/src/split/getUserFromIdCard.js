const trim = require('./trim')
const numZero = require('./numZero')

function getUserFromIdCard(id) {
	id = trim(String(id))
	var year = numZero(id.substr(6, 4))
	var month = numZero(id.substr(10, 2))
	var day = numZero(id.substr(12, 2))

	return month <= 12 && month >= 1 && day >= 1 && day <= 31 ? {
		year: year,
		month: month,
		day: day,
	} : false
}

module.exports = getUserFromIdCard;