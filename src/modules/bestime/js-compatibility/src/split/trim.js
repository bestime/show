// 去除字符串首尾空格
function trim (str) {
    return String(str).replace(/(^\s*)|(\s*$)/g, '');
};

module.exports = trim