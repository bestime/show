import _Object from './_Object'

/**
 * 将对象形式的class群转为 class字符串
 * @param {Object} data 
 * @return {String}
 */

export default function toClass (data) {
  data = _Object(data)
  const arr = []
  for(let key in data) {
    if(data[key]) {
      arr.push(key)
    }
  }
  return arr.join(' ')
}