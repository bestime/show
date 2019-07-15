import _Object from '../_Object'
import _Function from '../_Function'
import _Number from '../_Number'
import numberMin from '../numberMin'
import isObject from '../isObject'


function FunctionLoop (opt) {
  opt = _Object(opt)
  let times = 0
  let timer, timer_out;

  // 停止
  function stop () {
    times = 0
    clearTimeout(timer)
    clearTimeout(timer_out)
  }

  // 开始
  function start () {
    console.log('配置：', opt)
    const self = this
    times++
    if(times===1) {
      // 检测超时
      if(isObject(opt.overTime)) {
        timer_out = setTimeout(function () {
          stop.call(self)
          _Function(opt.overTime.handle).call(self)
        }, opt.overTime.time)
      }
    }

    _Function(opt.handle).call(
      // this 指向
      self,

      // 【继续】 回调
      function () {
        clearTimeout(timer)
        timer = setTimeout(function () {
          times > 0 && start.call(self)
        }, numberMin(opt.sleepTime, 20))
      },

      // 【停止】 回调
      function () {
        stop.call(self)
      },

      // 本次执行次数
      times
    )
  }

  return {
    start,
    stop: stop,
    setting: function (newSetting) {
      if(isObject(newSetting)) {
        isObject(newSetting.overTime) && (opt.overTime=newSetting.overTime)
        isNumber(newSetting.sleepTime) && (opt.sleepTime=_Number(newSetting.sleepTime))
        start.call(this)
      }
    }
  }
}

export default FunctionLoop