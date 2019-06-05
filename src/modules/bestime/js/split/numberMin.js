import _Number from './_Number'

/**
 * 获取最小数字
 * @param {Number} data 
 * @param {Number} min 
 */
export default function numberMin (data, min) {
  data = _Number(data)
  min = _Number(min)
  return data > min ? data : min
}