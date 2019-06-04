/**
 * 移除首尾空格
 * @param {*} str 
 */
export default function trim (str) {
  return String(str).replace(/(^\s*)|(\s*$)/g, '');
};