(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e2cb404"],{"2ca0":function(e,t,r){"use strict";var a=r("23e7"),n=r("06cf").f,i=r("50c4"),s=r("5a34"),c=r("1d80"),l=r("ab13"),o=r("c430"),u="".startsWith,b=Math.min,d=l("startsWith"),m=!o&&!d&&!!function(){var e=n(String.prototype,"startsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!m&&!d},{startsWith:function(e){var t=String(c(this));s(e);var r=i(b(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return u?u.call(t,a,r):t.slice(r,r+a.length)===a}})},"3b07":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("div",[a("v-toolbar"),a("div",{staticClass:"breadcrumb-container"},[a("b-container",{staticClass:"breadcrumb-container py-5"},[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",[a("h1",{staticClass:"draw-1"},[e._v(e._s(e.lottery.name))]),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/"}},[e._v("Home")]),a("b-breadcrumb-item",{attrs:{active:""}},[e._v(e._s(e.lottery.name))])],1)],1)],1)],1)],1),a("b-container",{staticClass:"text-center py-5"},[a("img",{attrs:{src:r("e078")("./"+e.image+".png"),alt:""}}),a("h2",{staticClass:"draw-1 my-4"},[e._v(e._s(e.lottery.price))]),a("p",[e._v(e._s(e.game.info))]),a("p",[a("b-link",[e._v("click here")]),e._v(" for more details on how to play")],1),a("center",[a("b-card",{staticClass:"p-4 my-5 quick-play-card"},[a("b-card-text",[a("b-form",[a("b-row",[a("b-col",{attrs:{cols:"12",md:"6",lg:"8"}},[a("b-form-input",{staticStyle:{height:"50px"},attrs:{placeholder:"Enter Number of Play",type:"number"},model:{value:e.numberOfQuickPlayTickets,callback:function(t){e.numberOfQuickPlayTickets=t},expression:"numberOfQuickPlayTickets"}})],1),a("b-col",[a("b-button",{staticClass:"btn-block quick-play-btn",on:{click:e.randomizeTickets}},[e._v("Quick Play")])],1)],1)],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{cols:"12",sm:"6",md:"4"}},["Stacklotto 649"==e.lottery.name||"Stacklotto 425"==e.lottery.name||"Lucky 5"==e.lottery.name?a("b-card",{staticClass:"px-2"},[a("b-card-text",[a("h3",{staticClass:"draw-3 pb-2"},[e._v("Select Number")]),a("b-row",{attrs:{"align-h":"center"}},e._l(e.game.numberOfKeys,(function(t){return a("div",{key:t,staticClass:"draw-number",class:{selected:e.isSelected(t-1+e.game.initialKey)},staticStyle:{width:"12.2%"},on:{click:function(r){return e.selectNumber(t-1+e.game.initialKey)}}},[e._v(e._s(t-1+e.game.initialKey))])})),0)],1)],1):a("b-card",{staticClass:"px-2"},[a("b-card-text",[a("h3",{staticClass:"draw-3 pb-2"},[e._v("Select Number")]),a("b-row",{staticClass:"px-4",attrs:{"align-h":"center"}},e._l(e.game.selection,(function(t,r){return a("div",{key:r,staticStyle:{width:"22%",margin:"3px"}},e._l(e.game.numberOfKeys,(function(r){return a("div",{key:t+"-"+r,staticClass:"draw-number",class:{selected:e.isSelected(r-1+e.game.initialKey,t-1)},staticStyle:{width:"100%"},on:{click:function(a){return e.selectNumber(r-1+e.game.initialKey,t-1)}}},[e._v(e._s(r-1+e.game.initialKey))])})),0)})),0)],1)],1),a("div",{staticClass:"ticket-numbers-check-out mt-3"},[e._l(e.selectedNumbers,(function(t,r){return[-1!=t?a("div",{key:r,staticClass:"draw-number selected",staticStyle:{width:"25px"}},[e._v(e._s(t))]):e._e()]})),e.isFullTicket?a("b-button",{staticClass:"ticket-btn ml-2",on:{click:e.addTicket}},[e._v("Add Ticket")]):e._e()],2)],1),a("b-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("h2",{staticClass:"draw-3 pt-3"},[e._v("Number of tickets selected")]),e._l(e.tickets,(function(t,r){return a("div",{key:r,staticClass:"ticket"},[e._l(t,(function(t){return a("div",{key:t,staticClass:"draw-number selected"},[e._v(e._s(t))])})),a("div",{staticClass:"draw-number selected",on:{click:function(t){return e.removeTicket(r)}}},[e._v("X")])],2)}))],2),a("b-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("b-card",{staticClass:"p-4"},[a("b-card-text",[a("b-row",[a("p",{staticClass:"mr-3"},[e._v("Total Cost:")]),a("p",[e._v("₦"+e._s(e.totalCost))])]),a("b-row",[a("p",{staticClass:"mr-3"},[e._v("Draw Date:")]),a("p",[e._v(e._s((new Date).toDateString()))])]),a("b-row",[a("p",{staticClass:"mr-3"},[e._v("Player:")]),e.isAgent?a("b-form-input",{staticClass:"ml-auto mb-2",staticStyle:{display:"inline",width:"75%"},attrs:{placeholder:"Player Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):a("span",[e._v(e._s(e.user.firstName)+" "+e._s(e.user.lastName))])],1),a("b-row",[a("p",{staticClass:"mr-3"},[e._v("Number:")]),e.isAgent?a("b-form-input",{staticStyle:{display:"inline",width:"73%"},attrs:{placeholder:"Player Phone Number"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}):a("p",[e._v(e._s(e.user.phone))])],1),null!=e.game.types?a("b-dropdown",{staticClass:"my-4",attrs:{variant:"outline-primary",block:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.selectedType.text||"Select a type"))])]},proxy:!0}],null,!1,973478910)},e._l(e.game.types,(function(t,r){return a("b-dropdown-item",{key:r,attrs:{active:e.selectedType.value==t.value},on:{click:function(r){e.selectedType=t}}},[e._v(e._s(t.text))])})),1):e._e(),a("b-row",[a("b-col",[a("b-button",{staticClass:"btn-block quick-play-btn",attrs:{disabled:0==e.tickets.length},on:{click:e.play}},[e._v("Play")])],1),a("b-col",[a("b-button",{staticClass:"btn-block quick-play-btn red",on:{click:function(t){return e.$router.back()}}},[e._v("Cancel")])],1)],1)],1)],1)],1)],1)],1),a("v-footer")],1):e._e()},n=[],i=(r("99af"),r("a623"),r("4de4"),r("c975"),r("a15b"),r("b0c0"),r("4ec9"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("1276"),r("2ca0"),r("ddb0"),r("96cf"),r("1da1")),s=(r("277d1"),r("6b75"));function c(e){if(Array.isArray(e))return Object(s["a"])(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630");function l(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var o=r("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e){return c(e)||l(e)||Object(o["a"])(e)||u()}var d=r("d4ec"),m=r("bee2"),h=r("262e"),f=r("2caf"),y=r("9ab4"),v=r("60a3"),p=r("b0d8"),k=r("4c03"),g=r("4bb5"),_=Object(g["a"])("LotteryModule"),x=Object(g["a"])("AccountsModule"),O=function(e){Object(h["a"])(r,e);var t=Object(f["a"])(r);function r(){var e;return Object(d["a"])(this,r),e=t.call(this),e.selectedType=null,e.selectedNumbers=[],e.tickets=[],e.selectedNumberIndex=0,e.numberOfQuickPlayTickets=null,e.show=!1,e.phone="",e.name="",e.games=new Map,e.games.set("Stacklotto 649",{info:"Select 6 numbers from 1 - 49 or choose quick pick",numberOfKeys:49,initialKey:1,selection:6,types:null}),e.games.set("Stacklotto 425",{info:"Select 4 numbers from 1 - 25 or choose quick pick",numberOfKeys:25,initialKey:1,selection:4,types:null}),e.games.set("Lucky 5",{info:"Select 5 numbers from 1 - 42 or choose quick pick",numberOfKeys:42,initialKey:1,selection:5,types:null}),e.games.set("Match 4",{info:"Select 4 numbers from 0-9 or choose quick pick",numberOfKeys:10,initialKey:0,selection:4,types:[{value:"EO",text:"Exact Order"},{value:"AO",text:"Any Order"},{value:"XO",text:"Exact Order / Any Order"},{value:"2F",text:"2 Front Number Play"},{value:"2B",text:"2 Back Number Play"},{value:"2M",text:"2 Middle Number Play"}]}),e.games.set("Match 3",{info:"Select 3 numbers from 0 - 9 or choose quick pick",numberOfKeys:10,initialKey:0,selection:3,types:[{value:"EO",text:"Exact Order"},{value:"AO",text:"Any Order"},{value:"XO",text:"Exact Order / Any Order"},{value:"2F",text:"2 Front Number Play"},{value:"2B",text:"2 Back Number Play"}]}),e.games.set("Match 2",{info:"Select 2 numbers from 0 - 9 or choose quick pick",numberOfKeys:10,initialKey:0,selection:2,types:[{value:"EO",text:"Exact Order"},{value:"AO",text:"Any Order"},{value:"XO",text:"Exact Order / Any Order"},{value:"F",text:"Front Number Play"},{value:"B",text:"Back Number Play"}]}),e}return Object(m["a"])(r,[{key:"isSelected",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return-1==t?-1!=this.selectedNumbers.indexOf(e):this.selectedNumbers[t]==e}},{key:"selectNumber",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(this.isSelected(e,t))-1==t&&(this.selectedNumbers=this.selectedNumbers.filter((function(t){return t!=e})),this.selectedNumbers.push(-1),this.selectedNumberIndex--);else{var r=b(this.selectedNumbers);if(-1==t){if(this.isFullTicket)return;r[this.selectedNumberIndex]=e,this.selectedNumberIndex++}else r[t]=e;this.selectedNumbers=r}}},{key:"addTicket",value:function(){this.tickets.push(this.selectedNumbers),this.selectedNumbers=[],this.selectedNumberIndex=0;for(var e=0;e<this.game.selection;e++)this.selectedNumbers.push(-1)}},{key:"removeTicket",value:function(e){this.tickets=this.tickets.filter((function(t,r){return r!=e}))}},{key:"randomizeTickets",value:function(){if(this.numberOfQuickPlayTickets>0){this.tickets=[];for(var e=0;e<this.numberOfQuickPlayTickets;e++){for(var t=[],r=0;r<this.game.selection;r++){var a=Math.round(Math.random()*(this.game.numberOfKeys-this.game.initialKey));if(this.lottery.name.startsWith("Match"))while(-1!=t.indexOf(a))a=Math.round(Math.random()*(this.game.numberOfKeys-this.game.initialKey));t.push(a)}this.tickets.push(t)}}}},{key:"play",value:function(){this.phone.length>0&&this.name.length>0&&(this.setTickets({value:this.tickets,type:this.selectedType,phone:this.phone,name:this.name}),this.$router.push("/checkout"))}},{key:"mounted",value:function(){null==this.lottery&&this.$router.replace("/lotteries");for(var e=0;e<this.game.selection;e++)this.selectedNumbers.push(-1);this.isAgent||(this.phone=this.user.phone,this.name="".concat(this.user.firstName," ").concat(this.user.lastName))}},{key:"game",get:function(){return this.games.get(this.lottery.name)}},{key:"image",get:function(){return this.lottery.name.split("").filter((function(e){return" "!=e})).join("").toLowerCase()}},{key:"isFullTicket",get:function(){return this.selectedNumbers.every((function(e){return-1!=e}))}},{key:"totalCost",get:function(){return this.lottery.cost*this.tickets.length}},{key:"isAgent",get:function(){return"Confirmed"==this.user.status}}]),r}(v["c"]);Object(y["a"])([_.State],O.prototype,"lottery",void 0),Object(y["a"])([_.Mutation],O.prototype,"setTickets",void 0),Object(y["a"])([x.State],O.prototype,"user",void 0),Object(y["a"])([x.Action],O.prototype,"ping",void 0),O=Object(y["a"])([Object(v["a"])({components:{VToolbar:p["a"],VFooter:k["a"]},beforeRouteEnter:function(e,t,r){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.ping();case 2:if(!t.sent){t.next=6;break}r.show=!0,t.next=7;break;case 6:r.$router.replace("/sign-in?e=Not Signed In&t=".concat(e.path));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()}})],O);var w=O,S=w,N=(r("ef19"),r("2877")),C=Object(N["a"])(S,a,n,!1,null,"21587094",null);t["default"]=C.exports},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("7b0b"),s=r("50c4"),c=r("a691"),l=r("1d80"),o=r("8aa5"),u=r("14c3"),b=Math.max,d=Math.min,m=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g,y=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=a.REPLACE_KEEPS_$0,k=v?"$":"$0";return[function(r,a){var n=l(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!v&&p||"string"===typeof a&&-1===a.indexOf(k)){var i=r(t,e,this,a);if(i.done)return i.value}var l=n(e),m=String(this),h="function"===typeof a;h||(a=String(a));var f=l.global;if(f){var _=l.unicode;l.lastIndex=0}var x=[];while(1){var O=u(l,m);if(null===O)break;if(x.push(O),!f)break;var w=String(O[0]);""===w&&(l.lastIndex=o(m,s(l.lastIndex),_))}for(var S="",N=0,C=0;C<x.length;C++){O=x[C];for(var T=String(O[0]),A=b(d(c(O.index),m.length),0),E=[],K=1;K<O.length;K++)E.push(y(O[K]));var P=O.groups;if(h){var j=[T].concat(E,A,m);void 0!==P&&j.push(P);var M=String(a.apply(void 0,j))}else M=g(T,m,A,E,P,a);A>=N&&(S+=m.slice(N,A)+M,N=A+T.length)}return S+m.slice(N)}];function g(e,r,a,n,s,c){var l=a+e.length,o=n.length,u=f;return void 0!==s&&(s=i(s),u=h),t.call(c,u,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(l);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>o){var b=m(u/10);return 0===b?t:b<=o?void 0===n[b-1]?i.charAt(1):n[b-1]+i.charAt(1):t}c=n[u-1]}return void 0===c?"":c}))}}))},"5a34":function(e,t,r){var a=r("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},6898:function(e,t,r){},a623:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").every,i=r("a640"),s=r("ae40"),c=i("every"),l=s("every");a({target:"Array",proto:!0,forced:!c||!l},{every:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},ab13:function(e,t,r){var a=r("b622"),n=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(a){}}return!1}},ef19:function(e,t,r){"use strict";var a=r("6898"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-6e2cb404.20f578c2.js.map