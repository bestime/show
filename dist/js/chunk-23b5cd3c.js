(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b5cd3c"],{"223e":function(t,e,a){"use strict";var n=a("eed6"),o=a.n(n);o.a},"62b3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"radio-group-01"},[a("radio-item-vbt",{model:{value:t.test01,callback:function(e){t.test01=e},expression:"test01"}},[t._v("双向绑定")]),a("br"),a("radio-item-vbt",{attrs:{type:"square"},model:{value:t.test01,callback:function(e){t.test01=e},expression:"test01"}},[t._v("双向绑定")])],1),a("div",{staticClass:"radio-group-01"},[a("radio-item-vbt",{attrs:{value:t.test02},on:{"on-change":t.t2Change}},[t._v("加载过度")]),a("br"),a("radio-item-vbt",{attrs:{value:t.test02,type:"square"},on:{"on-change":t.t2Change}},[t._v("加载过度")])],1),a("div",{staticClass:"radio-group-01"},[a("div",{staticClass:"prefix"},[a("span",[t._v("选中的值 ")]),a("b",{staticStyle:{color:"red"}},[t._v(t._s(t.g_model_01))]),a("button",{staticStyle:{"margin-left":"10px"},on:{click:function(e){t.g_model_01="3"}}},[t._v("选王五")])]),a("radio-group-vbt",{model:{value:t.g_model_01,callback:function(e){t.g_model_01=e},expression:"g_model_01"}},[a("radio-item-vbt",{attrs:{groupkey:"a"}},[t._v("这个不是循环")]),t._l(t.list01,function(e,n){return a("radio-item-vbt",{key:n,attrs:{groupkey:e.key}},[t._v("\n        "+t._s(e.label)+"\n      ")])})],2)],1)])},o=[],s={data:function(){return{test01:!1,test02:!1,g_model_01:"1",list01:[{key:"1",label:"张三",checked:!1},{key:"2",label:"李四",checked:!1},{key:"3",label:"王五",checked:!1},{key:"4",label:"赵六",checked:!1}]}},mounted:function(){},methods:{t2Change:function(t){var e=this;setTimeout(function(){e.test02=t},1e3)}}},i=s,l=(a("223e"),a("2877")),c=Object(l["a"])(i,n,o,!1,null,null,null);e["default"]=c.exports},eed6:function(t,e,a){}}]);