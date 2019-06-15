var trim = require('./trim.js')

function isPrice (text) {
	text = trim(String(text));
	var bol = /^[0-9]{1,}\.?[0-9]*$/g.test(text)	
	if(!text) bol = true
	return bol
}

module.exports = isPrice