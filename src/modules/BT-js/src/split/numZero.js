function numZero (num) {
  num = Number(num) || 0
  return num < 10 ? '0' + num : num
}

module.exports = numZero;