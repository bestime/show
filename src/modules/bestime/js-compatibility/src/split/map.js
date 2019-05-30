const each = require('./each')
const getType = require('./getType')
const defaultType = require('./defaultType')

function map (data, handle) {		
	var newArr = [];
	
	each(defaultType('Array', data), function (item, index) {
		newArr.push(handle(item, index, data));
	});

	if(getType(data)=='Object') {
		for(var key in data) {
			newArr.push(handle(data[key], key, data));
		}
	}
	
	return newArr;
}

module.exports = map