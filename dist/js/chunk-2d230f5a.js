(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230f5a"],{ef03:function(n,o,t){"use strict";t.r(o);var e=function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"dialog-eg"},[t("button-vbt",{on:{click:n.show01}},[n._v("测试")])],1)},c=[],l=(t("6c7b"),t("bb57"),{data:function(){return{}},mounted:function(){},methods:{show01:function(){ns.dialog({msg:new Array(1).fill("这是消息").join("<br/>"),onShow:function(){console.log("显示了")},startClose:function(n,o){console.log("关闭前操作：",o),setTimeout(function(){n(!0,"有什么失败了")},1e3)},closed:function(n){console.log("关闭了",n)},autoClose:21230})}}}),s=l,u=t("2877"),i=Object(u["a"])(s,e,c,!1,null,null,null);o["default"]=i.exports}}]);