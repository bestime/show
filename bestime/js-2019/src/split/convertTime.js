


function convertTime (date) { 
	return {
		year         : date.getFullYear(),
		month        : date.getMonth() + 1,
		day          : date.getDate(),
		hour        : date.getHours(),
		minute      : date.getMinutes(),
		second      : date.getSeconds(),
		milliSecond : date.getMilliseconds()
	}
}

module.exports = convertTime