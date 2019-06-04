/**
 * 强制转数字，转换失败就为0
 * 
 */


export default function _Number(data) {
  return Number(data) || 0
}