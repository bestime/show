var convertTime = require('./convertTime.js')
var toNumber = require('./toNumber.js')

function transTimeToRecent (str) {
  str = String(toNumber(str));
  // 补足13位
  var lastLength = 13 - str.length;
  for(var a=0; a<lastLength; a++) {
    str += '0'
  }
  var now = +new Date(); // 当前时间戳
  var time = +new Date(Number(str)); // 传入的时间戳
  var t = Number(now) - time; // 时间差
	  
	var seconds = Math.ceil(t/1000);
  var minutes = Math.ceil(t/1000/60);
  var hours = Math.ceil(t/1000/60/60);
  var day = Math.ceil(t/1000/60/60/24);

  if(!seconds) {
    res = '刚刚'
  }else if(seconds<60) {
    res = seconds + '秒前'
  }else if(minutes<60) {
    res = minutes + '分前'
  }else if(hours<24) {
    res = hours + '小时前'
  }else if(day<30) {
    res = day + '天前'
  }else {
		var m = convertTime(str, true);
    res = m.year + '/' + m.month + '/' + m.day + ' ' + m.hours + ':' + m.minutes + ':' + m.milliSeconds
  }

  return res;
}

module.exports = transTimeToRecent