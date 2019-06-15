const trim = require('./trim.js')
const toNumber = require('./toNumber')

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
  var reg = '^' + zhengfu + '[0-9]+' + xiaoshu + '$'
  
  var bol = new RegExp(reg, 'g').test(trim(str))
  const number = toNumber(str)
  
  switch(sign) {
    case '+': return bol && number > 0;
    case '-': bol && number < 0;
    default: return bol
  }
}

module.exports = isNumber