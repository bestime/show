var toNumber = require('./toNumber.js')
var defaultType = require('./defaultType.js')


function convertTimeStamp (millisecond, formatArr) {
	formatArr = defaultType('Array', formatArr)
	millisecond = toNumber(millisecond);
	var oneDay = 24 * 60 * 60 * 1000
	var oneHour = 60 * 60 * 1000
	var oneMinute = 60 * 1000
	var oneSecond = 1000


	
	// 天
	var day = Math.floor(millisecond / oneDay);
	millisecond = millisecond % oneDay
	
	// 小时
	var hour = Math.floor(millisecond / oneHour)
	millisecond = millisecond % oneHour
	
	// 分钟
	var minute = Math.floor(millisecond / oneMinute)
	millisecond = millisecond % oneMinute
	
	// 秒
	var second = Math.floor(millisecond / oneSecond)
	millisecond = millisecond % oneSecond



	function getFormat () {
		var str = ''
		var arr = [
			[day, formatArr[0]],
			[hour, formatArr[1]],
			[minute, formatArr[2]],
			[second, formatArr[3]],
			[millisecond, formatArr[4]]
		]
		for(var a=0; a<arr.length; a++) {
			var item = arr[a]
			if(item[0] && item[1]) {
				str += item[0] + item[1]
			}
		}
		return str
	}
	
	return { 
		day: day,
		hour: hour,
		minute: minute,
		second: second,
		millisecond: millisecond,
		format: getFormat()
	}
}

module.exports = convertTimeStamp;