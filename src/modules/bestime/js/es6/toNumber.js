/**
 * 强制转数字，转换失败就为0
 * @param {*} str 
 */
export default function toNumber(str) {
  return Number(str) || 0
}