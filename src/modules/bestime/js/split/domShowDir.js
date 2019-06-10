import getRelativePos from './getRelativePos'
import getWindowSize from './getWindowSize'

export default function domShowDir (el) {
  const win = getWindowSize()
  const pos_1 = getRelativePos(el)
  let vertical = 'bottom'
  if(pos_1.y + pos_1.height > win.height) {
    vertical = 'top'
  }
  const res = {
    vertical
  }
  console.log(res, pos_1.y, pos_1.height, win.height)
  return res
}