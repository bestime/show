(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cdad888"],{3253:function(t,a,e){"use strict";var n=e("deec"),i=e.n(n);i.a},"47aa":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"father",staticClass:"drag-father"},[e("switch-vbt",{staticStyle:{margin:"10px"},on:{"on-change":t.change},model:{value:t.xianzhi,callback:function(a){t.xianzhi=a},expression:"xianzhi"}},[t._v("限制在本容器中拖动")]),e("div",{staticClass:"drag-eg-wrapper",attrs:{id:"drag-test01"}},[e("button",{ref:"btn01"},[t._v("拖动我")])]),e("div",{staticClass:"drag-eg-wrapper",staticStyle:{left:"330px",top:"60px",background:"red"},attrs:{id:"drag-test02"}},[e("button",{ref:"btn02"},[t._v("拖动我")])])],1)},i=[],r=e("93f1"),s={data:function(){return{xianzhi:!0}},mounted:function(){var t=this;this.$nextTick(function(){t.initDrag01(),t.initDrag02()})},methods:{change:function(t){this.drag01&&this.drag01.updateFahter(t?this.$refs.father:null),this.drag02&&this.drag02.updateFahter(t?this.$refs.father:null)},initDrag01:function(){this.drag01=Object(r["drag"])({oWrapper:document.getElementById("drag-test01"),oHandle:this.$refs.btn01,oFather:this.xianzhi?this.$refs.father:null})},initDrag02:function(){this.drag02=Object(r["drag"])({oWrapper:document.getElementById("drag-test02"),oHandle:this.$refs.btn02,oFather:this.xianzhi?this.$refs.father:null})}}},d=s,h=(e("3253"),e("2877")),c=Object(h["a"])(d,n,i,!1,null,null,null);a["default"]=c.exports},deec:function(t,a,e){}}]);