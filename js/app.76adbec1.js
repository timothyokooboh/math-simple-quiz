(function(t){function e(e){for(var r,o,c=e[0],i=e[1],u=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/math-simple-quiz/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2d48":function(t,e,n){},3034:function(t,e,n){"use strict";var r=n("2d48"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("hr"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[n("transition",{attrs:{name:"flip",mode:"out-in"}},[n(t.mode,{tag:"component",on:{answered:function(e){return t.answered(e)},confirmed:function(e){t.mode="app-question"}}})],1)],1)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[n("h1",{staticClass:"text-center"},[t._v("The Super Quiz")])])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title text-center"},[t._v(t._s(t.question))])]),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"col-xs-12 col-sm-6 text-center"},[n("button",{staticClass:"btn btn-primary btn-lg",staticStyle:{margin:"10px"},on:{click:function(e){return t.onAnswer(t.btnData[0].correct)}}},[t._v(t._s(t.btnData[0].answer))])]),n("div",{staticClass:"col-xs-12 col-sm-6 text-center"},[n("button",{staticClass:"btn btn-primary btn-lg",staticStyle:{margin:"10px"},on:{click:function(e){return t.onAnswer(t.btnData[1].correct)}}},[t._v(t._s(t.btnData[1].answer))])]),n("div",{staticClass:"col-xs-12 col-sm-6 text-center"},[n("button",{staticClass:"btn btn-primary btn-lg",staticStyle:{margin:"10px"},on:{click:function(e){return t.onAnswer(t.btnData[2].correct)}}},[t._v(t._s(t.btnData[2].answer))])]),n("div",{staticClass:"col-xs-12 col-sm-6 text-center"},[n("button",{staticClass:"btn btn-primary btn-lg",staticStyle:{margin:"10px"},on:{click:function(e){return t.onAnswer(t.btnData[3].correct)}}},[t._v(t._s(t.btnData[3].answer))])])])])},c=[],i=(n("99af"),1),u=2,l={data:function(){return{question:"Oops, an error ocurred :/",btnData:[{correct:!0,answer:0},{correct:!1,answer:0},{correct:!1,answer:0},{correct:!1,answer:0}]}},methods:{generateQuestion:function(){var t=this.generateRandomNumber(1,100),e=this.generateRandomNumber(1,100),n=this.generateRandomNumber(1,2),r=0;switch(n){case i:r=t+e,this.question="What's ".concat(t," + ").concat(e,"?");break;case u:r=t-e,this.question="What's ".concat(t," - ").concat(e,"?");break;default:r=0,this.question="Oops, an Error occurred :/"}this.btnData[0].answer=this.generateRandomNumber(r-10,r+10,r),this.btnData[0].correct=!1,this.btnData[1].answer=this.generateRandomNumber(r-10,r+10,r),this.btnData[1].correct=!1,this.btnData[2].answer=this.generateRandomNumber(r-10,r+10,r),this.btnData[2].correct=!1,this.btnData[3].answer=this.generateRandomNumber(r-10,r+10,r),this.btnData[3].correct=!1;var a=this.generateRandomNumber(0,3);this.btnData[a].correct=!0,this.btnData[a].answer=r},generateRandomNumber:function(t,e,n){var r=Math.round(Math.random()*(e-t))+t;return console.log(t,e,r),r==n?this.generateRandomNumber(t,e,n):r},onAnswer:function(t){this.$emit("answered",t)}},created:function(){this.generateQuestion()}},d=l,f=n("2877"),p=Object(f["a"])(d,o,c,!1,null,null,null),b=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-success text-center"},[n("h1",[t._v("That's Correct!")]),n("hr"),n("button",{staticClass:"btn btn-primary",on:{click:t.onNextQuestion}},[t._v("Next Question")])])},h=[],v={methods:{onNextQuestion:function(){this.$emit("confirmed")}}},g=v,w=Object(f["a"])(g,m,h,!1,null,null,null),y=w.exports,x={data:function(){return{mode:"app-question"}},methods:{answered:function(t){t?this.mode="app-answer":(this.mode="app-question",alert("Wrong, try again!"))}},components:{appQuestion:b,appAnswer:y}},_=x,C=(n("3034"),Object(f["a"])(_,a,s,!1,null,"38bffc50",null)),D=C.exports;r["a"].config.productionTip=!1,r["a"].directive("size",{bind:function(t,e){"margin"===e.arg?t.style.margin=e.value:"padding"===e.arg?t.style.padding=e.value:t.style.fontSize=e.value}}),new r["a"]({render:function(t){return t(D)}}).$mount("#app")}});
//# sourceMappingURL=app.76adbec1.js.map