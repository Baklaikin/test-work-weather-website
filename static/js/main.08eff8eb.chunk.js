(this["webpackJsonptest-work-weather-website"]=this["webpackJsonptest-work-weather-website"]||[]).push([[0],{27:function(t,n,e){},28:function(t,n,e){},53:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(20),c=e.n(o),i=(e(27),e(4)),u=e(3),s=(e(28),e(6)),d=e.n(s),l=e(10),f=e(11),p=e.n(f),b="https://api.openweathermap.org/data/2.5/weather",h="99865ebe8f851231124cb09f7d46c675";function j(){return(j=Object(l.a)(d.a.mark((function t(n){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat(b,"?q=").concat(n,"&units=metric&appid=").concat(h)).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=Object(l.a)(d.a.mark((function t(n){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat(b,"?lat=").concat(n.lat,"&lon=").concat(n.lon,"&units=metric&appid=").concat(h)).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O,x,g,y,w,v,k,S=e(5),N=S.a.div(O||(O=Object(i.a)(["\n  width: 100%;\n  padding: 8px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  background-color: transparent;\n"]))),C=S.a.div(x||(x=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),E=S.a.div(g||(g=Object(i.a)(["\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 35%;\n  background-image: ",";\n"])),(function(t){return"url( http://openweathermap.org/img/wn/".concat(t.picture,"@2x.png)")})),M=S.a.span(y||(y=Object(i.a)(["\n  font-size: 20px;\n  font-weight: 700;\n"]))),I=e(1);function J(t){var n=t.data,e=t.location,a=Object(r.useState)(""),o=Object(u.a)(a,2),c=o[0],i=o[1],s=Object(r.useState)({}),d=Object(u.a)(s,2),l=d[0],f=d[1];Object(r.useEffect)((function(){""!==n&&function(t){return j.apply(this,arguments)}(n).then((function(t){f(t),i(Math.floor(t.main.temp))}))}),[n]),Object(r.useEffect)((function(){isNaN(e.lat)||isNaN(e.lon)||function(t){return m.apply(this,arguments)}(e).then((function(t){f(t),i(Math.floor(t.main.temp))}))}),[e]);return"undefined"!==typeof l.main?Object(I.jsxs)(N,{children:[Object(I.jsx)(E,{picture:l.weather[0].icon}),Object(I.jsxs)(C,{children:[Object(I.jsxs)("h3",{children:[l.name,",",l.sys.country]}),Object(I.jsxs)("p",{children:["Its ",Object(I.jsx)(M,{children:c})," degrees and ",function(t){return t<10?(document.body.style.backgroundColor="#00ffff","cold"):t>10&&t<30?(document.body.style.backgroundColor="#fff700","warm"):t>30?(document.body.style.backgroundColor="#ff8c00","hot"):void 0}(c),", humidity is"," ",l.main.humidity,"% and it feels like"," ",Math.floor(l.main.feels_like)," degrees"]}),Object(I.jsxs)("p",{children:["Wind is ",Math.floor(l.wind.speed)," m/s"]})]})]}):Object(I.jsx)("p",{children:"No data yet"})}var q=S.a.form(w||(w=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 8px;\n  margin: 0 auto;\n"]))),z=S.a.input(v||(v=Object(i.a)(["\n  min-width: 220px;\n  max-width: 450px;\n  margin-right: 10px;\n  border-radius: 4px;\n  border: 1px solid #fd7e14;\n"]))),B=S.a.button(k||(k=Object(i.a)(["\n  border-radius: 4px;\n  background-color: #fd7e14;\n  border: none;\n  color: #fff;\n"])));function D(t){var n=t.onCitySearch,e=t.onCoordSearch,a=Object(r.useState)(""),o=Object(u.a)(a,2),c=o[0],i=o[1],s=Object(r.useState)({lat:"",lon:""}),d=Object(u.a)(s,2),l=d[0],f=d[1];return Object(I.jsxs)(q,{onSubmit:function(t){t.preventDefault(),""!==c||""!==l.lat||""!==l.lon?(n(c),e(l),t.target.reset()):alert("Enter the city or coordinates")},children:[Object(I.jsx)(z,{type:"text",name:"citySearch",placeholder:"Enter the city or coordinates",onInput:function(t){var n=t.target.value;Number(n)||i(n);var e=n.split(" ");f({lat:Math.round(e[0]),lon:Math.round(e[1])})}}),Object(I.jsx)(B,{type:"submit",children:"Search"})]})}var P;var W=function(){var t=Object(r.useState)(""),n=Object(u.a)(t,2),e=n[0],a=n[1],o=Object(r.useState)({}),c=Object(u.a)(o,2),i=c[0],s=c[1],d=function(){var t=Object(r.useState)({loaded:!1,coord:{lat:"",lon:""},error:""}),n=Object(u.a)(t,2),e=n[0],a=n[1];function o(t){a({loaded:!0,coord:{lat:t.coords.latitude,lon:t.coords.longitude},error:""})}function c(t){a({loaded:!0,error:t}),console.log(t.message)}return Object(r.useEffect)((function(){"geolocation"in navigator||a({loaded:!0,err:"Not supported"}),navigator.geolocation.getCurrentPosition(o,c)}),[]),e.coord}();return Object(r.useEffect)((function(){s({lat:Number(d.lat),lon:Number(d.lon)})}),[d.lat,d.lon]),Object(I.jsxs)(_,{children:[Object(I.jsx)(D,{onCitySearch:function(t){return a(t)},onCoordSearch:function(t){return s(t)}}),Object(I.jsx)(J,{data:e,location:i})]})},_=S.a.div(P||(P=Object(i.a)(["\n  min-width: 320px;\n  max-width: 1280px;\n  padding: 8px;\n  margin: 0 auto;\n  background-color: transparent;\n"])));e(52);c.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(W,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.08eff8eb.chunk.js.map