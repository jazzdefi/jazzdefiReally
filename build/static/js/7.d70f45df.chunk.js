(this["webpackJsonpmozartfinance-frontend"]=this["webpackJsonpmozartfinance-frontend"]||[]).push([[7],{1105:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,s,u,l,b,d,j,p,f,x,O,h,m,g,v=n(0),y=n(48),w=n(255),S=n(17),k=n(8),A=n(67),C=n(11),E=n(3),I=k.e.div(c||(c=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))),B=function(){var e=Object(y.i)(),t=e.url,n=e.isExact;return Object(E.jsx)(I,{children:Object(E.jsxs)(C.l,{activeIndex:n?0:1,scale:"sm",variant:"subtle",children:[Object(E.jsx)(C.m,{as:A.a,to:"".concat(t),children:"Next IFO"}),Object(E.jsx)(C.m,{as:A.a,to:"".concat(t,"/history"),children:"Past IFOs"})]})})},T=n(45),F=Object(k.e)(C.F).attrs({as:"h1",size:"xl"})(r||(r=Object(S.a)(["\n  color: ",";\n  margin-bottom: 24px;\n"])),(function(e){return e.theme.colors.secondary})),D=Object(k.e)(C.cb)(a||(a=Object(S.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]))),P=k.e.div(i||(i=Object(S.a)(["\n  background-image: linear-gradient(180deg, #53dee9 0%, #b4b6b8 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]))),z=function(){var e=Object(T.a)();return Object(E.jsx)(P,{children:Object(E.jsxs)(w.a,{children:[Object(E.jsx)(F,{children:e(500,"IFO: Initial Farm Offerings")}),Object(E.jsx)(D,{children:e(502,"Buy new tokens with a brand new token sale model.")})]})})},L=n(251),R=n(27),N=n(2),U=n.n(N),_=n(12),q=n(23),M=n(13),K=n.n(M),Q=n(116),W=n(46),G=n(49),J=n(156),V=function(e,t,n){return 0===e?"idle":e<t?"coming_soon":e>=t&&e<=n?"live":e>n?"finished":"idle"},H=function(e){var t=e.address,n=e.releaseBlockNumber,c=Object(v.useState)({status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,raisingAmount:new K.a(0),totalAmount:new K.a(0),startBlockNum:0,endBlockNum:0}),r=Object(q.a)(c,2),a=r[0],i=r[1],o=Object(W.b)().currentBlock,s=Object(G.f)(t);return Object(v.useEffect)((function(){(function(){var e=Object(_.a)(U.a.mark((function e(){var t,c,r,a,u,l,b,d,j,p,f,x;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([s.methods.startBlock().call,s.methods.endBlock().call,s.methods.raisingAmount().call,s.methods.totalAmount().call]);case 2:t=e.sent,c=Object(q.a)(t,4),r=c[0],a=c[1],u=c[2],l=c[3],b=parseInt(r,10),d=parseInt(a,10),j=V(o,b,d),p=d-b,x=o>b?(o-b)/p*100:(o-n)/(b-n)*100,i({secondsUntilEnd:(f=d-o)*Q.d,secondsUntilStart:(b-o)*Q.d,raisingAmount:new K.a(u),totalAmount:new K.a(l),status:j,progress:x,blocksRemaining:f,startBlockNum:b,endBlockNum:d});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,o,s,n,i]),a},Y=n(249),Z=Object(k.e)(C.E)(o||(o=Object(S.a)(["\n  & > div {\n    flex: 1;\n  }\n"]))),X=Object(k.e)(C.F).attrs({as:"h3",size:"lg"})(s||(s=Object(S.a)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]))),$=Object(k.e)(C.cb)(u||(u=Object(S.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(e){return e.theme.colors.textSubtle})),ee=function(e){var t=e.ifoId,n=e.name,c=e.subTitle;return Object(E.jsxs)(Z,{mb:"24px",alignItems:"center",children:[Object(E.jsx)("img",{src:"/images/ifos/".concat(t,".svg"),alt:t,width:"64px",height:"64px"}),Object(E.jsxs)("div",{children:[Object(E.jsx)(X,{children:n}),Object(E.jsx)($,{children:c})]})]})},te=k.e.div(l||(l=Object(S.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"])),(function(e){return e.theme.colors.secondary})),ne=Object(k.e)(C.cb)(b||(b=Object(S.a)(["\n  flex: 1;\n"]))),ce=function(e){var t=e.ifo,n=e.publicIfoData,c=Object(v.useState)(!1),r=Object(q.a)(c,2),a=r[0],i=r[1],o=Object(T.a)(),s=t.description,u=t.cakeToBurn,l=t.projectSiteUrl,b=t.launchDate,d=t.launchTime,j=t.saleAmount,p=t.raiseAmount,f=n.raisingAmount,x=n.totalAmount;return Object(E.jsxs)(C.q,{children:[Object(E.jsx)(C.k,{variant:"text",onClick:function(){return i(!a)},width:"100%",endIcon:a?Object(E.jsx)(C.A,{color:"primary",width:"24px"}):Object(E.jsx)(C.x,{color:"primary",width:"24px"}),children:a?o(1066,"Hide"):o(658,"Details")}),a&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(C.cb,{as:"p",color:"textSubtle",my:"24px",children:s}),Object(E.jsxs)(C.h,{mb:"24px",children:[Object(E.jsxs)(te,{children:[Object(E.jsx)(ne,{children:o(582,"Launch Time")}),Object(E.jsxs)(C.cb,{children:[b,",",Object(E.jsx)(C.K,{href:"https://www.timeanddate.com/worldclock/singapore/singapore",target:"blank",rel:"noopener noreferrer",ml:"4px",style:{display:"inline"},children:d})]})]}),Object(E.jsxs)(te,{children:[Object(E.jsx)(ne,{children:o(584,"For Sale")}),Object(E.jsx)(C.cb,{children:j})]}),Object(E.jsxs)(te,{children:[Object(E.jsx)(ne,{children:o(999,"To raise (USD)")}),Object(E.jsx)(C.cb,{children:p})]}),Object(E.jsxs)(te,{children:[Object(E.jsx)(ne,{children:o(586,"JAZZ to burn (USD)")}),Object(E.jsx)(C.cb,{children:u})]}),Object(E.jsxs)(te,{children:[Object(E.jsx)(ne,{children:o(999,"Total raised (% of target)")}),Object(E.jsx)(C.cb,{children:"".concat(x.div(f).times(100).toFixed(2),"%")})]})]}),Object(E.jsx)(C.L,{href:l,style:{margin:"auto"},children:o(412,"View project site")})]})]})},re=n(15),ae=n(880),ie=function(e){var t=Object(v.useState)({isPendingTx:!1,offeringTokenBalance:new K.a(0),refundingAmount:new K.a(0),userInfo:{amount:new K.a(0),claimed:!1}}),n=Object(q.a)(t,2),c=n[0],r=n[1],a=e.address,i=e.currencyAddress,o=c.isPendingTx,s=Object(R.c)().account,u=Object(G.f)(a),l=Object(G.e)(i),b=Object(ae.a)(l,a,o);return Object(v.useEffect)((function(){s&&function(){var e=Object(_.a)(U.a.mark((function e(){var t,n,c,a,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([u.methods.getOfferingAmount(s).call,u.methods.userInfo(s).call,u.methods.getRefundingAmount(s).call]);case 2:t=e.sent,n=Object(q.a)(t,3),c=n[0],a=n[1],i=n[2],r((function(e){return Object(re.a)(Object(re.a)({},e),{},{offeringTokenBalance:new K.a(c),refundingAmount:new K.a(i),userInfo:{amount:new K.a(a.amount),claimed:a.claimed}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,u,r]),Object(re.a)(Object(re.a)({},c),{},{allowance:b,contract:u,setPendingTx:function(e){return r((function(t){return Object(re.a)(Object(re.a)({},t),{},{isPendingTx:e})}))},addUserContributedAmount:function(e){r((function(t){return Object(re.a)(Object(re.a)({},t),{},{userInfo:Object(re.a)(Object(re.a)({},t.userInfo),{},{amount:t.userInfo.amount.plus(e)})})}))},setIsClaimed:function(){r((function(e){return Object(re.a)(Object(re.a)({},e),{},{userInfo:Object(re.a)(Object(re.a)({},e.userInfo),{},{claimed:!0})})}))}})},oe=n(62),se=n(178),ue=n(858),le=Object(k.e)(C.h)(d||(d=Object(S.a)(["\n  background: ",";\n  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2) inset;\n  border-radius: ",";\n  padding: 8px 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default})),be=Object(k.e)(C.J)(j||(j=Object(S.a)(["\n  box-shadow: none;\n  flex: 1;\n"]))),de=Object(k.e)(C.cb)(p||(p=Object(S.a)(["\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n"]))),je=function(e){var t=e.title,n=e.max,c=e.symbol,r=e.onChange,a=e.onSelectMax,i=e.value,o=Object(ue.a)(e,["title","max","symbol","onChange","onSelectMax","value"]),s=Object(T.a)(),u=n.toFixed(6);return Object(E.jsxs)(le,Object(re.a)(Object(re.a)({},o),{},{children:[Object(E.jsxs)(C.E,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[Object(E.jsx)(C.cb,{fontSize:"14px",children:t}),Object(E.jsx)(C.cb,{fontSize:"14px",children:s(999,"Balance: ".concat(u),{num:u})})]}),Object(E.jsxs)(C.E,{alignItems:"center",children:[Object(E.jsx)(be,{onChange:r,placeholder:"0",value:i}),a&&Object(E.jsx)(C.k,{scale:"sm",onClick:a,mr:"8px",children:s(452,"Max")}),Object(E.jsx)(de,{title:c,children:c})]})]}))},pe=n(860),fe=n(868),xe=n(869),Oe=function(e){var t=e.currency,n=e.contract,c=e.currencyAddress,r=e.onDismiss,a=e.onSuccess,i=Object(v.useState)(""),o=Object(q.a)(i,2),s=o[0],u=o[1],l=Object(R.c)().account,b=Object(G.e)(c),d=Object(oe.a)(Object(pe.a)(c)),j=Object(T.a)(),p=new K.a(s).times(new K.a(10).pow(18)),f=Object(xe.a)({onRequiresApproval:function(){var e=Object(_.a)(U.a.mark((function e(){var t,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.methods.allowance(l,n.options.address).call();case 3:return t=e.sent,c=new K.a(t),e.abrupt("return",c.gt(0));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return b.methods.approve(n.options.address,se.a.constants.MaxUint256).send({from:l})},onConfirm:function(){return n.methods.deposit(p.toString()).send({from:l})},onSuccess:function(){var e=Object(_.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(),a(p);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),x=f.isApproving,O=f.isApproved,h=f.isConfirmed,m=f.isConfirming,g=f.handleApprove,y=f.handleConfirm;return Object(E.jsx)(C.R,{title:"Contribute ".concat(t),onDismiss:r,children:Object(E.jsxs)(C.h,{maxWidth:"400px",children:[Object(E.jsx)(je,{title:j(999,"Contribute"),value:s,onChange:function(e){return u(e.currentTarget.value)},symbol:t,max:d,onSelectMax:function(){return u(d.toString())},mb:"24px"}),Object(E.jsx)(C.cb,{as:"p",mb:"24px",children:j(999,"If you don't contribute enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.")}),Object(E.jsx)(fe.a,{isApproveDisabled:h||m||O,isApproving:x,isConfirmDisabled:!O||h||p.isNaN()||p.eq(0),isConfirming:m,onApprove:g,onConfirm:y}),Object(E.jsx)(C.L,{href:"https://exchange.pancakeswap.finance/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",style:{margin:"16px auto 0"},children:"Get ".concat(t)})]})})},he=function(e){var t=e.userAmount,n=e.totalAmount,c=Object(T.a)(),r=t.div(n).times(100).toNumber().toLocaleString(void 0,{maximumFractionDigits:5});return Object(E.jsx)(C.cb,{fontSize:"14px",color:"textSubtle",children:c(999,"".concat(r,"% of total"),{num:r})})},me=function(e){var t=e.ifo,n=e.contract,c=e.userInfo,r=e.isPendingTx,a=e.publicIfoData,i=e.addUserContributedAmount,o=t.currency,s=t.currencyAddress,u=a.totalAmount,l=Object(T.a)(),b=Object(oe.a)(c.amount),d=Object(W.q)().toastSuccess,j=Object(C.qb)(Object(E.jsx)(Oe,{currency:o,contract:n,currencyAddress:s,onSuccess:function(e){d("Success!","You have contributed ".concat(Object(oe.a)(e)," CAKE-BNB LP tokens to this IFO!")),i(e)}}),!1),p=Object(q.a)(j,1)[0];return Object(E.jsxs)(C.h,{children:[Object(E.jsxs)(C.E,{mb:"4px",children:[Object(E.jsx)(C.cb,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:"CAKE-BNB LP"}),Object(E.jsx)(C.cb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Committed"})]}),Object(E.jsxs)(C.E,{alignItems:"center",children:[Object(E.jsx)(C.h,{style:{flex:1},pr:"8px",children:Object(E.jsx)(C.cb,{bold:!0,fontSize:"20px",children:b.toFixed(4)})}),Object(E.jsx)(C.k,{onClick:p,disabled:r,children:l(999,"Contribute")})]}),Object(E.jsx)(he,{userAmount:c.amount,totalAmount:u})]})},ge=function(e){var t=e.children,n=Object(ue.a)(e,["children"]);return Object(E.jsx)(C.h,Object(re.a)(Object(re.a)({minHeight:"18px"},n),{},{children:Object(E.jsx)(C.cb,{color:"textSubtle",fontSize:"12px",children:t})}))},ve=function(e){var t=e.token,n=e.balance,c=Object(W.j)(t),r=!!c&&n>0,a=c*n;return Object(E.jsx)(ge,{children:r&&"~$".concat(a.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})},ye=k.e.div(f||(f=Object(S.a)(["\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: repeat(2, 1fr);\n  margin-bottom: 24px;\n"]))),we=function(e){var t=e.ifo,n=e.contract,c=e.userInfo,r=e.isPendingTx,a=e.setPendingTx,i=e.offeringTokenBalance,o=e.refundingAmount,s=e.setIsClaimed,u=Object(T.a)(),l=Object(R.c)().account,b=c.amount.gt(0),d=!c.claimed,j=Object(oe.a)(c.amount),p=Object(oe.a)(o).toFixed(c.amount.eq(0)?0:4),f=t.tokenSymbol,x=t.tokenDecimals,O=Object(oe.a)(i,x),h=Object(W.q)(),m=h.toastError,g=h.toastSuccess,v=function(){var e=Object(_.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,n.methods.harvest().send({from:l});case 4:s(),g("Success!","You have successfully claimed your rewards."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),m("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 12:return e.prev=12,a(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(ye,{children:[Object(E.jsxs)(C.h,{children:[Object(E.jsxs)(C.E,{mb:"4px",children:[Object(E.jsx)(C.cb,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:"LP Tokens"}),Object(E.jsx)(C.cb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Committed"})]}),Object(E.jsx)(C.cb,{fontSize:"20px",bold:!0,color:i.gt(0)?"text":"textDisabled",children:j.toFixed(c.amount.eq(0)?0:4)}),Object(E.jsx)(ge,{children:u(999,"".concat(p,d?" to reclaim":" reclaimed"),{num:p})})]}),Object(E.jsxs)(C.h,{children:[Object(E.jsxs)(C.E,{mb:"4px",children:[Object(E.jsx)(C.cb,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:f}),d?Object(E.jsx)(C.cb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"To Claim"}):Object(E.jsx)(C.cb,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Claimed"})]}),Object(E.jsx)(C.cb,{fontSize:"20px",bold:!0,color:i.gt(0)?"text":"textDisabled",children:O.toFixed(i.eq(0)?0:4)}),d&&Object(E.jsx)(ve,{token:f,balance:O})]})]}),b?Object(E.jsx)(C.k,{onClick:v,disabled:r||!d,width:"100%",mb:"24px",isLoading:r,endIcon:r?Object(E.jsx)(C.d,{spin:!0,color:"currentColor"}):null,children:u(999,d?"Claim":"Claimed")}):Object(E.jsx)(C.k,{disabled:!0,width:"100%",mb:"24px",children:u(999,"Nothing to Claim")}),Object(E.jsx)(C.cb,{mt:"4px",children:u(999,"You'll be refunded any excess tokens when you claim")})]})},Se=function(){return Object(E.jsxs)(C.h,{children:[Object(E.jsx)(C.ab,{height:"18px",mb:"4px",width:"30%"}),Object(E.jsx)(C.ab,{height:"48px",mb:"2px"}),Object(E.jsx)(C.ab,{height:"19px",width:"15%"})]})},ke=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(C.E,{mb:"24px",children:[Object(E.jsxs)(C.h,{width:"50%",height:"52px",children:[Object(E.jsx)(C.ab,{height:"18px",mb:"4px",width:"70%"}),Object(E.jsx)(C.ab,{height:"30px",width:"20%"})]}),Object(E.jsxs)(C.h,{width:"50%",height:"52px",children:[Object(E.jsx)(C.ab,{height:"18px",mb:"4px",width:"70%"}),Object(E.jsx)(C.ab,{height:"30px",width:"20%"})]})]}),Object(E.jsx)(C.ab,{height:"48px",mb:"24px"}),Object(E.jsx)(C.ab,{height:"48px",mt:"4px"})]})},Ae=function(e){var t=e.ifo,n=e.publicIfoData,c=ie(t),r=c.isPendingTx,a=c.offeringTokenBalance,i=c.refundingAmount,o=c.userInfo,s=c.contract,u=c.setPendingTx,l=c.addUserContributedAmount,b=c.setIsClaimed;return Object(R.c)().account?Object(E.jsxs)(E.Fragment,{children:[t.isActive&&"idle"===n.status&&Object(E.jsx)(Se,{}),!t.isActive&&"idle"===n.status&&Object(E.jsx)(ke,{}),"live"===n.status&&Object(E.jsx)(me,{ifo:t,contract:s,userInfo:o,isPendingTx:r,publicIfoData:n,addUserContributedAmount:l}),"finished"===n.status&&Object(E.jsx)(we,{ifo:t,contract:s,userInfo:o,isPendingTx:r,setPendingTx:u,offeringTokenBalance:a,refundingAmount:i,setIsClaimed:b})]}):Object(E.jsx)(Y.a,{})},Ce=function(e){var t=e.progress;return Object(E.jsx)(C.h,{mb:"16px",children:Object(E.jsx)(C.X,{primaryStep:t})})},Ee=n(879),Ie=k.e.div(x||(x=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),Be=k.e.div(O||(O=Object(S.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])),(function(e){return e.theme.colors.secondary})),Te=function(e){var t=e.status,n=e.secondsUntilStart,c=e.secondsUntilEnd,r=e.block,a=Object(T.a)(),i="coming_soon"===t?n:c,o=Object(Ee.a)(i),s="coming_soon"===t?"start":"finish";return"idle"===t?Object(E.jsx)(C.E,{alignItems:"center",justifyContent:"center",mb:"24px",height:"24px",children:a(656,"Loading...")}):Object(E.jsxs)(Ie,{children:[Object(E.jsx)(Be,{children:"".concat(o.days,"d, ").concat(o.hours,"h, ").concat(o.minutes,"m until ").concat(s)}),Object(E.jsx)(C.K,{href:"https://bscscan.com/block/countdown/".concat(r),target:"blank",rel:"noopener noreferrer",ml:"8px",children:"(blocks)"})]})},Fe=Object(k.e)(C.o)(h||(h=Object(S.a)(["\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"])),(function(e){var t=e.ifoId;return"url('/images/ifos/".concat(t,"-bg.svg')")})),De=function(e){var t=e.ifo,n=t.id,c=t.name,r=t.subTitle,a=H(t),i=Object(R.c)().account,o=Object(T.a)(),s=function(e,t){return"coming_soon"===e?Object(E.jsx)(C.s,{variantColor:"textDisabled",text:t(999,"Coming Soon")}):"live"===e?Object(E.jsx)(C.s,{variantColor:"primary",text:t(999,"LIVE NOW!")}):null}(a.status,o);return Object(E.jsxs)(Fe,{ifoId:n,ribbon:s,isActive:"live"===a.status,children:[Object(E.jsxs)(C.p,{children:[Object(E.jsx)(ee,{ifoId:n,name:c,subTitle:r}),"finished"!==a.status&&t.isActive&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Ce,{progress:a.progress}),Object(E.jsx)(Te,{status:a.status,secondsUntilStart:a.secondsUntilStart,secondsUntilEnd:a.secondsUntilEnd,block:a.startBlockNum})]}),i?Object(E.jsx)(Ae,{ifo:t,publicIfoData:a}):Object(E.jsx)(Y.a,{width:"100%"})]}),Object(E.jsx)(ce,{ifo:t,publicIfoData:a})]})},Pe=Object(k.e)(C.F).attrs({size:"lg"})(m||(m=Object(S.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.secondary})),ze=k.e.div(g||(g=Object(S.a)(["\n  align-items: start;\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    grid-template-columns: ",";\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.md}),(function(e){var t=e.isSingle;return"repeat(".concat(t?1:2,", 1fr)")}));ze.defaultProps={isSingle:!1};var Le,Re,Ne=ze,Ue=Object(k.e)(C.e)(Le||(Le=Object(S.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.sm})),_e=k.e.ul(Re||(Re=Object(S.a)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),qe=L.c.find((function(e){return e.isActive})),Me=function(){var e=Object(T.a)();return Object(E.jsxs)("div",{children:[Object(E.jsx)(Ne,{isSingle:!0,children:Object(E.jsx)(De,{ifo:qe})}),Object(E.jsxs)(Ue,{children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(Pe,{as:"h2",children:e(592,"How to take part")}),Object(E.jsxs)(C.F,{mb:"16px",children:[e(594,"Before Sale"),":"]}),Object(E.jsxs)(_e,{children:[Object(E.jsx)("li",{children:e(596,"Buy CAKE and BNB tokens")}),Object(E.jsx)("li",{children:e(598,"Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity")})]}),Object(E.jsxs)(C.E,{mb:"16px",children:[Object(E.jsx)(C.L,{href:"https://exchange.pancakeswap.finance/#/swap",mr:"16px",children:e(1060,"Buy CAKE")}),Object(E.jsx)(C.L,{href:"https://exchange.pancakeswap.finance/#/add/BNB/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",children:e(1062,"Get LP tokens")})]}),Object(E.jsxs)(C.F,{mb:"16px",children:[e(600,"During Sale"),":"]}),Object(E.jsx)(_e,{children:Object(E.jsx)("li",{children:e(602,"While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens")})}),Object(E.jsxs)(C.F,{mb:"16px",children:[e(604,"After Sale"),":"]}),Object(E.jsxs)(_e,{children:[Object(E.jsx)("li",{children:e(606,"Claim the tokens you bought, along with any unspent funds.")}),Object(E.jsx)("li",{children:e(608,"Done!")})]}),Object(E.jsx)(C.cb,{as:"div",pt:"16px",children:Object(E.jsx)(C.k,{as:"a",variant:"secondary",href:"https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering",children:e(610,"Read more")})})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)(C.I,{src:"/images/ifo-bunny.svg",alt:"ifo bunny",width:436,height:406,responsive:!0}),Object(E.jsxs)("div",{children:[Object(E.jsx)(Pe,{as:"h2",children:e(512,"Want to launch your own IFO?")}),Object(E.jsx)(C.cb,{mb:3,children:e(514,"Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.")}),Object(E.jsx)(C.k,{as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform",external:!0,children:e(516,"Apply to launch")})]})]})]})]})},Ke=L.c.filter((function(e){return!e.isActive})),Qe=function(){return Object(E.jsx)(Ne,{children:Ke.map((function(e){return Object(E.jsx)(De,{ifo:e},e.id)}))})};t.default=function(){var e=Object(y.i)().path;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(z,{}),Object(E.jsxs)(w.a,{children:[Object(E.jsx)(B,{}),Object(E.jsx)(y.b,{exact:!0,path:"".concat(e),children:Object(E.jsx)(Me,{})}),Object(E.jsx)(y.b,{path:"".concat(e,"/history"),children:Object(E.jsx)(Qe,{})})]})]})}},858:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return c}))},860:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return f}));var c=n(2),r=n.n(c),a=n(12),i=n(23),o=n(0),s=n(13),u=n.n(s),l=n(27),b=n(43),d=n(63),j=n(154),p=function(){var e=Object(j.a)().slowRefresh,t=Object(o.useState)(),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,s(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},f=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(j.a)().slowRefresh,p=Object(d.a)();return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,p),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=t.sent,s(new u.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[p,e,l]),c};t.a=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],p=Object(l.c)().account,f=Object(d.a)(),x=Object(j.a)().fastRefresh;return Object(o.useEffect)((function(){p&&function(){var t=Object(a.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,f),t.next=3,n.methods.balanceOf(p).call();case 3:c=t.sent,s(new u.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[p,e,f,x]),c}},868:function(e,t,n){"use strict";var c,r,a,i,o=n(17),s=(n(0),n(8)),u=n(11),l=n(45),b=n(3),d=s.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),j=Object(s.e)(u.k)(r||(r=Object(o.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),p={width:"24px",color:"textDisabled"},f=Object(s.e)(u.z).attrs(p)(a||(a=Object(o.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),x=Object(s.e)(u.x).attrs(p)(i||(i=Object(o.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),O=Object(b.jsx)(u.d,{spin:!0,color:"currentColor"});t.a=function(e){var t=e.isApproveDisabled,n=e.isApproving,c=e.isConfirming,r=e.isConfirmDisabled,a=e.onApprove,i=e.onConfirm,o=Object(l.a)();return Object(b.jsxs)(d,{children:[Object(b.jsx)(u.h,{children:Object(b.jsx)(j,{disabled:t,onClick:a,endIcon:n?O:void 0,isLoading:n,children:n?o(800,"Approving"):o(564,"Approve")})}),Object(b.jsxs)(u.E,{justifyContent:"center",children:[Object(b.jsx)(f,{}),Object(b.jsx)(x,{})]}),Object(b.jsx)(u.h,{children:Object(b.jsx)(j,{onClick:i,disabled:r,isLoading:c,endIcon:c?O:void 0,children:c?o(802,"Confirming"):o(464,"Confirm")})})]})}},869:function(e,t,n){"use strict";var c=n(23),r=n(15),a=n(0),i=n(80),o=n(27),s=n(46),u={approvalState:"idle",approvalReceipt:null,approvalError:null,confirmState:"idle",confirmReceipt:null,confirmError:null},l=function(e,t){switch(t.type){case"requires_approval":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"success",approvalReceipt:t.payload});case"approve_error":return Object(r.a)(Object(r.a)({},e),{},{approvalState:"fail",approvalError:t.payload});case"confirm_sending":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"success",confirmReceipt:t.payload});case"confirm_error":return Object(r.a)(Object(r.a)({},e),{},{confirmState:"fail",confirmError:t.payload});default:return e}};t.a=function(e){var t=e.onApprove,n=e.onConfirm,r=e.onRequiresApproval,b=e.onSuccess,d=void 0===b?i.noop:b,j=Object(o.c)().account,p=Object(a.useReducer)(l,u),f=Object(c.a)(p,2),x=f[0],O=f[1],h=Object(a.useRef)(r),m=Object(s.q)().toastError;return Object(a.useEffect)((function(){j&&h.current&&h.current().then((function(e){e&&O({type:"requires_approval"})}))}),[j,h,O]),{isApproving:"loading"===x.approvalState,isApproved:"success"===x.approvalState,isConfirming:"loading"===x.confirmState,isConfirmed:"success"===x.confirmState,approvalReceipt:x.approvalReceipt,approvalError:x.approvalError,confirmReceipt:x.confirmReceipt,confirmError:x.confirmError,handleApprove:function(){t().on("sending",(function(){O({type:"approve_sending"})})).on("receipt",(function(e){O({type:"approve_receipt",payload:e})})).on("error",(function(e){O({type:"approve_error",payload:e}),console.error("An error occurred approving transaction:",e),m("An error occurred approving transaction")}))},handleConfirm:function(){n().on("sending",(function(){O({type:"confirm_sending"})})).on("receipt",(function(e){O({type:"confirm_receipt",payload:e}),d(x)})).on("error",(function(e){O({type:"confirm_error",payload:e}),console.error("An error occurred confirming transaction:",e),m("An error occurred confirming transaction")}))}}}},879:function(e,t,n){"use strict";var c=3600,r=86400,a=2629800,i=31557600;t.a=function(e){var t=e,n={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=i&&(n.years=Math.floor(t/i),t-=n.years*i),t>=a&&(n.months=Math.floor(t/a),t-=n.months*a),t>=r&&(n.days=Math.floor(t/r),t-=n.days*r),t>=c&&(n.hours=Math.floor(t/c),t-=n.hours*c),t>=60&&(n.minutes=Math.floor(t/60),t-=60*n.minutes),n.seconds=t,n}},880:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f}));var c=n(2),r=n.n(c),a=n(12),i=n(23),o=n(0),s=n(13),u=n.n(s),l=n(27),b=n(20),d=n(49),j=n(154),p=function(){var e=Object(o.useState)(new u.a(0)),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(l.c)().account,p=Object(d.c)(),f=Object(j.a)().fastRefresh;return Object(o.useEffect)((function(){s&&function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.methods.allowance(s,Object(b.f)()).call();case 2:t=e.sent,c(new u.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,p,f]),n},f=function(e,t,n){var c=Object(l.c)().account,s=Object(o.useState)(new u.a(0)),b=Object(i.a)(s,2),d=b[0],j=b[1];return Object(o.useEffect)((function(){(function(){var n=Object(a.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.methods.allowance(c,t).call();case 3:a=n.sent,j(new u.a(a)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}})()()}),[c,t,e,n]),d}}}]);
//# sourceMappingURL=7.d70f45df.chunk.js.map