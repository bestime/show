/**
 * 获取数据类型
 * @param {*} data 
 */
module.exports = function (data) {
  return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1)
}