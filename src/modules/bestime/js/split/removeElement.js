//移除节点
export default function removeElement (el) {
  try {
    var oParent = el.parentNode
    oParent.removeChild(el)
  }catch(e) {}
}