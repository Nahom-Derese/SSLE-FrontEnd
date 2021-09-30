(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,A){},102:function(e,t,A){},116:function(e,t,A){"use strict";A.r(t);var n,c,s,a=A(3),i=A.n(a),l=A(46),r=A.n(l),j=(A(101),A(6)),o=(A(102),A.p+"static/media/books-stack-of-three.06e02f99.svg"),g=A(5),d=A(128),b=A(52),h=A(30),O=Object(h.a)(n||(n=Object(b.a)(["\n  query getResultByReg_no($Reg_no: Int) {\n    getResultByReg_no(Reg_no: $Reg_no) {\n      Reg_no\n      Name\n      Eligibility\n      Stream\n      School\n      Sex\n      Result {\n        Biology\n        Chemistry\n        Civics\n        English\n        Maths\n        Physics\n        SAT\n        Total\n      }\n    }\n  }\n"]))),u=Object(h.a)(c||(c=Object(b.a)(["\n  query getResultByName($Name: String!) {\n    getResultByName(Name: $Name) {\n      Reg_no\n      Name\n      Eligibility\n      Stream\n      School\n      Sex\n      Result {\n        Biology\n        Chemistry\n        Civics\n        English\n        Maths\n        Physics\n        SAT\n        Total\n      }\n    }\n  }\n"]))),m=Object(h.a)(s||(s=Object(b.a)(["\n  query getTopResult($TOP: Int) {\n    getTopResult(TOP: $TOP) {\n      Name\n      Sex\n      Stream\n      Result {\n        Total\n      }\n    }\n  }\n"]))),v=A(1),x=Object(a.createContext)();function f(e){var t=Object(a.useState)([]),A=Object(j.a)(t,2),n=A[0],c=A[1];return Object(v.jsx)(x.Provider,{value:[n,c],children:e.children})}var p=function(e){var t=e.setToggle_2,A=e.Toggle_2,n=e.Toggle_3,c=e.setToggle_3,s=Object(a.useState)(!1),i=Object(j.a)(s,2),l=i[0],r=i[1],o=Object(a.useContext)(x),b=Object(j.a)(o,2),h=(b[0],b[1]),m=Object(g.useSpring)({background:l?"rgba(70, 159, 175, 0.795)":"rgba(70, 159, 175, 0.395)"}),f=Object(a.useState)(0),p=Object(j.a)(f,2),C=p[0],N=p[1],B=Object(a.useState)(""),y=Object(j.a)(B,2),w=y[0],Q=y[1],D=Object(a.useState)(!1),E=Object(j.a)(D,2),T=E[0],S=E[1],R=Object(d.a)(O,{fetchPolicy:"no-cache",variables:{Reg_no:C},onCompleted:function(e){h([I.getResultByReg_no]),t(!A)}}),P=Object(j.a)(R,2),M=P[0],H=P[1],I=H.data,U=H.loading,L=Object(d.a)(u,{fetchPolicy:"no-cache",variables:{Name:w},onCompleted:function(e){h(e.getResultByName),e.getResultByName.length>1?c(!n):"object"===typeof e.getResultByName[0]?t(!A):(alert("Unfortunately We couldn't find your Result by your name try using Reg_no"),window.location.reload())}}),X=Object(j.a)(L,2),F=X[0],k=X[1],z=k.data,G=k.loading;return I&&I.getResultByReg_no&&console.log(I.getResultByReg_no),U?Object(v.jsx)(v.Fragment,{children:"loading"}):(z&&z.getResultByName&&console.log(z.getResultByName),G?Object(v.jsx)(v.Fragment,{children:"loading"}):Object(v.jsx)("div",{className:"Form-container",id:"demo",children:Object(v.jsx)("form",{onSubmit:function(){T?F():C>=367635&&C<=367912?M():alert("Please Enter A Valid Registration number")},children:Object(v.jsxs)("div",{className:"input",children:[Object(v.jsxs)("label",{children:[T?Object(v.jsx)(v.Fragment,{children:"Full Name"}):Object(v.jsx)(v.Fragment,{children:"Registration Number"})," :"]}),T?Object(v.jsx)("input",{type:"text",placeholder:"Name Here.....",onChange:function(e){Q(e.target.value)}}):Object(v.jsx)("input",{type:"text",placeholder:"Reg_no.....",onChange:function(e){N(parseInt(e.target.value))}}),Object(v.jsx)(g.animated.button,{style:m,onMouseEnter:function(){r(!l)},onMouseLeave:function(){r(!l)},children:"Submit"}),Object(v.jsxs)("label",{id:"Forgot",onClick:function(){S(!T)},children:[Object(v.jsxs)("span",{children:[" Forgot",T?Object(v.jsx)(v.Fragment,{children:" Name? "}):Object(v.jsx)(v.Fragment,{children:" Reg.No? "})," "]})," Find by ",T?Object(v.jsx)(v.Fragment,{children:" Reg_no "}):Object(v.jsx)(v.Fragment,{children:" Name "})]})]})})}))},C=A.p+"static/media/Avatar.542c35d7.png",N=A.p+"static/media/next.0bbb68d5.svg",B=A(129);new(A(88).a)({baseUrl:"https://charts.mongodb.com/charts-ssle--matric-web--qghvt"}).createChart({chartId:"5d40bef8-ed97-4a61-83dc-2658d6542491",width:640,height:400});var y=function(e){var t=e.toggler,A=e.toggle,n=Object(a.useState)([]),c=Object(j.a)(n,2),s=c[0],i=c[1],l=Object(B.a)(m,{variables:{TOP:10}}),r=l.data,o=l.loading,g=l.error;Object(a.useEffect)((function(){o||r.getTopResult&&i(r.getTopResult),g&&console.log(g)}),[r,o,g]);var d=0;return Object(v.jsxs)(a.Fragment,{children:[Object(v.jsxs)("div",{className:"First_line",children:[Object(v.jsx)("div",{className:"Rank-viewport",children:Object(v.jsx)("h1",{children:"Rank"})}),Object(v.jsx)("div",{className:"Detail-viewport",children:Object(v.jsx)("h1",{children:"Detail"})})]}),Object(v.jsx)("div",{className:"previous-container",children:Object(v.jsx)("img",{className:"previous",onClick:function(){t([{}]),A([])},src:N,alt:"Pervious"})}),Object(v.jsxs)("div",{className:"Second_line",children:[Object(v.jsx)("div",{className:"Percentile-viewport",children:Object(v.jsx)("h1",{children:"Percentile"})}),Object(v.jsx)("div",{className:"Top-10-viewport",children:Object(v.jsxs)("div",{className:"container-top",children:[Object(v.jsx)("h3",{children:"Top 10 Students"}),s.map((function(e){for(var t=e.Name.toLowerCase().split(" "),A=0;A<t.length;A++)t[A]=t[A].charAt(0).toUpperCase()+t[A].slice(1);var n=t.join(" ");return d++,Object(v.jsxs)("div",{className:"top",children:["".concat(d,". ").concat(n),Object(v.jsx)("span",{children:e.Result.Total})]})}))]})})]}),Object(v.jsxs)("div",{className:"Similar-viewport",children:[Object(v.jsx)("div",{className:"Placement-viewport"}),Object(v.jsx)("div",{className:"Result-viewport",children:Object(v.jsx)("h1",{children:"Similar Result"})})]})]})};var w=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),A=t[0],n=t[1],c=Object(a.useState)([{}]),s=Object(j.a)(c,2),i=s[0],l=s[1],r=Object(a.useContext)(x),o=Object(j.a)(r,2),d=o[0],b=(o[1],Object(g.useTransition)(A,{from:{x:600,opacity:0},enter:{x:0,opacity:1},leave:{x:600,opacity:0},delay:100,config:g.config.gentle})),h=Object(g.useTransition)(i,{from:{x:-600,opacity:0},enter:{x:0,opacity:1},leave:{x:-600,opacity:0},delay:100,config:g.config.gentle}),O=function(e){for(var t=e.toLowerCase().split(" "),A=0;A<t.length;A++)t[A]=t[A].charAt(0).toUpperCase()+t[A].slice(1);return t.join(" ")};return Object(v.jsxs)("div",{className:"Results-Card",children:[h((function(e,t){return t?Object(v.jsxs)(g.animated.div,{className:"Card-Container",style:e,children:[Object(v.jsx)("img",{src:C,className:"avatar",alt:"Some Here"}),Object(v.jsxs)("div",{className:"Details",children:[Object(v.jsxs)("div",{className:"detail",children:[Object(v.jsx)("span",{children:"Name :"}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{children:d[0]?O(d[0].Name):"null"})})]}),Object(v.jsxs)("div",{className:"detail",children:[Object(v.jsx)("span",{children:"Sex :"}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{children:d[0]?d[0].Sex:"null"})})]}),Object(v.jsxs)("div",{className:"detail",children:[Object(v.jsx)("span",{children:"School :"}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{children:d[0]?d[0].School:"null"})})]}),Object(v.jsxs)("div",{className:"detail",children:[Object(v.jsx)("span",{children:"Stream :"}),Object(v.jsx)("div",{children:Object(v.jsx)("span",{children:d[0]?d[0].Stream:"null"})})]}),Object(v.jsx)("div",{className:"next-container",children:Object(v.jsx)("img",{src:N,onClick:function(){n([{}]),l([])},alt:"Next",className:"next"})})]}),Object(v.jsxs)("div",{className:"Results",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Biology"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.Biology:"null"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Civics"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.Civics:"null"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Chemistry"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.Chemistry:"null"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Physics"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.Physics:"null"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Maths"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.Maths:"null"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"SAT"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.SAT:"null"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"English"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.English:"null"})]}),Object(v.jsx)("hr",{size:"1",width:"108%"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"total",children:"Total"}),Object(v.jsx)("span",{className:"value",children:d[0]?d[0].Result.Total:"null"})]})]})]}):""})),b((function(e,t){return t?Object(v.jsx)(g.animated.div,{className:"Stats-Container",style:e,children:Object(v.jsx)(y,{toggler:l,toggle:n})}):""}))]})},Q=A(12),D=A.p+"static/media/telegram.17e3cedd.svg",E=A.p+"static/media/discord.119e302c.svg",T=A.p+"static/media/linkedin.fb4211d9.svg",S=A.p+"static/media/twitter.101e8132.svg",R=A.p+"static/media/github.68c33e62.svg";var P=function(){var e=Object(a.useState)([!1,!1,!1,!1,!1,!1,!1,!1]),t=Object(j.a)(e,2),A=t[0],n=t[1],c=Object(g.useSpring)({left:A[0]?0:-350}),s=Object(g.useSpring)({left:A[1]?0:-350}),i=Object(g.useSpring)({left:A[2]?0:-350}),l=Object(g.useSpring)({left:A[3]?0:-350}),r=Object(g.useSpring)({left:A[4]?0:-350}),o=Object(g.useSpring)({backgroundColor:A[5]?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0.5)",config:g.config.slow}),d=Object(g.useSpring)({backgroundColor:A[6]?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0.5)",config:g.config.slow}),b=Object(g.useSpring)({backgroundColor:A[7]?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0.5)",config:g.config.slow});return Object(v.jsx)("div",{className:"Footer",children:Object(v.jsxs)("div",{className:"footer-container",children:[Object(v.jsxs)("div",{className:"Contact-me",children:[Object(v.jsxs)("a",{href:"https://t.me/User_125",children:[Object(v.jsx)("img",{className:"telegram",onMouseEnter:function(){var e=Object(Q.a)(A);e[0]=!e[0],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[0]=!e[0],n(e)},src:D,alt:"telegram"}),Object(v.jsx)(g.animated.span,{style:c,children:"@User_125"})]}),Object(v.jsxs)("a",{href:"https://github.com/Nahom-Derese",children:[Object(v.jsx)("img",{className:"github",onMouseEnter:function(){var e=Object(Q.a)(A);e[1]=!e[1],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[1]=!e[1],n(e)},src:E,alt:"github"}),Object(v.jsx)(g.animated.span,{style:s,children:"@Nahom-Derese"})]}),Object(v.jsxs)("a",{href:"#/",children:[Object(v.jsx)("img",{className:"linkedIn",onMouseEnter:function(){var e=Object(Q.a)(A);e[2]=!e[2],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[2]=!e[2],n(e)},src:T,alt:"linkedIn"}),Object(v.jsx)(g.animated.span,{style:i,children:"@Nahom-Derese"})]}),Object(v.jsxs)("a",{href:"https://twitter.com/NahomD",children:[Object(v.jsx)("img",{className:"twitter",onMouseEnter:function(){var e=Object(Q.a)(A);e[3]=!e[3],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[3]=!e[3],n(e)},src:S,alt:"twitter"}),Object(v.jsx)(g.animated.span,{style:l,children:"@Nahom-Derese"})]}),Object(v.jsxs)("a",{href:"#/",children:[Object(v.jsx)("img",{className:"discord",onMouseEnter:function(){var e=Object(Q.a)(A);e[4]=!e[4],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[4]=!e[4],n(e)},src:R,alt:"discord"}),Object(v.jsx)(g.animated.span,{style:r,children:"@Nahom-Derese"})]})]}),Object(v.jsxs)("div",{className:"view-Projects",children:[Object(v.jsx)("div",{className:"text",children:"View Other Projects"}),Object(v.jsxs)("div",{className:"portfolios",children:[Object(v.jsx)("a",{href:"#/",children:Object(v.jsx)(g.animated.div,{onMouseEnter:function(){var e=Object(Q.a)(A);e[5]=!e[5],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[5]=!e[5],n(e)},className:"portfolio",id:"portfolio1",style:o})}),Object(v.jsx)("a",{href:"#/",children:Object(v.jsx)(g.animated.div,{onMouseEnter:function(){var e=Object(Q.a)(A);e[6]=!e[6],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[6]=!e[6],n(e)},className:"portfolio",id:"portfolio2",style:d})}),Object(v.jsx)("a",{href:"#/",children:Object(v.jsx)(g.animated.div,{onMouseEnter:function(){var e=Object(Q.a)(A);e[7]=!e[7],n(e)},onMouseLeave:function(){var e=Object(Q.a)(A);e[7]=!e[7],n(e)},className:"portfolio",id:"portfolio3",style:b})})]})]})]})})},M=A.p+"static/media/graduation-cap.573085e8.svg",H=A.p+"static/media/graduation-hat-and-diploma.739d4a89.svg",I=A.p+"static/media/zigzag-line.d8e36a82.svg";var U=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),A=t[0],n=t[1],c=Object(g.useSpring)({transform:"translateY(".concat(-.25*A,"px)")}),s=Object(g.useSpring)({transform:"translateY(".concat(.35*A,"px)")}),i=Object(g.useSpring)({transform:"translateY(".concat(.15*A,"px)")}),l=Object(g.useSpring)({transform:"translateY(".concat(-.35*A,"px)")}),r=function(){n(window.pageYOffset)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]),Object(v.jsxs)(a.Fragment,{children:[Object(v.jsx)(g.animated.div,{className:"orb",style:l}),Object(v.jsx)(g.animated.img,{className:"item",src:M,style:c}),Object(v.jsx)(g.animated.div,{className:"item-1",style:c}),Object(v.jsx)(g.animated.img,{className:"item-2",src:H,style:s}),Object(v.jsx)(g.animated.img,{className:"item-3",src:H,style:i}),Object(v.jsx)(g.animated.img,{className:"item-4",src:I,style:c}),Object(v.jsx)(g.animated.img,{className:"item-5",src:H,style:c}),Object(v.jsx)(g.animated.img,{className:"item-6",src:M,style:s}),Object(v.jsx)(g.animated.img,{className:"item-7",src:I,style:i})]})},L=A(36),X=A(131),F=A(60),k=A(117),z=A(115),G=A(85);var Y=function(e){var t=e.setToggle_2,A=e.Toggle_2,n=e.Toggle_3,c=e.setToggle_3,s=Object(a.useContext)(x),i=Object(j.a)(s,2),l=i[0],r=i[1],o=function(e){for(var t=e.toLowerCase().split(" "),A=0;A<t.length;A++)t[A]=t[A].charAt(0).toUpperCase()+t[A].slice(1);return t.join(" ")};return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"WhoAreYou",children:Object(v.jsx)("div",{className:"container",children:l.map((function(e){return Object(v.jsx)("div",{className:"student-class",onClick:function(){r([e]),t(!A),c(!n)},children:Object(v.jsx)("h4",{children:o(e.Name)})})}))})})})},K=Object(G.a)((function(e){var t=e.graphqlErrors;e.networkErrors;t&&t.map((function(e){var t=e.message,A=(e.location,e.path);return alert("Graphql Erorors : ".concat(t)),A}))})),q=Object(L.from)([K,new X.a({uri:"https://ssle.herokuapp.com/graphql"})]),V=new F.a({cache:new k.a,link:q});var J=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),A=t[0],n=t[1],c=Object(a.useState)(!1),s=Object(j.a)(c,2),i=s[0],l=s[1],r=Object(a.useState)(!1),d=Object(j.a)(r,2),b=d[0],h=d[1],O=Object(g.useTransition)(A,{from:{left:-250},enter:{left:0},leave:{left:-250},config:g.config.slow}),u={display:A?"flex":"none"};return Object(v.jsx)(z.a,{client:V,children:Object(v.jsx)(f,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("nav",{children:Object(v.jsxs)("div",{className:"nav-bar",children:[Object(v.jsxs)("div",{className:"logo",children:[Object(v.jsx)("img",{src:o,onMouseEnter:function(){n(!A)},onMouseLeave:function(){n(!A)},alt:""}),Object(v.jsx)("div",{className:"SSLE",style:u,children:O((function(e,t){return t?Object(v.jsx)(g.animated.span,{style:e,children:"Secondary School Leaving Exam"}):""}))}),Object(v.jsx)("span",{children:"(SSLE)"})]}),Object(v.jsxs)("div",{className:"links",children:[Object(v.jsxs)("button",{onClick:function(){l(!1),h(!1)},children:[Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAG0JJREFUeNrs3YtVHFeeB+BrJzBk4MrAnYFqIxg2gi1ngCPY3giYiQBtBGgiaBQBUgQwEYAj0HatChlhQN10V/3v4/vOuQc0I4O6Xvd3n5USAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz/vJIYA36abyYLUtJ0f62VePvr/flk8ONyAAwPz6J1/fvVDpL+1xGBi//jF9vX/0FUAAgB+04FdT+WX6c1/B57qagsDnKRTc6kEABABabtE/VPSrSir6fX2aykMwuHJZgAAANbbs3zVc2e8bCj4++h4QAKCYCr+fKvw+xY7Rl+5+6hn4OH0VCEAAgKycThX+qQp/9kDwYQoEH5JJhiAAQEAr/3GlT4yxR+BfUxjQOwACAMxiNVX2f5++Jy+3UxAYA8GVwwHAoS399bbcbMsXpZhyty3nghoA+xh3zzvblmsVaRXlZgoDnUsbgOeM3fuXKsyqyxjqhnS8LZIBKFQ3tQ7vVI7NlYtkTwaAJlv7G5WgolcAoH4PY/sm9CmvTRzs3CoAdeiSbn7F8ABAUxX/hcpMOaBsBAGAcvQqfkUQAGjHKpnYpwgCAM3otPgVQQBAxa8oggBAhcblfOtkVr+S16qBzq0JMJ9Bxa9kXNbJhkIAR9UnL+dRytlQaHDLAhxmbE0Z51dKnR/gdcQAb3CWdPcr5ZfzZFgAYCdjq0l3v1JTGd8/cerWBnjew+x+FYZSa7nUGwDwvT55S5/SziRBvQHwjJ8cguaMY6RnDsPBrh59//GV/29Xqyet1V8f/XmlJXuwD9vy27bcOxQgALRmrEQukpnS+1TwY2XxeVtupzL++VPgv6l7Un6ZvgoIu7mfQsAHhwIEgFacTS1//up2qtQ/T5X+Q2VfmpMpCKym3oOVsPei99vyu94ABABqNlYK40So3qH41gK8elTZf2qgEugfhYI+2UL3cfD7zxTbowMw24O/9XX9d1MAOtMa/mYMAEP6OhxkIqj5MEBl1qntHeFU+PsHgsuGA6PlgkDxTqYKsLVW/sVUiXmIH+600d6BG6ERKNWqoRbcQ6Vvfff819R5Q2HAi4WA4gypna5alX6MfgpdLYTMC6cbKEHtb+8b31Mwjunr3s8rcG4auO5cc0CWah7vf+jiNyabty59nXBaa6+AeQFAdmp9g9+N1r5egeRdAgAvVv61tbg2HrLV6FOdw1KDUwtEt7Jqm9TXO61V6ioMArbTBlT+6fBZ1p1T2oRxOGddUa+VFQLAomppSan4BYEagsAmmacCqPx3fmCaTU1K9QwNWCYIqPx/UPH3TiMvBIFLIQDgeyeFPxzH5XyD08gO+lT28kEhADhq5V/qGv9xfHftgcgbDKnc+QE2DAKarvzHVlznFHLg9X9ecPgVAijKTw5BVg+/EifL3W7L79vywSn8ZjWdz4evf3tyXvs9f96nbfnntrxv6PiVuBX0/bb8x3S+AKpu+Z+ndrv7T6aK/Gw6DmN4O+Zrc++mn9tyq/IslTcscJcMgQF7KG3C301qb3b/+HnX07m6SfMOpQxuiW+6VN4kQRMDgZ2UttSvlVb/6aOW/VJvP+zcDtX0BggBQDWV/13lrf7VVMks2dp8WC6potj9HJU0VCYEAMVX/peVPsj6qZV/k5ZfMeHth2+3LiwEAHwzFPQAO6uw0r9IMd3JJc5sz/k8ljIk4AVCQFGVf02bm3RBLX3j+/N6WDorBADZWyVd/ktWDmPYihoztivictaF3FeDUwXtVv4ldFmuK2ntRx1rFX+M00LuLyEAGlPCRj93qeyJaX2K7Q5W8ecRsku4z8wDgYbkPk55XfBDaQh+6Kv48wvbud9vdguERuS+3G9T6MNorPhvUvzELg9y953lgcCzlZSZyXVW/J3L2/2XrAwAnpH7jP+1iv9NvSW9S7u46ybnyYFnThHU5STzh85Q0LEcK9zoiV1j8LBzX9lhPOf70aRAqEjOk5BKqfy7DI7jXSp/WST5hwCTAqES64wfMn0hvSc5HEPj/HWGgFyXCW6cHihbn6w9PkQOm7lcJ+P8Nct5Tw69TVDwgyXHLsYSKv8u6e5HCPgifEKZchz3L6HyP8sgOG2S7n4hwHwA4I2VmMq/zFa/2f1CQI4v4wIKkON6/9wr/xxa/XbxI+cQYH8AKECOD48+44dtdKv/Jhln5a+9UbnN37lLhqUga+fJOv9d5TDD/1yrnxfkuE+ApYGQqV7lX0xQMtZPqSHAUABkZmxF3iRriH+kS/FDJJda/ezZU2UoAHjROrOHRI5vFeuDW1N3qax3HpCPIRkKAJ6x8nD4oehlkddaTRwot/k9hgIgAznN+h//LTl1b59MvRHRE/3gGC6SDYKATFq2Oa/1j15PXcrLjihHbnsE2CAIAh8GOc0QzqmyG4NI5KTIjdYRM+nc98BlMh74UuUf+YDU5c/c+ozu/RunA9p9AOTUDTgka/tpQ07Df2unA5aTyzjgmP5z6eqOrPyvU/5vOaQ+ufQC2hsAGqjonpaVY+IlPoTJaQOwC6cD5r/hc5kAlMu4/4VjQMNy2gekdzpgPutk3D+Hyt94PznJZT6AHQJhJl2yAUgOlf9NMt5PfjaZPB8EY6iowsuxmy/qWOS20yE8biDkMDxoWSBU2vrPYY171J7oJjmRu1zeHDg4FVBX6z+HJX9Dss4ZXnOZ9AJANfqk6z+y8teaoSS5rBRy38AR5DC5J7rrP6LyN9OfUuUwFKAXACpo/Ud3/Ufs7Z/bmw2hxIaDXgA4QA5j/5GtYJU/vE2X4ocC9ALAATdwyxt7RLz73DI/arLWCwBa/28tXeDnV/nD4aLfFaAXAAps/a8bCj8qf2rV6wWAspyndif+DSp/OKroCYHeEQA7ymEdb1RiX/rNZpcqfxrQJfuIQBGi3+wVldaXDj629qUl0b2K7jfYQfSknaikvvEwgmoCdm6TiiF70Tt4RbX+1yp/qOo+y/VlYpCt6Mk6ERvg9MlkJGihF+DOKYDndam9MbrxgbTUkIfZ/hA/x2hwCuCvoifpdAGfealXl6r84U+R84z0wsEzIrvmIlr/S813UPnD94ZkMiBk47SxG3KpsUiVP+TX4DAZEB65DLwZLyv9vHdaGvCidTIZEMJ1qa11/6cLPWC80hdeFr0i4NQpgNhZuZsKHzoqf8i/F+DS4YflX3sbmcKXeMvf4JKCnXQptvfR/BzcgEFl6fd09yp/yM5FsicAhIhc+3+28Gede+2xmcWQZzA3DAABleJr4+RLdr/NPc/B/v7wdpHDkIYBaNIqtbHxz9wT/6z1h8MMyTAALGodeNMtOUt+zjHGpXsyoEaRSwINA9CkqG636wU/Y5cs94MSRE4GFOJpSpfamPw35+uNB5cRHE3kkKR7maZEbv6zVNruZ/wMa5cQHF1Ur6RJvDQlau//JcfbNsmYIWiYeDcAfHOS6t/5b67Wvxn/MJ8u8NnUO/y0IOrVv0um7E0y6Q9KtAl6PtnIiyZE7f631DjbXK3/waUDsxtS/auTIEzU7n9Ldf/P0YLQOoBlRA5RGt6jal2qu/t/jta/lgEsK2qS8uDQt+3nyj9fH/R7Pyz0e/7ryD/vflv+020Bi/oY9HvfOfTULGq3rSWS9Ry9G6cuGVjcHPdyjq8oh0VFjf8vMbZ27MmNxv0hTtSmQJ1Dj1R9vLJZ4LMd+2Ui1vtDrKjVSnr9qFLU+v8l9v4fjvxvtt4fYvXJfgBQfKJeojI9ZnfhmUsFshDximCrfqhSxA5bSyz/O+ZbxDYuE8hG1HJAqE6tL/851sqGMax0LhPIRtTLgXqHnpr0qc7x/2NO/jP5B/JyzN49w4BI0qmu8f+hoJ4KYH8R8wAuHHZqEjEBcInx/8sj/Tst+YM8RcwDMBGQqkRMAJy7VX2sl4bo+od8rZOJgHCQiBtoPfNnGpKuf6hdn0wEhDfrKr2BDu0aNOsfNGC8GZCqRe0AOOe4+jG6/830hTJEvBdg7bBTg3Wq761aQ7LhD7Qi4i2mnhEN+rnCz/RLwO/8NPPP//uB//3vLnUoxueA39k57NQgYgXAeubPdJd07UEr+mQlALxJbRMAD3kYjEMT1vxDWY615NdbQREAFijdjJ/nkE2NrPmHMt0kSwFhsdZyrl1nb50RbFIPlKvGoUwyU9skwIju7quZP89bu+V+c3lDsT45BAgA+4kYw7qfuUfjLf6xLbcubyjWHwG/853DLgCwn8+Z3ZBjIPkfpwWKduUQwH4ixs2GGT/PW8b/7fgH5VulOt9oClUFgH7Gz5PbjoTAcuwFAHuIWDoz17yDPln2By07ZAOwHN9pAhLzjs6SZX/Qstp6NMmMSYD5+nXPv2/iHwBNBoAu4Hdezfiz9xla+JDMGobaROwFYAhAABAAMrBPAPC2P6hPxF4A3gcgAFBQ5f8+2fQHAAFgUR9n+rndHn/X2D/UyXbACAAztJpr+Sxa/1Cv+4Df+TeHXQAoUU2TV3ZdAaD1D2hI0XwAqCmh7xJmtP4BIH19l3Utm2bssgNY55RD1U4Cnmk2FNMDQAY3vtY/tO3eIUAAaMsuY3DG/gEQABpr/X/Q+gdAAGgvAPzTIQJAAPjTL5V8jteGAK6SPf8BEAC+0zVwvrT+ARAAnqh928zb9HX8HwAEgEf+qORzvLQLoJn/AAgAFXtuEuC91j8AAkB73iebggAgADTH5D8ABIDG2PgHAAEgM90Cv+N/HWZoUu8QIAC0GwBuk8l/AAgAzdH6B5Z06xAIACW6qvD8vHeJAgv6t0MgALCbOd8/YPIftG3lECAA5Kub8Wf/y+GFpp04BAgAu7mv7LO8d3kCC7t1CCjVl4XL3QyfYbMt504lNG8T8EzrHXY9AOxmji66MYGb/Q8Ae7gLSMzdkT/D4DQCWzcVPM9gMbrMgFp8CSg0xBDA4czUBY5NSxwBYE+fAn6ntbpADQHgymEXAEr2R8Dv/MVlBGhYIAC01wPQuYyAI4sYWvzksAsAJYvYDEhSB47tXcDv/MNhp/TUHDFz1kRA4JgilgD2Djul++LGATzHPMdoT8ReAGcOO3AkfbIHAAuocR+AiHkAv7qUgCPpAn7nrcMuANTgc8DvNBEQKLlBIQBQhdOk+wwoV8QwpjeQUoVVMoEGKFfE88s8JtxAbiBAAwbKdR1wA1047MCBzpIhTDjIRcANdOOwA55dEGsdlKI7hx44QMQOgJcOe5t+rvRzXQX93t4lBbxRF9SI+OzQU5uIHgDzAIC3GpIJgHAUERMBjaUBbxUx/u9lZriZknkAQKyI8f9rh71dP1f82T4G/d7eZQXsaRXUePjk0AsANYq6sP/usgIKaTh8dOip1V1avkvtzmEH9hSx/78hS6p2GXRTnTr0wI5Ogp5TJi037ufKP19U99Y7lxawo6gGw5VDT82iXqwhWQO7iuqpHBx6ancXdHOtHHog42dU59BTu6j9AM4deuAHTpNeSpjN4AYDNFA0UGhP1AxbwwBArs8mK5VoxnXyciAgL0NgALD/P81YB91kNgUCXhI1+//SoaclUcsBLbUBntMFPpPOHH5ac5OkbSAP68AA0Dn8tObcDQc03iDx+l+a1AcGgLXDD0yi1v7r/qdpUTtu2RMAeBA1+U9vJE27SCYDAnG6wGeQ7n+aFrkaYOPwQ/Mi5yLp/qd5N4E3YO/wQ7PGzXeihiF1/0NwArczILRrSHogIVQXeBNK4dCuyN7HweGHr66TXgCgjdb/OOxg73/I4Gb0Ig7Q+tfogCCRr+G0MRC0pQ9+3vROAXwvck8AXXLQjk3gs8YmZJBhKtcLAJ4z1v5DkMjJgHoBoH6RY//mG8ErhuCb0+Qc8HzxfIEA0Ttz2RcAtP7nKiunAF53nqR04LjOgp8rdv6DHXTBN6plOlCXHHoWB6cBdnORpHXgOKJ7FS39gz30GfQCSOxQvs6zBMqzCb5pLQsEzxHPEWi0F+DcaYBinWbwDFk7DVBmerd0B8o0trqjl/1p/UPhvQDXTgMU5zxp/YNegGT/bmjJKoNnhtY/VNILMN7MnVMBRbhOWv+gFyDZGwBastb6B70AhgKgLatMnhNa/1BhL4ChAMjT2OK+Tlr/oBcgWRUALTnP5PkwOBUwj4ukiw/43mkmzwV7/sOMukxudG8MhDzk8Ka/h3LqdMC81pnc7Mb6IN4mk+eBVULQWOJ304PGgC3DYUFDRjf+2umAxfUZPQMunA5Y1iajB4CxP1hOl/LpBTQUCAFy2fTj4SGgCxDml8t6f5uDQbDzjB4E11oCMLuLjO55c4AguDVwl9ED4dIpgdmsM7rXTfyDDJxm9lAwIQiOb8jsPl87JZCHy8weDoNTAkcztrRz6ukbd/wz3AeZyG0oQAiAOit/u4BChnIbCrAyAA4P9teZ3dfnTgvkKbehACEA6qn8df1D5g+N3LoLx39P59RA0ZW/rn8owGmGDw57BMDuLjK8h3X9gweIEAAN3rtAIcaK9kYIAJV/Mo8HmrPK8GEiBEA5lb/lvFCwMyEAVP7J1t7QpMskBECOTjKu/C35g0oeMjeZPmSML9LyfXntvgTmlut8AA8bVP7G/YGZDZmHgFOniEbCeM6Vv7d5QqVyHW/U8qCVyv8u4/vPen+oXM6tDzuOUash88p//LeZ9AeVy3lS4ONuSA8jarHO/H4zDwcakntX5EN3ZOdUUXjYzn3YzdAbNCjHlwY91zLpnSoK1KX8h9u+TL0TQIOGAh5QYzlzqihIn/LvYTPjH/j/SXclhIBxR0PzAsjdupD7aeNUASmVMU75sD2pyUrk6GSqVL8UUnqnDHhQ0sPLkAA5GSvTu4LuHzP/gb+0YEqYtPS4C9OQANH3zHkqq+IXAoAqQoAthImyKuxeEQKA6kKACYIsbV1BxS8EAC+GgBLHNPUGoNUvBABHeNiVFgIe5gZ0Th9HDsQlj/ULAUAzIWD8N6+dPo5g7FW6SfVX/kIAUE0IeNg3oHcKeYMulbU0VggAZnsYljz2eZkMC7Cbk1TfJD8hADj4wVj6BKjzZLUALzsruLdLCACEgLTb/ABBgAdDamucXwgAmg0BDw+2welsWp/qXdY3ZwhYTb0l4ztENq/8N5vp74z3Wedyg3qU8gKhXSYKCgLtVfytTvA7JAScH9hTcjP1vgkDIARkFwTWydBAzYZUV1f/JpX5IqIv07NDEIAKHqq1tXS0Uupxkuoc47949BlLXqordEMFIaDG2dMXyQSoUnVT5VLjdbl+5vOWHAKu3WdQtpIfQLs8oAanuAjjzn2Xqd5x+KHSe9CkXChcLSsEXntI6RXIt7V/kyzHKz2ICwFQeAioaXLga70CZ8lcgcjrbKi4tf/0WttnnFwIAEKdpXaWSF1ODy2TmeZ3OgXMVnbsu3jjcRICgFA1zwt4LQzoGTh+S/+isWvpGGPiQgAQ/gBvddOVset23DyldxnsXXGdNXzd3KTjzTMRAoBw60Yf5o9bdA+9AyYRfq971MpvfU/+y3T8oSQhAAjXJ29bey4QtNZDsFLhL74MTggAwp2kNmZuv3XI4KKyUNBPD+9xKMT++7Eb4QgBZO0nh6AZYyX338nM+R+5ncqnbfn39PV++pqL7kl5N51XQx0/9o9t+X3h3pdNwffdb9vy3mUjAFC+bmrx9g7FmzwOAh8f/e9XT/7e1RsripMX/vzuScXP24Ldb288N4c6nwJ4qYQAqKw3wNwApZVyHtwCr2HexeCxCXX1BhgjVmpf3hfd27Wq6HgKAaA3QFG89naP+6um4yoEQGWsFFBqKZuU12TIGt/TIQRAhfpknbhS7rr+HCfa1TrMJgRApdaGBZSCSvQkv9fUfNyFAKhUl9p4zbCiu18AEAKAZ/TJagElv9n9p4XcPy2cDyEAKneazA9Q6t6/XwAQAoBXDIKAElDxr1OZ2+m2dJ6EABAEFKX5iv9Ba5NphQAQBBSl6Yr/QYvzZ4QAEAQUpdmK/0GrK2mEAGg0CFg1oOw7q39Idb6q+qzh8yoEQKP6ZB8B5cfr+GuvJLrGz7EQAA0bH4DjTm12FlQeyhgMVw3dA60PjQkBgOGB1HY3/9gdftLgdb92/oUAQK9Aa5P6xtZ+73p3PQgBwFPjDoNeRVzn2P6Jy/sb82GEAOAFJ9PDQRgos1ynr138nUtZL4AQAAgDKn3+tHbNCAHA/mFg7EI1ZyC+XKr0D7qWr11DQgDwNn36OoHQg3S52fvj8T516R3FSpAVAoDjtKhOp94B2xAfr8K/mB7MWvnzGFxnQgBwXN0UCMYWq/0Gdh/HV+ELAUJAg35yCKhcn752u/46fV01fCxut+XTtnzelqvp+3uXSGgIuHAYvvltW947DAIAzB0Kuqm8e/R9TRX9Q2X/7+nrldMuBAgBCADwvLF34CT9uXPduyf/e04eKvSPT/6sohcChAAEADiyk/TnEMLj70d/S8cZXridWu1PW/NPv0cIEAIAoJIQYEKgiYEACAFCgEsCACFACAAAIUAIAAAhQAgAACFACAAAIUAIAAAhQAgAACFACAAAIUAIAAAhQAgAACFACAAAIUAIAAAhQAgAACFACAAAIUAIAAAhQAgAACFACAAAIUAIAAAhQAgAACFACAAAIUAIAAAhQAgAACFACABACFCEAACEACEAAIQAIQAAhAAhAACEACEAAIQAIQAAhAAhAACEACEAAIQAIQAAhAAhAACEgFzLqUsCACGgvXK3LZ1LAgAhoL2ycTkAIASYDwAAQkAj5calAIAQoBcAAIQAvQAAIATUXFYuAwCEgPbKuUsAACHAMAAACAGNlBOnHwAhoL3SO/UACAHtBYC10w4A7YUAAQAAGgwBAgAANBgCLAUEgAZDgB4AAGgwBAgAANBgCBAAAKDBEHDq1AJAeyHAC4EAoLEQcOd0AkB7IeDSqQSA9kLA4DQCQFshYOz+9yZAAGgsBNgBEAAaDAGd0wYAbYUArX8AaCwEGPsHgAZDgJ3/AKCxEKDrHwAaCwE2/QGAxkLAdTLuDwBNhYBLlT8AxBgn3t0lY/4A0JxuWzZpuaV+ZvsDQEaGbbmZudWvyx8AGggCd1PF3zmsAFCG1VR57xsGxkr/cgoSzbf4f3IdAVCwkykQ9K/8nU/bcjt9BQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID9/J8AAwACwtftu4vTHAAAAABJRU5ErkJggg=="})," Search"]}),Object(v.jsx)("a",{href:"http://result.neaea.gov.et/",children:" Official Page "}),Object(v.jsx)("a",{href:"http://t.me/User_125",children:" Contact Me "})]})]})}),Object(v.jsxs)("main",{className:"main-container",children:[Object(v.jsx)("div",{className:"Title",children:Object(v.jsx)("h2",{className:"T",contenteditable:!0,spellcheck:"false",children:"Secondary School Leaving Examination (SSLE) Results for Neway Challenge Academy Students"})}),Object(v.jsxs)("div",{className:"container",children:[i||b?Object(v.jsx)(v.Fragment,{}):Object(v.jsx)(p,{Toggle_2:i,setToggle_2:l,Toggle_3:b,setToggle_3:h}),Object(v.jsx)(U,{}),i?Object(v.jsx)(w,{}):Object(v.jsx)(v.Fragment,{}),b?Object(v.jsx)(Y,{Toggle_2:i,setToggle_2:l,Toggle_3:b,setToggle_3:h}):Object(v.jsx)(v.Fragment,{})]}),Object(v.jsx)(P,{})]})]})})})},Z=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,133)).then((function(t){var A=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;A(e),n(e),c(e),s(e),a(e)}))};r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),Z()}},[[116,1,2]]]);
//# sourceMappingURL=main.04844807.chunk.js.map