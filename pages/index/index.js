(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"325a":function(t,n,e){},6580:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.menuList,(function(n,e){var i=t.__get_orig(n),r=t.__map(n.frontMenu,(function(n,i){var r=t.__get_orig(n),o=0==e?t.__map(n.child,(function(n,e){var i=t.__get_orig(n),r=t.__map(n.buttons,(function(e,i){var r=t.__get_orig(e),o="查看"==e&&"yifahuodingdan"!=n.tableName&&"yituikuandingdan"!=n.tableName&&"yiquxiaodingdan"!=n.tableName&&"weizhifudingdan"!=n.tableName&&"yizhifudingdan"!=n.tableName&&"yiwanchengdingdan"!=n.tableName?n.menu.split("列表"):null;return{$orig:r,g0:o}}));return{$orig:i,l0:r}})):null;return{$orig:r,l1:o}}));return{$orig:i,l2:r}}))),i=t.__map(t.leftListList10gonggaoxinxi,(function(n,e){var i=t.__get_orig(n),r=n.tupian.substring(0,4),o="http"!=r&&n.tupian?n.tupian.split(","):null;return{$orig:i,g1:r,g2:o}})),r=t.__map(t.rightListList10gonggaoxinxi,(function(n,e){var i=t.__get_orig(n),r=n.tupian.substring(0,4),o="http"!=r&&n.tupian?n.tupian.split(","):null;return{$orig:i,g3:r,g4:o}}));t.$mp.data=Object.assign({},{$root:{l3:e,l4:i,l5:r}})},o=[]},"7b07":function(t,n,e){"use strict";var i=e("325a"),r=e.n(i);r.a},8069:function(t,n,e){"use strict";e.r(n);var i=e("ac6d"),r=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a},ac6d:function(t,n,e){"use strict";(function(t){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(e("2971"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=s(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw o}}}}function s(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,i){var r=n&&n.prototype instanceof L?n:L,a=Object.create(r.prototype),s=new P(i||[]);return o(a,"_invoke",{value:O(t,e,s)}),a}function g(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",d="suspendedYield",m="executing",v="completed",y={};function L(){}function x(){}function w(){}var b={};h(b,s,(function(){return this}));var _=Object.getPrototypeOf,I=_&&_(_($([])));I&&I!==e&&r.call(I,s)&&(b=I);var k=w.prototype=L.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function e(o,a,s,u){var c=g(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==i(h)&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,s,u)}),(function(t){e("throw",t,s,u)})):n.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return e("throw",t,s,u)}))}u(c.arg)}var a;o(this,"_invoke",{value:function(t,i){function r(){return new n((function(n,r){e(t,i,n,r)}))}return a=a?a.then(r,r):r()}})}function O(n,e,i){var r=p;return function(o,a){if(r===m)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return{value:t,done:!0}}for(i.method=o,i.arg=a;;){var s=i.delegate;if(s){var u=N(s,i);if(u){if(u===y)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===p)throw r=v,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=m;var c=g(n,e,i);if("normal"===c.type){if(r=i.done?v:d,c.arg===y)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=v,i.method="throw",i.arg=c.arg)}}}function N(n,e){var i=e.method,r=n.iterator[i];if(r===t)return e.delegate=null,"throw"===i&&n.iterator.return&&(e.method="return",e.arg=t,N(n,e),"throw"===e.method)||"return"!==i&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+i+"' method")),y;var o=g(r,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function T(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function $(n){if(n||""===n){var e=n[s];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(i(n)+" is not iterable")}return x.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=h(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},S(E.prototype),h(E.prototype,u,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,i,r,o){void 0===o&&(o=Promise);var a=new E(f(t,e,i,r),o);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(k),h(k,l,"Generator"),h(k,s,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var i in n)e.push(i);return e.reverse(),function t(){for(;e.length;){var i=e.pop();if(i in n)return t.value=i,t.done=!1,t}return t.done=!0,t}},n.values=$,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function i(i,r){return s.type="throw",s.arg=n,e.next=i,r&&(e.method="next",e.arg=t),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var r=i.arg;j(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,i){return this.delegate={iterator:$(n),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=t),y}},n}function l(t,n,e,i,r,o,a){try{var s=t[o](a),u=s.value}catch(c){return void e(c)}s.done?n(u):Promise.resolve(u).then(i,r)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var o=t.apply(n,e);function a(t){l(o,i,r,a,s,"next",t)}function s(t){l(o,i,r,a,s,"throw",t)}a(void 0)}))}}e("651d");var f=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("b704"))}.bind(null,e)).catch(e.oe)};n.default={components:{uniIcons:f},data:function(){return{startX:0,prevNumList4:"",numList4:0,timerList4:null,flagList4:!1,navigationActive:{width:"16rpx",margin:"0 4rpx",borderRadius:"100%",background:"#b7dcfe",height:"16rpx"},navigationDefault:{width:"16rpx",margin:"0 4rpx",borderRadius:"100%",background:"#fff",height:"16rpx"},options2:{effect:"flip",loop:!0},options3:{effect:"cube",loop:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",swiperList:[],homegonggaoxinxilist:[],news:[],leftListList10gonggaoxinxi:[],rightListList10gonggaoxinxi:[],tempListList10gonggaoxinxi:[]}},watch:{copyFlowListList10gonggaoxinxi:function(t,n){this.tempListList10gonggaoxinxi=this.cloneData(this.copyFlowListList10gonggaoxinxi),this.splitDataList10gonggaoxinxi()}},mounted:function(){this.tempListList10gonggaoxinxi=this.cloneData(this.copyFlowListList10gonggaoxinxi),this.splitDataList10gonggaoxinxi()},computed:{baseUrl:function(){return this.$base.url},copyFlowListList10gonggaoxinxi:function(){return this.cloneData(this.homegonggaoxinxilist)}},onLoad:function(){var t=h(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),onShow:function(){var n=h(c().mark((function n(){var e,i,o,s,u,l,h,f=this;return c().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.swiperMenuList=[],this.role=t.getStorageSync("appRole"),e=t.getStorageSync("nowTable"),n.next=5,this.$api.session(e);case 5:return i=n.sent,this.user=i.data,this.tableName=e,o=r.default.list(),this.menuList=o,this.menuList.forEach((function(t,n){0==n&&t.frontMenu.forEach((function(t,n){t.child[0].buttons.indexOf("查看")>-1&&f.swiperMenuList.push(t)}))})),s=[],n.next=14,this.$api.list("config",{page:1,limit:5});case 14:i=n.sent,u=a(i.data.list);try{for(u.s();!(l=u.n()).done;)h=l.value,h.name.indexOf("picture")>=0&&h.value&&""!=h.value&&null!=h.value&&s.push({img:h.value,title:h.name,url:h.url})}catch(c){u.e(c)}finally{u.f()}s&&(this.swiperList=s),this.prevNumList4=this.swiperList.length-1,this.timerList4=setInterval(this.autoPlayList4,12e3),this.leftListList10gonggaoxinxi=[],this.rightListList10gonggaoxinxi=[],this.tempListList10gonggaoxinxi=[],this.getRecommendList(),this.getHomeList(),this.getNewsList();case 26:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),methods:{splitDataList10gonggaoxinxi:function(){var t=h(c().mark((function t(){var n,e,i,r=this;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.tempListList10gonggaoxinxi.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.uGetRect("#waterfall-left-column-list-10gonggaoxinxi");case 4:return n=t.sent,t.next=7,this.uGetRect("#waterfall-right-column-list-10gonggaoxinxi");case 7:if(e=t.sent,i=this.tempListList10gonggaoxinxi[0],i){t.next=11;break}return t.abrupt("return");case 11:if(n.height<e.height?this.leftListList10gonggaoxinxi.push(i):n.height>e.height?this.rightListList10gonggaoxinxi.push(i):this.leftListList10gonggaoxinxi.length<=this.rightListList10gonggaoxinxi.length?this.leftListList10gonggaoxinxi.push(i):this.rightListList10gonggaoxinxi.push(i),this.tempListList10gonggaoxinxi.splice(0,1),!this.tempListList10gonggaoxinxi.length){t.next=16;break}return setTimeout((function(){r.splitDataList10gonggaoxinxi()}),150),t.abrupt("return");case 16:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),uGetRect:function(n,e){var i=this;return new Promise((function(r){t.createSelectorQuery().in(i)[e?"selectAll":"select"](n).boundingClientRect((function(t){e&&Array.isArray(t)&&t.length&&r(t),!e&&t&&r(t)})).exec()}))},cloneData:function(t){return JSON.parse(JSON.stringify(t))},newsTabClick2:function(t){this.newsIndex2=t,this.getNewsList()},getNewsList:function(){var t=h(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:({page:1,limit:6,sort:"id",order:"desc"});case 1:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),homeTabClick2:function(t,n){this["home"+n+"Index2"]=t,this.getHomeList()},getHomeList:function(){var t=h(c().mark((function t(){var n,e;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:10},t.next=3,this.$api.list("gonggaoxinxi",e);case 3:n=t.sent,this.homegonggaoxinxilist=n.data.list,this.tempListList10gonggaoxinxi=this.copyFlowListList10gonggaoxinxi,this.splitDataList10gonggaoxinxi();case 7:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),recommendTabClick2:function(t,n){this[n+"Index2"]=t,this.getRecommendList()},getRecommendList:function(){var t=h(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),autoPlayList4:function(){this.prevNumList4=this.numList4,this.numList4++,this.numList4==this.swiperList.length&&(this.numList4=0)},touchStart:function(t){this.startX=t.touches[0].clientX,clearInterval(this.timerList4),this.flagList4=!0},touchMove:function(t){var n=t.touches[0].clientX,e=n-this.startX;e>50?this.flagList4&&(this.flagList4=!1,this.prevNumList4=this.numList4,this.numList4++,this.numList4==this.swiperList.length&&(this.numList4=0)):e<-50&&this.flagList4&&(this.flagList4=!1,this.prevNumList4=this.numList4,this.numList4--,this.numList4<0&&(this.numList4=this.swiperList.length-1))},touchEnd:function(){this.startX=0,this.timerList4=setInterval(this.autoPlayList4,12e3),this.flagList4=!1},onSwiperTap:function(n){if(n.url){if(-1!=n.url.indexOf("https"))return t.navigateTo({url:"../../common/linkOthers/linkOthers?url="+encodeURIComponent(n.url)}),!1;this.$utils.jump(n.url)}},onNewsDetailTap:function(t){this.$utils.jump("../news-detail/news-detail?id=".concat(t))},onDetailTap:function(t,n){this.$utils.jump("../".concat(t,"/detail?id=").concat(n))},onPageTap:function(n){t.navigateTo({url:"../".concat(n,"/list"),fail:function(){t.switchTab({url:"../".concat(n,"/list")})}})},onPageTap2:function(n){var e="../"+n+"/list";"forum"==n&&(e="../forum-index/forum-index"),t.setStorageSync("useridTag",0),t.navigateTo({url:e,fail:function(){t.switchTab({url:e})}})}}}}).call(this,e("255a")["default"])},d537:function(t,n,e){"use strict";(function(t){e("6cdc");i(e("dda7"));var n=i(e("f75a"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("255a")["createPage"])},f75a:function(t,n,e){"use strict";e.r(n);var i=e("6580"),r=e("8069");for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e("7b07");var a,s=e("7702"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"3ff94fe4",null,!1,i["a"],a);n["default"]=u.exports}},[["d537","common/runtime","common/vendor"]]]);