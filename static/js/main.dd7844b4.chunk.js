(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{11:function(e,t,i){},13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),n=i(6),c=i.n(n),r=(i(11),i(2)),u=i(0);var o=function(e){var t=e.setAboutSelected,i=e.setContactSelected,a=e.setPortfolioSelected,s=e.setResumeSelected;return Object(u.jsxs)("header",{children:[Object(u.jsx)("h2",{children:Object(u.jsx)("a",{href:"/",children:"Brian Kaufman"})}),Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{classlist:"link",id:"about",onClick:function(){i(!1),s(!1),a(!1),t(!0)},children:"About Me"},"about"),Object(u.jsx)("div",{classlist:"link",id:"portfolio",onClick:function(){i(!1),s(!1),a(!0),t(!1)},children:"My Portfolio"},"portfolio"),Object(u.jsx)("div",{classlist:"link",id:"resume",onClick:function(){i(!1),s(!0),a(!1),t(!1)},children:"My Resume"},"resume"),Object(u.jsx)("div",{classlist:"link",id:"contact",onClick:function(){i(!0),s(!1),a(!1),t(!1)},children:"Contact Me"},"contact")]})]})};i(13);var l=function(){return Object(u.jsxs)("section",{className:"my-5",children:[Object(u.jsx)("h1",{children:"About me"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis imperdiet. Lacinia at quis risus sed vulputate odio ut enim. Mattis nunc sed blandit libero volutpat sed cras. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Integer eget aliquet nibh praesent tristique magna sit amet purus. Elit at imperdiet dui accumsan sit amet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Rhoncus urna neque viverra justo nec. Accumsan lacus vel facilisis volutpat est velit egestas dui. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Arcu cursus euismod quis viverra nibh cras pulvinar."})]})};var d=function(){return Object(u.jsx)("section",{className:"my-5",children:[{name:"Coding Quiz",url:"https://bpkaufman4.github.io/coding-quiz/",image:"coding-quiz.png",key:1},{name:"Weather Dashboard",url:"https://bpkaufman4.github.io/weather-dashboard/",image:"weather-dashboard.png",key:2},{name:"Password Generator",url:"https://bpkaufman4.github.io/password-generator/",image:"password-generator.png",key:3},{name:"Old Profile",url:"https://bpkaufman4.github.io/challenge-2/",image:"old-profile.png",key:4},{name:"Pok\xe9mon Trading Post",url:"https://pokemon-trading-post.herokuapp.com/",image:"pokemon-trading-post.png",key:5},{name:"Covid Risk Tracker",url:"https://bpkaufman4.github.io/Group-2-project-1/",image:"covid-risk-tracker.png",key:6}].map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"project",children:[Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:e.url,children:e.name})}),Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("img",{alt:"screenshot of the ".concat(e.name," homepage"),src:e.image})})]})})}))})},m=i(3),j=i(5);var b=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),i=t[0],s=t[1],n=i.name,c=i.email,o=i.message,l=function(e){s(Object(j.a)(Object(j.a)({},i),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("section",{id:"contact-form",children:[Object(u.jsx)("h2",{id:"reach",children:"Reach out"}),Object(u.jsxs)("form",{id:"contact-form",children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{placeholder:"Name",type:"text",name:"name",defaultValue:n,onChange:l,required:!0})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{placeholder:"Email",type:"email",name:"email",defaultValue:c,onChange:l,required:!0})}),Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{placeholder:"Message",name:"message",rows:"5",defaultValue:o,onChange:l,required:!0})}),Object(u.jsx)("button",{type:"submit",onSubmit:function(e){e.preventDefault(),console.log(i)},children:"Submit"})]})]})};var p=function(){return Object(u.jsxs)("section",{className:"my-5",children:[Object(u.jsx)("h1",{children:"My Resume"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis imperdiet. Lacinia at quis risus sed vulputate odio ut enim. Mattis nunc sed blandit libero volutpat sed cras. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Integer eget aliquet nibh praesent tristique magna sit amet purus. Elit at imperdiet dui accumsan sit amet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Rhoncus urna neque viverra justo nec. Accumsan lacus vel facilisis volutpat est velit egestas dui. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Arcu cursus euismod quis viverra nibh cras pulvinar."})]})};var h=function(){return Object(u.jsx)("footer",{children:Object(u.jsx)("p",{children:"Made with love by Brian Kaufman"})})};var g=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1],n=Object(a.useState)(!1),c=Object(r.a)(n,2),m=c[0],j=c[1],g=Object(a.useState)(!1),O=Object(r.a)(g,2),f=O[0],v=O[1],x=Object(a.useState)(!1),k=Object(r.a)(x,2),q=(k[0],k[1]);return Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{setAboutSelected:q,setContactSelected:s,setPortfolioSelected:v,setResumeSelected:j}),Object(u.jsx)("main",{children:i?Object(u.jsx)(b,{}):m?Object(u.jsx)(p,{}):f?Object(u.jsx)(d,{}):Object(u.jsx)(l,{})}),Object(u.jsx)(h,{})]})},O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,15)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),a(e),s(e),n(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),O()}},[[14,1,2]]]);
//# sourceMappingURL=main.dd7844b4.chunk.js.map