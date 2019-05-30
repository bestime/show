const trim = require('./trim.js')

/**
 * 
 * @param {String} str 
 * @param {*} sign 正负数 ['*', '-', '+']
 * @param {String} integer 是否为整数 ['*', 'int']
 */

function isNumber (str, sign, integer) {
  var zhengfu = '(-|\\+)?' // 正负
  var xiaoshu = integer==='int' ? '(\.0+)?' : '(\.[0-9]+)?' // 是否整数
  if(sign==='-') {
    zhengfu = '-'
  }else if(sign==='+') {
    zhengfu = '\\+?'
  }
  var regStr = '^' + zhengfu + '[0-9]+' + xiaoshu + '$'
  
  var res = new RegExp(regStr, 'g').test(trim(str))
  return res
}

module.exports = isNumber