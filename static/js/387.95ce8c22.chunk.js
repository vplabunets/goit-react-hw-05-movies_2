"use strict";(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[387],{2996:function(e,r,n){n.d(r,{M1:function(){return d},TP:function(){return h},tx:function(){return g},IR:function(){return f},Df:function(){return i}});var t=n(5861),a=n(7757),c=n.n(a),u=n(1044),o=n(7596),s="https://api.themoviedb.org/";function i(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"/3/trending/movie/day"),{params:{api_key:"74bfe718a55ac7916c6e6ad87b15f944"}});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"/3/search/movie"),{params:{query:r,api_key:"74bfe718a55ac7916c6e6ad87b15f944",language:"en-US",page:1,include_adult:!1}});case 3:return 0===(n=e.sent).data.results.length&&o.Am.error("Please input correct query"),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"/3/movie/").concat(r),{params:{api_key:"74bfe718a55ac7916c6e6ad87b15f944",language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"/3/movie/").concat(r,"/credits"),{params:{api_key:"74bfe718a55ac7916c6e6ad87b15f944",language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"/3/movie/").concat(r,"/reviews"),{params:{api_key:"74bfe718a55ac7916c6e6ad87b15f944",language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},4387:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var t,a,c=n(885),u=n(2791),o=n(7689),s=n(2996),i=n(2134),p=n(168),f=n(6444),l=n(6747),h=f.ZP.ul(t||(t=(0,p.Z)(["\n  color: ",";\n"])),l.Z.maintextc),v=f.ZP.p(a||(a=(0,p.Z)(["\n  margin-left: 20px;\n  color: ",";\n"])),l.Z.secondarytextc),d=n(184),m=function(){var e=(0,u.useState)([]),r=(0,c.Z)(e,2),n=r[0],t=r[1],a=(0,o.UO)();return(0,u.useEffect)((function(){(0,s.tx)(a.movieId).then((function(e){var r=e.data;return t(r.results)}))}),[a.movieId]),(0,d.jsx)(i.Z,{children:0===n.length?(0,d.jsx)(v,{children:"We don't have any reviews for this movie"}):(0,d.jsx)(h,{children:n.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsxs)("h4",{children:["Author: ",e.author]}),(0,d.jsx)(v,{children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=387.95ce8c22.chunk.js.map