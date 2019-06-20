//返回类型：对象--年、月、日、时、分、秒、毫秒
// date类型，如果传入的是时间戳字符串类型，第二个参数填 true
// typeNumber 是否返回存数字，不在前面补0
export default function convertTime (date, isString, typeNumber) {	
	date = isString ? new Date(Number(date)) : date;
	
	var result =  {
		year         : date.getFullYear(),
		month        : date.getMonth() + 1,
		day          : date.getDate(),
		hours        : date.getHours(),
		minutes      : date.getMinutes(),
		seconds      : date.getSeconds(),
		milliSeconds : date.getMilliseconds()
	}

	if(!typeNumber) {
		for(var key in result) {
			if(parseInt(result[key]) < 10) result[key] = '0' + result[key];
		}	
	}

	return result;
}