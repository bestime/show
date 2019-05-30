var toNumber =  require('./toNumber.js')

/**
 * 将可能超出指定区间数字控制在这个范围内
 * @param {Number} start 最小值
 * @param {Number} end 最大值
 * @return {Function}
 */



function numLimit (start, end) {
	start = toNumber(start);
	end = toNumber(end);		
	var min = Math.min(start, end);
	var max = Math.max(start, end);	
	return function (num) {		
		num = toNumber(num);
		if(num<min) {
			num = min;
		}else if(num > max) {
			num = max;
		}
		return num;
	}
}

module.exports = numLimit



/*

console.log(numLimit(4,1)(-1)) // 1

*/