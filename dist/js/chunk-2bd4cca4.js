(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bd4cca4"],{"1fba":function(t,e,n){"use strict";var o=n("32f0"),i=n.n(o);i.a},"32f0":function(t,e,n){},bb60:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("switch-vbt",{model:{value:t.open,callback:function(e){t.open=e},expression:"open"}}),n("button",{on:{click:t.customStop}},[t._v(t._s(t.open?"停止":"开始"))]),n("br"),n("div",[t._v(t._s(t.msg))]),n("vbt-swiper-wrapper",{staticStyle:{width:"300px",height:"500px",border:"#000 solid 1px"}},[n("vbt-swiper-item",[t._v("1")]),n("vbt-swiper-item",[t._v("2")]),n("vbt-swiper-item",[t._v("3")]),n("vbt-swiper-item",[t._v("4")]),n("vbt-swiper-item",[t._v("5")]),n("vbt-swiper-item",[t._v("6")]),n("vbt-swiper-item",[t._v("7")])],1)],1)},i=[],s=ns.loopFunc({handle:function(t,e){this.msg+="每次轮询的结果："+this.open,this.open?(console.log("next：",this.open),t()):(console.log("stop：",this.open),e())},sleepTime:1e3,overTime:{time:5e3,handle:function(){console.log("超时了",this.open)}}}),p={data:function(){return{open:!1,msg:""}},mounted:function(){},methods:{customStop:function(){var t=this.open;this.open=!t,t?s.stop():s.start.call(this)}}},c=p,r=(n("1fba"),n("2877")),l=Object(r["a"])(c,o,i,!1,null,null,null);e["default"]=l.exports}}]);