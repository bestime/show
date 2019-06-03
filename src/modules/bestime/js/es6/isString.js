import getType from './getType'

export default function isString (data) {
  return getType(data)==='String'
}