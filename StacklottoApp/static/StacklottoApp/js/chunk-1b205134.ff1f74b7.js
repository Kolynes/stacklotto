(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b205134"],{"5c5e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar"),a("div",{staticClass:"breadcrumb-container"},[a("b-container",{staticClass:"breadcrumb-container py-5"},[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",[a("h1",{staticClass:"draw-1 "},[t._v("Registration")]),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/home"}},[t._v("Home")]),a("b-breadcrumb-item",{attrs:{active:""}},[t._v("Registration")])],1)],1)],1)],1)],1),a("b-container",{staticClass:"text-center py-5"},[a("center",[a("b-card",{staticClass:"form-card"},[a("b-card-text",[a("h1",{staticClass:"draw-3 py-3"},[t._v("Create Your Account")]),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.callSignUp(e)}}},[a("b-form-input",{staticClass:"my-4 py-4",attrs:{type:"text",required:"",placeholder:"Input your first name"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),a("b-form-input",{staticClass:"my-4 py-4",attrs:{type:"text",required:"",placeholder:"Input your last name"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),a("b-form-input",{staticClass:"my-4 py-4",attrs:{type:"text",required:"",placeholder:"Input your username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("b-form-input",{staticClass:"my-4 py-4",attrs:{type:"email",required:"",placeholder:"Input your email address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("b-form-input",{staticClass:"my-4 py-4",attrs:{type:"text",required:"",placeholder:"Input your phone number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("b-form-input",{staticClass:"my-4 py-4",attrs:{type:"password",required:"",placeholder:"Input your password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("b-form-input",{staticClass:"my-4 py-4",attrs:{type:"password",required:"",placeholder:"Re-enter your password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),a("b-alert",{attrs:{variant:"danger",show:t.error.length>0}},[t._v(t._s(t.error))]),a("b-button",{staticClass:"cmn-btn btn-lg btn-block mt-4",staticStyle:{color:"white","border-radius":"5px"},attrs:{type:"submit",disabled:t.signingUp}},[t._v("Sign Up")]),a("p",{staticClass:"draw-2"},[t._v("Already have an account? "),a("router-link",{staticClass:"blue bold",attrs:{to:"/sign-in"}},[t._v("Log in")])],1)],1)],1)],1)],1)],1),a("v-footer")],1)},s=[],n=(a("96cf"),a("1da1")),o=a("d4ec"),i=a("bee2"),c=a("262e"),l=a("2caf"),u=a("9ab4"),p=a("60a3"),d=a("b0d8"),m=a("4c03"),b=a("4bb5"),h=Object(b["a"])("AccountsModule"),f=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.firstName="",t.lastName="",t.username="",t.email="",t.phone="",t.password="",t.confirmPassword="",t.error="",t.signingUp=!1,t}return Object(i["a"])(a,[{key:"callSignUp",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.password==this.confirmPassword){t.next=3;break}return this.error="Passwords do not match",t.abrupt("return");case 3:return this.signingUp=!0,t.next=6,this.signUp({firstName:this.firstName,lastName:this.lastName,username:this.username,phone:this.phone,email:this.email,password:this.password,code:this.code});case 6:e=t.sent,this.signingUp=!1,e.status?this.$router.push("/dashboard"):this.error=e.error;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(p["c"]);Object(u["a"])([Object(p["b"])({type:String})],f.prototype,"code",void 0),Object(u["a"])([h.Action],f.prototype,"signUp",void 0),f=Object(u["a"])([Object(p["a"])({components:{VToolbar:d["a"],VFooter:m["a"]}})],f);var y=f,v=y,w=(a("ed93"),a("2877")),g=Object(w["a"])(v,r,s,!1,null,"9cea9abc",null);e["default"]=g.exports},c40a:function(t,e,a){},ed93:function(t,e,a){"use strict";var r=a("c40a"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-1b205134.ff1f74b7.js.map