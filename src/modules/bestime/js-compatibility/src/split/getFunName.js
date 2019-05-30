function getFunName (fun) {
    return fun.name || fun.toString().match(/function\s*([^(]*)\(/)[1];
}

module.exports = getFunName