!function(e){function t(t){for(var r,c,u=t[0],a=t[1],s=t[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;i.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(308)},308:function(e,t,n){"use strict";n.r(t);n(309),n(312),n(313)},309:function(e,t,n){var r=n(310),o=r.signUp,i=r.signIn,c=document.getElementById("auth"),u=c.querySelector("#email"),a=c.querySelector("#password"),s=c.querySelector("#sign_up"),l=c.querySelector("#sign_in");function f(){return!(a.checkValidity()&&u.checkValidity())}c.addEventListener("click",(function(e){var t={email:u.value,password:a.value};e.preventDefault(),e.target===s&&o(t),e.target===l&&i(t)})),u.addEventListener("input",(function(e){u.style.borderColor=u.checkValidity()?"#060":"red",l.disabled=f(),s.disabled=f()})),a.addEventListener("input",(function(e){a.style.borderColor=a.checkValidity()?"#060":"red",l.disabled=f(),s.disabled=f()}))},310:function(e,t,n){var r=n(311),o=r.req,i=r.messHandl,c="http://142.93.134.108:1111";e.exports={signUp:function(e){o.post(c+"/sign_up",e).then((function(e){i(e)}))},signIn:function(e){var t=new URL(c+"/login");for(var n in e)t.searchParams.set(n,e[n]);o.post(t).then((function(e){if(e.hasOwnProperty("body"))if(e.body.hasOwnProperty("access_token")){var t=e.body.access_token,n=e.body.refresh_token;o.get(c+"/me",{Authorization:"Bearer ".concat(t)}).then((function(e){document.getElementById("auth").innerHTML='\n          <h2 class="authorization__title"></h2>',i(e)||function(e){o.post(c+"/refresh",null,{Authorization:"Bearer ".concat(e)}).then((function(e){var t=e.body.access_token;o.get(c+"/me",{Authorization:"Bearer ".concat(t)}).then((function(e){i(e)}))}))}(n)}))}else i(e);else i(e)}))}}},311:function(e,t){function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,{headers:r({},t)}).then((function(e){return e.json()}))},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch(e,{method:"POST",body:JSON.stringify(t),headers:r({"Content-Type":"application/json"},n)}).then((function(e){return e.json()}))}};function c(e,t){var n=document.querySelector(".authorization__title");n.innerText=e,n.style.color=t,setTimeout((function(){n.innerText="Authorization",n.style.color="#060"}),5e3)}e.exports={req:i,messHandl:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.hasOwnProperty("body")?(e=n.body.status.toLowerCase(),t=n.body.message):(e=n.status.toLowerCase(),t=n.message),c(t,(e="ok"===e)?"green":"red"),e}}},312:function(e,t,n){},313:function(e,t,n){}});