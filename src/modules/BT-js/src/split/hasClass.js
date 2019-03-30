//是否含有class
function hasClass (obj, cl){
    return obj.className.match(new RegExp('(\\s|^)' + cl + '(\\s|$)'));  
}

module.exports = hasClass