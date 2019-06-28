import _Function from './_Function.js'
import _Object from './_Object.js'
import _Array from './_Array.js'


export default function defaultType (type, data) {
  let res = ''
  switch (type) {
    case 'Function': res = _Function(data); break;
    case 'Object': res = _Object(data); break;
    case 'Array': res = _Array(data); break;      
  }
  
  return res
}