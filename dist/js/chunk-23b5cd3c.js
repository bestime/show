(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b5cd3c"],{"223e":function(e,t,a){"use strict";var s=a("eed6"),i=a.n(s);i.a},"62b3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"radio-group-01"},[a("radio-item-vbt",{model:{value:e.test01,callback:function(t){e.test01=t},expression:"test01"}},[e._v("双向绑定")]),a("br"),a("radio-item-vbt",{attrs:{type:"square"},model:{value:e.test01,callback:function(t){e.test01=t},expression:"test01"}},[e._v("双向绑定")])],1),a("div",{staticClass:"radio-group-01"},[a("radio-item-vbt",{attrs:{value:e.test02},on:{"on-change":e.t2Change}},[e._v("加载过度")]),a("br"),a("radio-item-vbt",{attrs:{value:e.test02,type:"square"},on:{"on-change":e.t2Change}},[e._v("加载过度")])],1),a("div",{staticClass:"radio-group-01"},[a("div",{staticClass:"prefix"},[a("span",[e._v("选中的值 ")]),a("b",{staticStyle:{color:"red"}},[e._v(e._s(e.g_model_01))]),a("button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){e.g_model_01="3"}}},[e._v("选王五")])]),a("radio-group-vbt",{model:{value:e.g_model_01,callback:function(t){e.g_model_01=t},expression:"g_model_01"}},[a("radio-item-vbt",{attrs:{disabled:"",groupkey:"a"}},[e._v("这个不是循环")]),e._l(e.list01,function(t,s){return a("radio-item-vbt",{key:s,attrs:{groupkey:t.key,disabled:t.disabled}},[e._v("\n        "+e._s(t.label)+"\n      ")])})],2)],1)])},i=[],n={data:function(){return{test01:!1,test02:!1,g_model_01:"1",list01:[{key:"1",label:"张三",checked:!1},{key:"2",label:"李四",checked:!1,disabled:!0},{key:"3",label:"王五",checked:!1},{key:"4",label:"赵六",checked:!1}]}},mounted:function(){},methods:{t2Change:function(e){var t=this;setTimeout(function(){t.test02=e},1e3)}}},o=n,l=(a("223e"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,null,null);t["default"]=c.exports},eed6:function(e,t,a){}}]);