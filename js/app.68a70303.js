(function(e){function t(t){for(var n,c,o=t[0],s=t[1],u=t[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://cdn.jsdelivr.net/gh/turkyden/vue-typical@gh-pages/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var p=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("14c6"),r("08c1"),r("4842"),r("d9fc");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-screen h-screen bg-gray-800 flex flex-col justify-center items-center",attrs:{id:"app"}},[r("div",{staticClass:"w-full"},[r("div",{staticClass:"relative container m-auto bg-gray-900 text-center text-white shadow-2xl h-64 flex flex-col justify-center rounded-lg text-3xl"},[r("div",{staticClass:"absolute top-0 right-0 px-4 py-2 text-sm text-gray-600"},[e._v("Preview")]),r("typical",{attrs:{steps:["Hello",1e3,"Hello world!",500],wrapper:"h2"}}),r("typical",{staticClass:"typicalWrapper",attrs:{steps:["Fucking",1e3,"Fucking Awesome!",500,"Fucking Awesome! Aha :-) 👋",1e3],loop:1/0,wrapper:"h3"}})],1),r("br"),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.codeVisibled,expression:"codeVisibled"}],staticClass:"relative container m-auto bg-gray-900 bg-opacity-25 text-gray-300 shadow-inner shadow-2xl flex rounded-lg text-lg px-8"},[r("a",{staticClass:"absolute top-0 right-0 px-4 py-2 text-sm text-gray-600 hover:bg-gray-800 hover:text-gray-500 cursor-pointer transition-all duration-150 ease-in",attrs:{href:"https://github.com/Turkyden/vue-typical",target:"_blank"}},[e._v("Resource")]),r("pre",[e._v("          "),r("typical",{staticClass:"html",attrs:{steps:e.code,wrapper:"code"}}),e._v("\n        ")],1)])]),r("transition",{attrs:{name:"fade"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:e.codeCoyright,expression:"codeCoyright"}],staticClass:"text-gray-500 text-center py-10"},[e._v(" MIT ❤️ Designed by\n        "),r("a",{staticClass:"text-green-500 hover:underline",attrs:{href:"https://github.com/Turkyden",target:"_blank"}},[e._v("@Turkyden")])])])],1)])},i=[],c=r("7618"),o=(r("6c7b"),r("c5f6"),r("75fc")),s=(r("20d6"),r("01c8")),u=(r("ac4d"),r("8a81"),r("ac6a"),r("96cf"),r("3b8d")),p=regeneratorRuntime.mark(w),l=regeneratorRuntime.mark(k),f=regeneratorRuntime.mark(j);function h(e){return d.apply(this,arguments)}function d(){return d=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i,o,s,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r=u.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=u[a];i=0,o=n;case 2:if(!(i<o.length)){e.next=21;break}s=o[i],e.t0=Object(c["a"])(s),e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,v(t,s);case 9:return e.abrupt("break",18);case 10:return e.next=12,y(s);case 12:return e.abrupt("break",18);case 13:return e.next=15,s.apply(void 0,[t].concat(n));case 15:return e.abrupt("break",18);case 16:return e.next=18,s;case 18:i++,e.next=2;break;case 21:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return g=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=O(t.textContent,r),e.next=3,x(t,[].concat(Object(o["a"])(j(t.textContent,n)),Object(o["a"])(k(r,n))));case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return b=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function x(e,t){return m.apply(this,arguments)}function m(){return m=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,c,o,s,u,p=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=p.length>2&&void 0!==p[2]?p[2]:60,a=!0,i=!1,c=void 0,e.prev=4,o=w(r)[Symbol.iterator]();case 6:if(a=(s=o.next()).done){e.next=14;break}return u=s.value,u(t),e.next=11,y(n+n*(Math.random()-.5));case 11:a=!0,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](4),i=!0,c=e.t0;case 20:e.prev=20,e.prev=21,a||null==o.return||o.return();case 23:if(e.prev=23,!i){e.next=26;break}throw c;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[4,16,20,28],[21,,23,27]])}))),m.apply(this,arguments)}function w(e){var t,r,n,a,i,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t=!0,r=!1,n=void 0,o.prev=3,a=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=c.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),i=e[Symbol.iterator]();case 6:if(t=(c=i.next()).done){o.next=11;break}return o.delegateYield(a(),"t0",8);case 8:t=!0,o.next=6;break;case 11:o.next=17;break;case 13:o.prev=13,o.t1=o["catch"](3),r=!0,n=o.t1;case 17:o.prev=17,o.prev=18,t||null==i.return||i.return();case 20:if(o.prev=20,!r){o.next=23;break}throw n;case 23:return o.finish(20);case 24:return o.finish(17);case 25:case"end":return o.stop()}}),p,null,[[3,13,17,25],[18,,20,24]])}function k(e){var t,r,n,a,i=arguments;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:t=Object(s["a"])(e),r=t.slice(0),n=i.length>1&&void 0!==i[1]?i[1]:0,a=i.length>2&&void 0!==i[2]?i[2]:r.length;case 3:if(!(n<a)){c.next=8;break}return c.next=6,r.slice(0,++n).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),l)}function j(e){var t,r,n,a,i=arguments;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:t=Object(s["a"])(e),r=t.slice(0),n=i.length>1&&void 0!==i[1]?i[1]:0,a=i.length>2&&void 0!==i[2]?i[2]:r.length;case 3:if(!(a>n)){c.next=8;break}return c.next=6,r.slice(0,--a).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),f)}function O(e,t){var r=Object(s["a"])(t),n=r.slice(0);return[].concat(Object(o["a"])(e),[NaN]).findIndex((function(e,t){return n[t]!==e}))}var C=h,R={name:"vue-typical",props:{steps:{type:Array,required:!0},wrapper:{type:String,default:"div"},loop:{type:Number,default:1}},render:function(e){return e(this.wrapper,{ref:"myRef"})},mounted:function(){var e=this.steps,t=this.loop;t===1/0?h.apply(void 0,[this.$refs.myRef].concat(Object(o["a"])(e),[C])):"number"===typeof t&&t>0?h.apply(void 0,[this.$refs.myRef].concat(Object(o["a"])(Array(t).fill(e).flat()))):h.apply(void 0,[this.$refs.myRef].concat(Object(o["a"])(e)))}},_=r("1487"),A=r.n(_),P=(r("dd07"),{name:"app",data:function(){return{codeVisibled:!1,codeCoyright:!1,code:[1e3,this.showCode,"\n<typical\n  :steps=\"['Hello', 1000, 'Hello world!', 500]\"\n  :wrapper=\"'h2'\"\n></typical>\n<typical\n  class=\"typicalWrapper\"\n  :steps=\"['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]\"\n  :loop=\"Infinity\"\n  :wrapper=\"'h3'\"\n></typical>",A.a.highlightAll,500,this.showCoyright]}},methods:{showCode:function(){this.codeVisibled=!0},showCoyright:function(){this.codeCoyright=!0}},components:{typical:R}}),S=P,T=(r("034f"),r("2877")),F=Object(T["a"])(S,a,i,!1,null,null,null),M=F.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(M)}}).$mount("#app")},"64a9":function(e,t,r){},dd07:function(e,t,r){}});
//# sourceMappingURL=app.68a70303.js.map