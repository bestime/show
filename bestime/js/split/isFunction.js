import getType from './getType'

export default function isFunction (data) {
  return getType(data)==='Function'
}