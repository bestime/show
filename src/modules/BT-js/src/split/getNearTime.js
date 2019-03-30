const convertTime = require('./convertTime.js')

/**
 * 获取当前时间前后多久的时间。比如5天前或者5天后。可接收小数
 * @param {Date} date 需要计算的时间
 * @param {Num} num 单位：天
 */
function getNearTime (date, num) {
    var targetStamp = new Date(date).getTime() + num * 24 * 60 * 60 * 1000;        
    return convertTime(new Date(targetStamp));
}

module.exports = getNearTime