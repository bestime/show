(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a036a49"],{"17e2":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("canvas",{ref:"wrapper",attrs:{width:"400",height:"400"}})},i=[],n=(o("6c7b"),{mounted:function(){var e=this;this.$nextTick(function(){e.initClock()})},methods:{initClock:function(){var e=this.$refs.wrapper.getContext("2d");(function t(){var o=new Date,a=o.getSeconds(),i=o.getMinutes(),n=o.getHours();n=n>12?n-12:n,e.save(),e.clearRect(0,0,400,400),e.translate(200,200),e.rotate(-Math.PI/2);var r=e.createLinearGradient(150,0,-150,0);r.addColorStop(0,"#242f37"),r.addColorStop(1,"#48585c"),e.fillStyle=r,e.beginPath(),e.arc(0,0,150,0,2*Math.PI,!0),e.fill(),e.save();for(var l=0;l<12;l++)e.beginPath(),e.strokeStyle="#fff",e.lineWidth=3,e.rotate(Math.PI/6),e.moveTo(140,0),e.lineTo(120,0),e.stroke();for(e.restore(),e.save(),e.beginPath(),l=0;l<60;l++)l%5!==0&&(e.beginPath(),e.strokeStyle="#536b7a",e.lineWidth=2,e.moveTo(140,0),e.lineTo(130,0),e.stroke()),e.rotate(Math.PI/30);e.restore(),e.save(),e.rotate(Math.PI/2),e.beginPath(),e.fillStyle="#58717e",e.font="32px Microsoft yahei",e.textAlign="center",e.textBaseline="middle",e.fillText("3",100,0),e.fillText("6",0,100),e.fillText("9",-100,0),e.fillText("12",0,-100),e.restore(),e.save(),e.rotate(n*(Math.PI/6)+i*(Math.PI/360)+a*(Math.PI/21600)),e.lineWidth=10,e.strokeStyle="#fff",e.beginPath(),e.moveTo(0,0),e.lineTo(110,0),e.stroke(),e.fillStyle="#34434c",e.arc(102,0,3,0,2*Math.PI,!0),e.fill(),e.restore(),e.save(),e.rotate(i*(Math.PI/30)+a*(Math.PI/1800)),e.lineWidth=6,e.strokeStyle="#fff",e.beginPath(),e.moveTo(0,0),e.lineTo(135,0),e.stroke(),e.lineWidth=3,e.strokeStyle="#34434c",e.beginPath(),e.moveTo(130,0),e.lineTo(115,0),e.stroke(),e.restore(),e.save(),e.rotate(a*(Math.PI/30)),e.beginPath(),e.lineWidth=4,e.strokeStyle="#fff",e.moveTo(0,0),e.lineTo(141,0),e.stroke(),e.beginPath(),e.lineWidth=12,e.strokeStyle="#fff",e.moveTo(0,0),e.lineTo(-38,0),e.stroke(),e.beginPath(),e.fillStyle="#fff",e.arc(0,0,15,0,2*Math.PI,!0),e.fill(),e.beginPath(),e.strokeStyle="#cdd2d5",e.lineWidth=1,e.arc(0,0,8,0,2*Math.PI,!0),e.stroke(),e.restore(),e.beginPath(),e.lineWidth=7;var s=e.createLinearGradient(150,0,-150,0);s.addColorStop(0,"#adb9c5"),s.addColorStop(1,"#e9eced"),e.strokeStyle=s,e.arc(0,0,152,0,2*Math.PI,!0),e.stroke(),e.restore(),window.requestAnimationFrame(t)})()}}}),r=n,l=o("2877"),s=Object(l["a"])(r,a,i,!1,null,null,null);t["a"]=s.exports},"694c":function(e,t,o){},"8ec6":function(e,t,o){"use strict";var a=o("694c"),i=o.n(a);i.a},d613:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-404"},[o("Clock"),o("div",[e._v("404 Not Found")])],1)},i=[],n=o("17e2"),r={components:{Clock:n["a"]},mounted:function(){this.$nextTick(function(){})},methods:{}},l=r,s=(o("8ec6"),o("2877")),c=Object(s["a"])(l,a,i,!1,null,null,null);t["default"]=c.exports}}]);