(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),r=(n(12),n(13),n(7)),d=n(4),l=(n(14),n(15),n(0));var o=function(e){var t=e.title,n=e.body,c=e.deleteHandler,a=e.id;return console.log(n),Object(l.jsx)("div",{className:"card-container ",children:Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("div",{className:"card-title",children:Object(l.jsx)("h3",{children:t})}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("p",{children:n})}),Object(l.jsx)("button",{className:"btn btn-warning",onClick:function(e){return c(e,a)},children:"Delete"})]})})};var b=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),b=s[0],j=s[1],u=Object(c.useState)([]),p=Object(d.a)(u,2),O=p[0],x=p[1],h=function(e,t){e.preventDefault(),x(O.filter((function(e){return e.id!==t})))},f=function(e){e.target.value=""};return Object(l.jsxs)("div",{className:"container c ",children:[Object(l.jsx)("div",{className:"h",children:"Note Taking Application"}),Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Add Title"}),Object(l.jsx)("input",{type:"text",className:"form-control","aria-label":"Add Task",onChange:function(e){e.preventDefault(),a(e.target.value)},onFocus:f,"aria-describedby":"basic-addon1"})]}),Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Add Details"}),Object(l.jsx)("textarea",{type:"text",className:"form-control","aria-label":"Add Task",onChange:function(e){e.preventDefault(),j(e.target.value)},onFocus:f,"aria-describedby":"basic-addon1"})]}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(e){if(e.preventDefault(),""!==n&&""!==b){var t={id:Math.floor(1e4*Math.random()),value:n,notes:b};x([].concat(Object(r.a)(O),[t]))}},children:"Add a Task"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),O!==[]?Object(l.jsx)("div",{className:"container",style:{padding:"0px"},children:O.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o,{title:e.value,body:e.notes,deleteHandler:h,id:e.id},e.id)})}))}):null]})};var j=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),u()}],[[17,1,2]]]);
//# sourceMappingURL=main.135b69ea.chunk.js.map