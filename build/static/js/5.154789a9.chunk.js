(this.webpackJsonpproject_tickets=this.webpackJsonpproject_tickets||[]).push([[5],{154:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var n=t(5),s=t(6),r=t(8),c=t(7),l=t(1),i=t.n(l),o=t(43),m=(t(154),t(76)),p=t(48),u=t(11),h=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).signUpSuccess=function(){p.a.success("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng",{position:p.a.POSITION.TOP_CENTER,autoClose:3e3})},s.signUpFail=function(){p.a.success("\u0110\u0103ng k\xfd th\u1ea5t b\u1ea1i",{position:p.a.POSITION.TOP_CENTER,autoClose:3e3})},s.signUp=function(e){e.preventDefault(),m.a.auth().createUserWithEmailAndPassword(s.state.email,s.state.password).then((function(e){s.signUpSuccess()})).catch((function(e){s.signUpFail()}))},s.handleChange=function(e){s.setState(Object(o.a)({},e.target.name,e.target.value))},s.state={username:"",email:"",password:"",repassword:""},s}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"wrap"},i.a.createElement("div",{className:"login-wrapper",id:"signup-content"},i.a.createElement("div",{className:"login-content signup2"},i.a.createElement(u.b,{to:"./login"},i.a.createElement("a",{className:"close"},"Login")),i.a.createElement("h3",null,"sign up"),i.a.createElement("form",{method:"post",action:"#"},i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"username-2"},"Username:",i.a.createElement("input",{type:"text",name:"username",id:"username-2",placeholder:"Hugh Jackman",onChange:this.handleChange}))),i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"email-2"},"your email:",i.a.createElement("input",{name:"email",id:"email-2",placeholder:!0,onChange:this.handleChange}))),i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"password-2"},"Password:",i.a.createElement("input",{type:"password",name:"password",id:"password-2",placeholder:!0,onChange:this.handleChange}))),i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"repassword-2"},"re-type Password:",i.a.createElement("input",{type:"password",name:"repassword",id:"repassword-2",placeholder:!0,onChange:this.handleChange}))),i.a.createElement("div",{className:"row"},i.a.createElement("button",{onClick:this.signUp},"sign up"))))))}}]),t}(i.a.Component),d=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(h,null)}}]),t}(i.a.Component);a.default=d}}]);
//# sourceMappingURL=5.154789a9.chunk.js.map