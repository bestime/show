

import each from './each'
import isEmpty from './isEmpty'

function reduce (arr, handle , initialValue) {
	var startIndex = 1;	
	var result = initialValue;
	
	if(isEmpty(initialValue)) {
		startIndex = 0;
		result = '';
	}
	
	each(arr, function (item, index) {
		if(startIndex<=index) {
			result = handle(result, item, index, arr);
		}		
	});
	
	return result;
}

export default reduce