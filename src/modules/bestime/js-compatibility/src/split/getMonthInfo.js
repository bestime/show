var convertTime =  require('./convertTime.js')
var toNumber =  require('./toNumber.js')


function getMonthInfo (timestamp) {
	timestamp = toNumber(timestamp) || +new Date()
	var t = convertTime(timestamp, true);
	var status = [-1, 0, 1];// -1 上月， 0 当月， 1 下月
	var total = new Date(t.year, t.month, 0).getDate(); // 当月总共多少天
  var firstDayWeek =  getWeek(1) || 7; // 第一天索引
	
	var preStamp = 0
	var nextStamp = 0
	
	// 获取上下月信息
	function getNearMonth (flag) {
		var a_year = t.year
		var a_month = 0;
		if(flag=='pre') {
			a_month = toNumber(t.month) - 1;
			if(!a_month) {
				a_month = 12;
				a_year = toNumber(t.year) - 1;
			}
			preStamp = +new Date(a_year + '-' + a_month);
		}else if(flag=='next') {
			a_month = toNumber(t.month) + 1;
			if(a_month>12) {
				a_month = 1;
				a_year = toNumber(t.year) + 1;
			}
			nextStamp = +new Date(a_year + '-' + a_month);
		}
		
		return {year: a_year, month: toNumber(a_month), total: new Date(a_year,a_month, 0).getDate()}
	}
	
	
	
	function getDays () {
		var arr = [];
		var currentMonthArr = []
		var day = 0; // 当前几日
		var pre = getNearMonth('pre'); // 上月数据
		var oneData;
		
		var next = getNearMonth('next'); // 下月数据
		for(var a=0; a<42; a++) {
			oneData = null;
			day = a - firstDayWeek + 1;
			if(a<firstDayWeek) {
				// 上月数据
				oneData = {					
					year: pre.year,
					month: pre.month,
					day: pre.total - firstDayWeek + a + 1,
					status: status[0]
				}				
			}else if(firstDayWeek+total<=a) {
				// 下月数据
				oneData = {					
					year: next.year,
					month: next.month,
					day: day - total,
					status: status[2]
				}
			}else {
				// 本月数据
				oneData = {					
					year: t.year,
					month: t.month,
					day: day,
					status: status[1]
				}
				currentMonthArr.push(oneData)
			}
			if(oneData) {
				oneData.year = toNumber(oneData.year)
				oneData.month = toNumber(oneData.month)
				oneData.day = toNumber(oneData.day)
				arr.push(oneData)
			}
		}
		return [currentMonthArr, arr];
	}
	
	// 获取某天星期几
	function getWeek (day) {
		return new Date([t.year, t.month, day].join('/')).getDay()
	}
	
	var filterArr = getDays()
	
	
	var res = {
		arr: filterArr[0],// 本月数据数组
		calendarArr: filterArr[1],//日历数据数组，日历使用
		t: t,
		firstDayWeek: firstDayWeek,// 第一天星期几
		toDayWeek: getWeek(t.day),// 今天星期几
		nextMonthStamp: nextStamp,// 下月时间戳
		preMonthStamp: preStamp, // 上月时间戳
	}
	
	//console.log(res)
	
	return res
}

module.exports = getMonthInfo