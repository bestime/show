/**
 * 获取数据类型
 * @param {*} data 
 */
export function getType (data) {
	return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1)
}


/**
 * 判断是否是电话
 * @param {*} str 
 */
export function isPhone (str) {
  return /^1[0-9]{10}$/.test(trim(str))
}

/**
 * 移除首尾空格
 * @param {*} str 
 */
export function trim (str) {
  return String(str).replace(/(^\s*)|(\s*$)/g, '');
};