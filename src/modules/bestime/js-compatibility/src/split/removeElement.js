//移除节点
function removeElement (removeEl) {
    try {
        var oParent = removeEl.parentNode
        oParent.removeChild(removeEl)
    }catch(e) {}
}

module.exports = removeElement