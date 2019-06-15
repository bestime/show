const convertTime = require('./convertTime.js')

//获取当前时间
function getNowTime () {
    return convertTime(new Date());
}

module.exports = getNowTime