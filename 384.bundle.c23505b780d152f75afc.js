"use strict";(self.webpackChunktest_new=self.webpackChunktest_new||[]).push([[384],{285:(t,e,n)=>{n.d(e,{Z:()=>c}),n(294);var r=n(250),o=n(893);const c=function(t){var e=t.title,n=t.children,c=(0,r.s0)();return(0,o.jsxs)("div",{className:"page",children:[(0,o.jsxs)("div",{className:"head",children:[(0,o.jsx)("button",{onClick:function(){window.history.state&&window.history.state.idx>0?c(-1):c("/",{replace:!0})},children:"Go back"}),(0,o.jsx)("h2",{children:e})]}),(0,o.jsx)("div",{className:"content",children:n})]})}},384:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var r=n(250),o=n(294),c=n(746),a=n(56),i=n(285),l=n(893);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const u=function(t){var e,n,u=t.bundle,d=t.label,f=(0,r.UO)().id,h=(e=(0,o.useState)(),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c,a,i=[],l=!0,s=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=c.call(n)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=h[0],b=h[1];return(0,o.useEffect)((function(){(0,a.Nv)({url:"".concat(u,"/").concat(f),method:"GET"}).then((function(t){return b(t.data)})).catch((function(t){return console.error("Error fetching data: ",t)}))}),[]),y?(0,l.jsxs)(i.Z,{title:"".concat(d," (id: ").concat(f,", user id: ").concat(y.userId,")"),children:[(0,l.jsxs)("span",{children:["Title: ",y.title]}),(null==y?void 0:y.body)&&(0,l.jsxs)("p",{children:["Body: ",y.body]})]}):(0,l.jsx)(c.Z,{})}}}]);