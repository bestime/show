/**
 * 移除首尾空格
 * @param {*} str 
 */
export default function trim (str) {
  if(typeof str ==='undefined') return ''
  return String(str).replace(/(^\s*)|(\s*$)/g, '');
};