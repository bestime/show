import toNumber from './toNumber'
import fixed from './fixed'
/**
 * 计算平均数
 * @param {Number} section 分成几份，最小值为1
 * @param {Number} num 被分的数字
 * @param {Number} decimal 保留几位小数，默认0
 */
export default function average (section, num, decimal) {
  decimal = toNumber(decimal)
  section = toNumber(section) || 1  
  num = fixed(decimal)(num)
  const avg = fixed(decimal)(num / section)
  const res = new Array(section).fill(avg)
  res[res.length - 1] = fixed(decimal)(num - avg * (section - 1))
  return res
}