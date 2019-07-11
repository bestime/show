import _Number from './_Number'
import _String from './_String'

function zero (num) {
  num = _Number(num)
  return num < 10 ? `0${num}` : _String(num)
}

export default zero