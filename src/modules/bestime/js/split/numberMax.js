import _Number from './_Number'

/**
 * 获取最大数字
 * @param {Number} data 
 * @param {Number} min 
 */
export default function numberMax (data, min) {
  data = _Number(data)
  min = _Number(min)
  return data < min ? data : min
}