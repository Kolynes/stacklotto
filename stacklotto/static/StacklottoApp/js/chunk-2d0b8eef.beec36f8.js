(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8eef"],{3194:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("h2",{staticClass:"draw-1 mb-4"},[t._v("My Wallet")]),r("b-row",[r("b-col",[r("b-card",{staticClass:"balance-card"},[r("b-card-text",[r("h2",{staticClass:"draw-3"},[t._v("Balance")]),r("h1",{staticClass:"draw-1"},[t._v("₦"+t._s(t.user.balance.toFixed(2)))]),r("b-button",{staticClass:"cmn-btn m-2",staticStyle:{color:"white"}},[t._v("Fund Wallet")])],1)],1)],1),r("b-col",[r("h2",{staticClass:"draw-3"},[t._v("Withdrawal")]),r("b-card",{staticClass:"balance-card"},[r("b-card-text",[r("b-form",{on:{submit:function(a){return a.preventDefault(),t.withdraw(a)}}},[r("b-form-input",{attrs:{placeholder:"Enter amount to withdraw",required:"",type:"number"},model:{value:t.amount,callback:function(a){t.amount=a},expression:"amount"}}),r("b-alert",{attrs:{variant:"success",show:t.withdrawSuccess.length>0}},[t._v(t._s(t.withdrawSuccess))]),r("b-alert",{attrs:{variant:"danger",show:t.withdrawError.length>0}},[t._v(t._s(t.withdrawError))]),r("b-alert",{attrs:{variant:"info",show:t.withdrawing}},[t._v("Please wait...")]),r("b-button",{staticClass:"cmn-btn m-2",staticStyle:{color:"white"},attrs:{type:"submit",disabled:t.withdrawing}},[t._v("Withdraw")])],1)],1)],1)],1)],1)],1)},n=[],s=(r("96cf"),r("1da1")),i=r("d4ec"),c=r("bee2"),o=r("262e"),w=r("2caf"),u=r("9ab4"),h=r("60a3"),l=r("4bb5"),d=r("277d"),b=Object(l["a"])("AccountsModule"),v=function(t){Object(o["a"])(r,t);var a=Object(w["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=a.apply(this,arguments),t.amount=null,t.withdrawError="",t.withdrawSuccess="",t.withdrawing=!1,t}return Object(c["a"])(r,[{key:"withdraw",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.amount<0)){t.next=4;break}this.withdrawError="Amount is negative",t.next=22;break;case 4:if(!(this.amount>this.user.balance)){t.next=8;break}this.withdrawError="Insufficient funds",t.next=22;break;case 8:return t.prev=8,this.withdrawing=!0,t.next=12,d["a"].getJson("/transactions/withdraw/",{amount:this.amount},"POST");case 12:a=t.sent,this.withdrawing=!1,a.status?this.withdrawSuccess="Successful! Your withdrawal is now pending":this.withdrawError=a.error,t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](8),console.error(t.t0),this.withdrawing=!1,this.withdrawError="Failed to reach server";case 22:case"end":return t.stop()}}),t,this,[[8,17]])})));function a(){return t.apply(this,arguments)}return a}()}]),r}(h["c"]);Object(u["a"])([b.State],v.prototype,"user",void 0),v=Object(u["a"])([h["a"]],v);var f=v,m=f,p=r("2877"),g=Object(p["a"])(m,e,n,!1,null,null,null);a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0b8eef.beec36f8.js.map