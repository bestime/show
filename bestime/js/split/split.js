/**
 * 字符串转数组，空字符串转为空数组（原生方法会将空字符串转成长度为1的数组，不好用）
 * @param str {String} 需要转的字符串
 * @param flag {String} 需要分隔的标识符
 */

import isEmptyData from './isEmptyData'
import _String from './_String'

export default function split (str, flag) {
	return isEmptyData(str) ? [] : _String(str).split(_String(flag))
}
