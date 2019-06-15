import _Number from './_Number'

export default function sleep (stamp) {
  stamp = _Number(stamp)
  return new Promise(resolve => setTimeout(resolve, stamp))
}