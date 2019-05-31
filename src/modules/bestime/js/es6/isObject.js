import getType from './getType'

export default function isObject (data) {
  return getType(data)==='Object'
}