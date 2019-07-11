

/**
 * 
 * @param {Object} opt 配置
 * opt.handle(next, stop) 处理函数 可外部改变this指向
 * opt.sleepTime 间歇时间
 * overTime:{ time, handle} 超时设置 time必须大于5000否则视为无配置
 */


 /*

  var myPoll = loopFunc({
    handle: function (next, stop) {
      if(this.open) {
        console.log('next：', this.open)
        next()
      }else {
        console.log('stop：', this.open)
        stop()
      }
    },
    sleepTime: 1000,
    overTime: {
      time: 5000,
      handle: function () {
        console.log('超时了', this.open)
      }
    }
  })

  myPoll.start.call(this)
  myPoll.stop.call(this)


  */


 const _Object = require('./_Object')
 const _Function = require('./_Function')
 const _Number = require('./_Number')

function loopFunc (opt) {
  var handle = _Function(opt.handle)
  var sleepTime = _Number(opt.sleepTime)
  sleepTime = sleepTime < 17 ? 17 : sleepTime
  var times = 0

  var overTime = _Object(opt.overTime)
  overTime.time = _Number(overTime.time)
  overTime.time = overTime.time < 5000 ? 0 : overTime.time
  overTime.handle = _Function(overTime.handle)

  var timer = null;
  var isStart = false; // 是否轮询中
  var overTimeTimer = null

	function start () {
    var self = this
    times++
    // 处理超时
    if(!isStart) {
      isStart = true;      
      if(overTime.time) {
        overTimeTimer = setTimeout(function () {
          if(isStart) {
            stop()
            overTime.handle.call(self)
          }
        }, overTime.time)
      }      
    }

    clearTimeout(timer)
    handle.call(this, function () {
       timer = setTimeout(function () {
        isStart && start.call(self) // 改变this指向
      }, sleepTime)
    }, function () {
      stop.call(self)
    }, times)
  }

	function stop () {
    times = 0
    isStart = false
    clearTimeout(timer)
    clearTimeout(overTimeTimer)
	}

	return {
		start: start,
		stop: stop
	}
}

module.exports = loopFunc

