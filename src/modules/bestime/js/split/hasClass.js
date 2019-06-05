export default function hasClass (obj, cl){
  return obj.className.match(new RegExp('(\\s|^)' + cl + '(\\s|$)'));  
}