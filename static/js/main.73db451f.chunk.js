(this.webpackJsonpapi_walter=this.webpackJsonpapi_walter||[]).push([[0],{21:function(e,t,n){},48:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),s=n.n(r),i=(n(48),n(21),n(25)),o=n(26),j=n(30),u=n(28),d=n(1),h=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("h1",{children:" Primer Componente "})}}]),n}(c.a.Component),l=n(63);var p=function(){var e=function(e){window.location="/".concat(e)};return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"nav_links",children:[Object(d.jsx)(l.a,{onClick:function(){return e("saul")},children:"Better Call Saul"}),Object(d.jsx)(l.a,{onClick:function(){return e("breaking")},children:"Breaking Bad"})]})})},b=n(10),O=n.n(b),x=n(14),f=n(16),v=n(18);var m=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(d.jsx)("div",{className:"Temporadas_Saul",children:Object(d.jsxs)("header",{className:"Temporadas_Saul-header",children:[Object(d.jsx)("h1",{children:"Episodios Better Call Saul"}),Object(d.jsx)("p",{}),Object(d.jsx)("ol",{children:n?n.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:Object(d.jsxs)(v.b,{to:"/episode/".concat(e.episode_id),children:[e.title," ",e.season," ",e.episode]})},t)})})):"\n Cargando..."})]})})};var k=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Breaking+Bad");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(d.jsx)("div",{className:"Temporadas_Breaking",children:Object(d.jsxs)("header",{className:"Temporadas_Breaking-header",children:[Object(d.jsx)("h1",{children:"Episodios Breaking Bad"}),Object(d.jsx)("p",{}),Object(d.jsx)("ol",{children:n?n.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:Object(d.jsxs)("button",{onClick:function(){return t=e.episode_id,void(window.location="/episode/".concat(t));var t},children:[e.title," ",e.season," ",e.episode]})},t)})})):"\n Cargando..."})]})})};var g=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(f.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){i(),console.log(t)}),[]);var i=function(){var e=Object(x.a)(O.a.mark((function e(){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/episodes/".concat(t.params.episode_id));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,s(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[r&&r[0]&&Object(d.jsx)("h3",{children:r[0].episode_id}),r&&r[0]&&Object(d.jsx)("h3",{children:r[0].title}),Object(d.jsx)("h3",{children:r.title}),Object(d.jsx)("h3",{children:r.season}),Object(d.jsx)("h3",{children:r.episode}),Object(d.jsx)("h3",{children:r.air_date}),Object(d.jsx)("h3",{children:r.characters})]})};var _=function(e){var t=e.match;Object(a.useEffect)((function(){s(),console.log(t)}),[]);var n=Object(a.useState)(),c=Object(f.a)(n,2),r=(c[0],c[1]),s=function(){var e=Object(x.a)(O.a.mark((function e(){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tarea-1-breaking-bad.herokuapp.com/api/characters/".concat(t.params.char_id));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"Persona"})})};var w=n(7),B=n(64),C=n(66),S=n(65),y=n(43),N=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(B.a,{bg:"dark",variant:"dark",children:[Object(d.jsx)(B.a.Brand,{href:"home",children:"Primera tarea: Taller de Integraci\xf3n"}),Object(d.jsx)(C.a,{className:"mr-auto"}),Object(d.jsxs)(S.a,{inline:!0,children:[Object(d.jsx)(y.a,{type:"text",placeholder:"Buscar",className:"mr-sm-2"}),Object(d.jsx)(l.a,{variant:"outline-info",children:"Search"})]})]})})}}]),n}(c.a.Component);var E=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(N,{}),Object(d.jsx)(v.a,{basename:"/api_breaking",children:Object(d.jsxs)(w.c,{children:[Object(d.jsx)(w.a,{path:"/",exact:!0,component:h}),Object(d.jsx)(w.a,{path:"/breaking",exact:!0,component:k}),Object(d.jsx)(w.a,{path:"/saul",exact:!0,component:m}),Object(d.jsx)(w.a,{path:"/episode/:episode_id",exact:!0,component:g}),Object(d.jsx)(w.a,{path:"/episode/:episode_id",exact:!0,component:_}),Object(d.jsx)(w.a,{path:"/character/:char_id",exact:!0,component:_})]})}),Object(d.jsx)("div",{className:"nav",children:Object(d.jsx)(p,{})})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(60);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),T()}},[[61,1,2]]]);
//# sourceMappingURL=main.73db451f.chunk.js.map