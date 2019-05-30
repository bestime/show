const defaultType = require('./defaultType.js')
/**
 * polling 轮询
 * @param {Function} handle[next, stop] # next 重复上一次操作，stop 终止所有操作
 * @param {Number} sleepTime # 轮询频率，单位毫秒
 * @param {Object|false} overTime # [可选或者false]json超时配置，time: 超时时间，handle超时处理函数。
 * @return {Object} 返回实例对象
 * 					- start 运行，可重复执行
 * 					- stop 终止所有操作
 */




/**



const oPoll = ns.polling({
  handle: (next, stop) => {
    if(false) {
      next()
    }else {
      stop()      
    }
  },
  sleepTime: 100,
  overTime: {
    time: 5000,
    handle: function () {
			// 超时了
		}
  }
})


oPoll.start(function () {
	// 成功
})

oPoll.stop()



 */

function polling (opt) {
	var timer = null;
	var timerOver = null;
	var isStart = false; // 是否开始超时计时
	var defaultSleep = 2000;
	var defaultOverTime = 1000 * 15;
	var startCallback = null;// start接口传入的回调函数
	
	// 处理时间-主函数
	var handle = defaultType('Function', opt.handle);
	
	// 等待时间
	var sleepTime = opt.sleepTime;
	
	// 等待时间
	sleepTime = defaultType('Number', sleepTime, defaultSleep); sleepTime = sleepTime<=17 ? defaultSleep : sleepTime;// 如果等待时间小于17则使用默认值
	
	// 超时配置，默认false
	var overTimeSetting = defaultType('Object', opt.overTime, false);
	var overTime = getOverTime(overTimeSetting.time, defaultOverTime);
	var overTimeHandle = defaultType('Function', overTimeSetting.handle);
	var overTimeChange = defaultType('Function', overTimeSetting.change);
	
	function getOverTime (time, defaultTime) {		
		time = defaultType('Number', time);
		if(time<=sleepTime) {
			time = sleepTime + 300;
		}
		return time;
	}
	
	function checkResult () {
		clearTimeout(timer); // 这里不清空overTimer。这个每次外部调用时清空
		if(!isStart) {
			isStart = true;	
			console.log('计时')		
			if(overTimeSetting) {
				// timerOver = setTimeout(function () {
				// 	overTimeHandle();
				// 	stop();
				// }, overTime);

				var passTime = 0
				timerOver = setInterval(function () {
					passTime += 1000
					if(passTime>=overTime) {
						clearInterval(timerOver)
						overTimeHandle()
						stop();
					}
					overTimeChange(overTime-passTime)
				}, 1000)
			}
		}
		// 主函数
		handle(function () {
			// 继续
			timer = setTimeout(checkResult, sleepTime);
		}, function (data) {
			// 停止
			stop();
			defaultType('Function', startCallback) (data);
		});
	};

	function start (cb) {
		stop()
		startCallback = cb;
		isStart = false;
		checkResult()
	}

	function stop () {
		isStart = true;
		clearTimeout(timer);
		clearTimeout(timerOver);		
	}

	return {
		start: start,
		stop: stop
	}
}

module.exports = polling

