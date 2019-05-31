// []
// {}
// function
import getType from './getType'
import each from './each'

export default function clone(data) {
  var type = getType(data);

  var result = null;
  if (type == 'Array') {
    result = [];
    each(data, function (item) {
      result.push(clone(item));
    });
  } else if (type == 'Object') {
    result = {};
    for (var key in data) {
      result[key] = clone(data[key]);
    }
  } else if (type == 'Function') {
    function newFun() {
      data.apply(this, arguments);
    }

    for (var proName in data.prototype) {
      newFun.prototype[proName] = data.prototype[proName];
    }

    result = newFun;
  } else {
    result = data;
  }

  return result;
}






// // arr1.c 的 prototype
// arr1['c'].prototype.show = function () {
// 	console.log('arr1')
// }

// // 复制
// var arr2 = ns.clone(arr1);

// console.log('\r\n-- a 对比 --')
// arr1.a.push('arr1');
// arr2.a.push('arr2');

// console.log(arr1.a)
// console.log(arr2.a)




// console.log('\r\n-- b 对比 --')
// arr1.b.message = 'arr1';
// arr2.b.message = 'arr2';

// console.log(arr1.b)
// console.log(arr2.b)





// console.log('\r\n-- c 对比 --')
// arr1['c'].prototype.show = function () {
// 	console.log('arr1 中的show')
// }

// arr2['c'].prototype.show = function () {
// 	console.log('arr1 中的show')
// }

// var arrD1 = new arr1.c('arr1');
// var arrD2 = new arr2.c('arr2');
// arrD1.show()
// arrD2.show()