/*eslint no-unused-expressions: "error"*/

import toNumber from './toNumber'
import trim from './trim'

/**
 * 
 * @param {String} str 
 * @param {*} sign 正负数 ['*', '-', '+']
 * @param {String} integer 是否为整数 ['*', 'int']
 */

export default function isNumber (str, sign, integer) {
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
  
  let res = bol  
  switch(sign) {
    case '+': res = bol && number > 0; break;
    case '-': res = bol && number < 0; break;
  }
  return res
}