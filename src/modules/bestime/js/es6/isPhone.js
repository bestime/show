import trim from './trim'

/**
 * 判断是否是电话
 * @param {*} str 
 */
export default function isPhone (str) {
  return /^1[0-9]{10}$/.test(trim(str))
}