/**
 * 获取数据类型
 * @param {*} data 
 */
export default function getType (data) {
  return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1)
}