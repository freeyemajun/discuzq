_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"+FtA":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my/index",function(){return n("Ey3/")}])},"/Nde":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return h}));var r=n("lSNA"),a=n.n(r),i=(n("o0o1"),n("ls82"),n("yXPU"),n("+3IH")),o=n("dJ22");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={Code:"common_0001",Message:"\u9700\u8981\u8865\u5145\u6635\u79f0"},l={Code:"common_0002",Message:"\u9700\u8981\u8865\u5145\u9644\u52a0\u4fe1\u606f"},p={Code:"common_0003",Message:"\u9700\u8981\u8865\u5145\u6635\u79f0\u548c\u9644\u52a0\u4fe1\u606f"},d=-4009,f=2,b=-4007,h=function(e){var t=e.webConfig.setSite;return"1"===(t=void 0===t?{}:t).openExtFields},g=function(e){if(function(e){var t=Object(i.a)(e,"data.isMissNickname",!1),n=10===Object(i.a)(e,"data.userStatus"),r=Object(i.a)(e,"data.accessToken","");if(-8e3!==e.code){var a=Object(i.a)(e,"data.uid","");if(Object(o.a)({accessToken:r}),n&&t)throw c({uid:a},p);if(t)throw c({uid:a},u);if(n)throw c({uid:a},l)}}(e),0===e.code||e.code===d||e.code===b){var t=e.code,n=Object(i.a)(e,"data.userStatus",0),r=Object(i.a)(e,"data.uid","");if(0===t&&n===f){var a=Object(i.a)(e,"data.accessToken","");Object(o.a)({accessToken:a}),t=n}if(t)throw{Code:t,Message:Object(i.a)(e,"data.rejectReason","")||Object(i.a)(e,"data.banReason",""),uid:r}}}},ALHM:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("ma9I"),n("4mDm"),n("07d7"),n("5s+n"),n("PKPk"),n("3bBZ");var r=n("o0o1"),a=n.n(r),i=n("RIqP"),o=n.n(i),s=n("lSNA"),c=n.n(s),u=(n("ls82"),n("yXPU")),l=n.n(u),p=n("rGXy"),d=n("lY1M");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=["closeWindow","chooseImage","uploadImage","getLocalImgData","updateAppMessageShareData","updateTimelineShareData","getNetworkType"],g=!1;function v(){return m.apply(this,arguments)}function m(){return(m=l()(a.a.mark((function e(){var t,n,r,i,s,c,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]&&u[0],n=u.length>1&&void 0!==u[1]?u[1]:[],d.b.env("weixin")){e.next=4;break}return e.abrupt("return");case 4:return r=[],window.wx&&wx.config||(i=new Promise((function(e){var t=document.createElement("script");t.src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js",t.onload=function(){return e()},document.body.appendChild(t)})),r.push(i)),e.next=8,Promise.all(r);case 8:if(t&&!g){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Object(p.getWXConfig)({params:{url:encodeURIComponent(window.location.href)}});case 12:if(0!==(s=e.sent).code||!s.data||!s.data.appId){e.next=21;break}return a=s.data,c={appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature},wx&&wx.config(b(b({debug:!1},c),{},{jsApiList:[].concat(h,o()(n))})),wx&&(wx.hasDoneConfig=!0),g=!0,e.abrupt("return",!0);case 21:console.error("\u521d\u59cb\u5316\u5fae\u4fe1jssdk\u5931\u8d25\uff01",s);case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}var a}),e)})))).apply(this,arguments)}},E2vk:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("ma9I");var r=n("lN2P"),a=n("KBHl"),i="/thread/post",o="/indexPages/thread/post/index";function s(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e.isLogin())return r.a.saveAndLogin(),!1;if(!t.publishNeedBindPhone&&!t.publishNeedBindWechat)return!0;var c="bind".concat(t.publishNeedBindPhone&&!e.mobile?"Mobile":"").concat(t.publishNeedBindWechat&&!e.isBindWechat?"Wechat":""),u="".concat(t.isSmsOpen?"mobile":"").concat("none"!==t.wechatEnv?"wechat":""),l="",p="",d={limitPublishType:n};if("h5"===t.platform){switch(n){case"comment":if("miniProgram"===t.wechatEnv){p="".concat(window.location.origin).concat(o);break}p="".concat(window.location.origin).concat(i);break;case"reply":if("miniProgram"===t.wechatEnv){p="/indexPages/thread/index?id=".concat(s);break}r.a.saveCurrentUrl(),p=r.a.getUrl()}(p=encodeURIComponent(p))&&(d.toPage=p)}switch(u){case"mobile":l=e.mobile?"":Object(a.a)("/user/bind-phone",d);break;case"wechat":l=e.isBindWechat?"":Object(a.a)("/user/wx-bind-qrcode",d);break;case"mobilewechat":switch(c){case"bindMobile":l=e.mobile?"":Object(a.a)("/user/bind-phone",d);break;case"bindWechat":l=e.isBindWechat?"":Object(a.a)("/user/wx-bind-qrcode",d);break;case"bindMobileWechat":d.bindPhone=1,l=e.isBindWechat||e.mobile?"":Object(a.a)("/user/wx-bind-qrcode",d)}}return l&&r.a.saveAndPush(l),"comment"===n&&r.a.setUrl("".concat(window.location.origin).concat(i)),!l}},"Ey3/":function(e,t,n){"use strict";n.r(t);n("rB9j"),n("UxlC");var r=n("lwsE"),a=n.n(r),i=n("W8MJ"),o=n.n(i),s=n("7W2i"),c=n.n(s),u=n("a1gu"),l=n.n(u),p=n("Nsbk"),d=n.n(p),f=n("q1tI"),b=n.n(f),h=n("QcND"),g=n("zZWi"),v=n("B5JU"),m=n.n(v);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l()(this,n)}}var j=function(e){c()(n,e);var t=O(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"componentDidMount",value:function(){m.a.replace({url:"/my"})}},{key:"render",value:function(){return null}}]),n}(b.a.Component);t.default=Object(h.a)(Object(g.a)(j))},FtgW:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SUPPLEMENTARY:10}},JTJg:function(e,t,n){"use strict";var r=n("I+eb"),a=n("WjRb"),i=n("HYAF");r({target:"String",proto:!0,forced:!n("qxPZ")("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},KBHl:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("ma9I"),n("QWBl"),n("yq1k"),n("tkto"),n("JTJg"),n("FZtP");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.includes("?"),r=e;try{return Object.keys(t).forEach((function(e,a){t[e]&&(r+="".concat(n||0!==a?"&":"?").concat(e,"=").concat(t[e]))})),r}catch(a){return""}}},QcND:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return H}));n("ma9I"),n("yq1k"),n("4mDm"),n("Rfxz"),n("wLYn"),n("07d7"),n("TWNs"),n("rB9j"),n("JfAA"),n("JTJg"),n("PKPk"),n("Rm1S"),n("UxlC"),n("3bBZ"),n("Kz25");var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("lSNA"),s=n.n(o),c=(n("ls82"),n("yXPU")),u=n.n(c),l=n("lwsE"),p=n.n(l),d=n("PJYZ"),f=n.n(d),b=n("W8MJ"),h=n.n(b),g=n("7W2i"),v=n.n(g),m=n("a1gu"),O=n.n(m),j=n("Nsbk"),y=n.n(j),w=n("q1tI"),P=n.n(w),k=n("yuBF"),x=n("n4oF"),S=n("zDaA"),C=n("sho3"),D=n("B5JU"),N=n.n(D),E=n("20a2"),I=n("bK+J"),R=n("/Nde"),U=n("MCNy"),A=n.n(U),W=n("pGE/"),M=n("Tk/S"),L=n("Xrmz"),_=n("ALHM"),T=n("E2vk"),B=n("yO9+"),q=n("lN2P"),J=n("FtgW"),F=n("kjc1"),Q=n.n(F);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return O()(this,n)}}function H(t,n){var a,o=Object(k.inject)("site")(a=Object(k.inject)("forum")(a=Object(k.inject)("user")(a=Object(k.inject)("thread")(a=Object(k.inject)("emotion")(a=Object(k.inject)("commonLogin")(a=Object(k.inject)("plugin")(a=Object(k.inject)("invite")(a=Object(k.observer)(a=function(a){v()(s,a);var o=Z(s);function s(e){var t,n;p()(this,s),(t=o.call(this,e)).handleWxShare=t.handleWxShare.bind(f()(t)),t.canPublish=t.canPublish.bind(f()(t));var r=e.serverUser,a=e.serverSite,i=e.serverEmotion,c=e.user,u=e.site,l=e.emotion,d=e.forum;return a&&a.platform&&u.setPlatform(a.platform),a&&a.closeSite&&u.setCloseSiteConfig(a.closeSite),a&&a.webConfig&&u.setSiteConfig(a.webConfig),a&&a.webConfig&&d.setOtherPermissions(a.webConfig),a&&a.pluginConfig&&u.setPluginConfig(a.pluginConfig),r&&r.userInfo&&c.setUserInfo(r.userInfo),r&&r.userPermissions&&c.setUserPermissions(r.userPermissions),i&&i.emojis&&l.setEmoji(i.emojis),n=Object(x.a)()?!a:!(u&&u.webConfig),t.state={isNoSiteData:n,isPass:!!Object(x.a)()},t}return h()(s,null,[{key:"getInitialProps",value:function(){var n=u()(i.a.mark((function n(r){var a,o,s,c,u,l,p,d,f,b,h,g;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.ssr_host=e.dzq_host||r.req&&r.req.headers&&r.req.headers.host,e.ctx=r,a="static",o={},u={},!Object(x.a)()){n.next=31;break}return h=r.req.headers,a=h&&!W.a.isEmptyObject(h)?Object(S.a)(h["user-agent"]):"static",Object(C.readEmoji)({},r),n.next=12,Object(C.readForum)({},r);case 12:if(o=n.sent,c={platform:a,closeSite:-3005===o.code?o.data:null,webConfig:o&&o.data||null},!o||0!==o.code||null===(d=o)||void 0===d||null===(f=d.data)||void 0===f||null===(b=f.user)||void 0===b||!b.userId){n.next=23;break}return n.next=17,Object(C.readUser)({params:{userId:o.data.user.userId}},r);case 17:return s=n.sent,n.next=20,Object(C.readPermissions)({},r);case 20:p=n.sent,l=s&&0===s.code?s.data:null,p=p&&0===p.code?p.data:null;case 23:return n.next=25,Object(C.readPluginList)({},r);case 25:if(0===(g=n.sent).code&&(c.pluginConfig=g.data),!o||0!==o.code||!t.getInitialProps){n.next=31;break}return n.next=30,t.getInitialProps(r,{user:l,site:c});case 30:u=n.sent;case 31:return n.abrupt("return",z(z({},u),{},{serverSite:c,serverUser:{userInfo:l,userPermissions:p}}));case 34:return n.prev=34,n.t0=n.catch(0),console.log("err",n.t0),n.abrupt("return",{serverSite:{},serverUser:{}});case 38:case"end":return n.stop()}}),n,null,[[0,34]])})));return function(e){return n.apply(this,arguments)}}()}]),h()(s,[{key:"componentDidMount",value:function(){var e=u()(i.a.mark((function e(){var t,r,a,o,s,c,u,l,p,d,f,b,h,g,v,m,O,j,y;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state.isNoSiteData,a=this.props,o=a.serverUser,s=a.serverSite,c=a.user,u=a.site,l=a.emotion,p=a.forum,f=!1,b=decodeURIComponent(this.props.router.asPath),h=new RegExp("(^|[&|?])inviteCode=([^&]*)(&|$)"),(g=b.match(h))&&this.props.invite.setInviteCode(g[2]),null!==(t=l.emojis)&&void 0!==t&&t.length||l.fetchEmoji(),u.setPlatform(Object(S.a)(window.navigator.userAgent)),!r){e.next=21;break}if(d=(null===s||void 0===s?void 0:s.webConfig)||null){e.next=19;break}return e.next=14,Object(C.readForum)({});case 14:(v=e.sent).data&&u.setSiteConfig(v.data),v.data&&p.setOtherPermissions(v.data),this.setAppCommonStatus(v),d=v.data||null;case 19:e.next=22;break;case 21:d=u?u.webConfig:null;case 22:if(!u||!u.pluginConfig){e.next=26;break}Q()(u.pluginConfig,this.props.plugin.setPluginComponent.bind(this.props.plugin)),e.next=30;break;case 26:return e.next=28,Object(C.readPluginList)();case 28:0===(m=e.sent).code&&(u.setPluginConfig(m.data),Q()(m.data,this.props.plugin.setPluginComponent.bind(this.props.plugin)));case 30:if(u.initUserLoginEntryStatus(),!d||!d.user){e.next=47;break}if(c&&c.userInfo||o&&o.userInfo){e.next=44;break}return e.next=35,Object(C.readUser)({params:{userId:d.user.userId}});case 35:return O=e.sent,e.next=38,Object(C.readPermissions)({});case 38:0===(j=e.sent).code&&j.data&&c.setUserPermissions(j.data),O.data&&c.setUserInfo(O.data),f=!!O.data,e.next=45;break;case 44:f=!0;case 45:e.next=48;break;case 47:f=!1;case 48:return c.updateLoginStatus(f),y=this.isPass(r),n&&y&&(y=n(y)),this.setState({isPass:y}),e.next=54,Object(_.a)(d&&d.passport&&d.passport.offiaccountOpen);case 54:e.sent&&(this.handleWxShare(this.props.router.asPath),this.props.router.events.on("routeChangeComplete",this.handleWxShare));case 56:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleWxShare",value:function(e){if(window.wx&&window.wx.hasDoneConfig){var t=this.props,n=t.user,r=t.site,a=n.userInfo,i=r.webConfig.setSite,o=i.siteName,s=i.siteIntroduction,c=i.siteHeaderLogo,u=i.siteFavicon,l=a||{},p=l.nickname,d=l.avatarUrl,f=l.signature,b=l.id,h=document.title,g=s?s.length>35?"".concat(s.substr(0,35),"..."):s:"\u5728\u8fd9\u91cc\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9",v=window.location.href,m=c||u;e.match(/\/thread\/\d+/)||e.match(/\/user\/\d+/)||("/my"===e&&p&&(h="".concat(p,"\u7684\u4e3b\u9875"),m=d,g=f?f.length>35?"".concat(f.substr(0,35),"..."):f:"\u5728\u8fd9\u91cc\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9",v="".concat(window.location.origin,"/user/").concat(b)),(e.includes("/forum/partner-invite")||e.match(/\/user\/(username|wx|phone)-login/)||e.includes("/user/register"))&&(h="\u9080\u8bf7\u60a8\u52a0\u5165".concat(o)),(e.includes("/invite")||"/"===e)&&(h="".concat(p||"","\u9080\u8bf7\u60a8\u52a0\u5165").concat(o)),e.includes("/message?page=chat")&&(h="\u6211\u7684\u79c1\u4fe1 - ".concat(o),v="".concat(window.location.origin,"/message")),Object(M.a)(h,g,v,m,b))}}},{key:"setAppCommonStatus",value:function(e){var t=this.props.site;switch([B.k,B.n,B.h,B.m,B.i,B.o,B.l].includes(e.code)&&q.a.saveCurrentUrl(),e.code){case 0:break;case B.v:t.setCloseSiteConfig(e.data),N.a.redirect({url:"/close"});break;case B.f:break;case B.x:Object(I.a)(),window.location.reload();break;case B.g:N.a.redirect({url:"/404"});break;case B.k:Object(I.a)(),q.a.gotoLogin();break;case B.n:Object(I.a)(),q.a.saveAndRedirect("/user/register");break;case B.h:N.a.push({url:"/user/status?statusCode=2"});break;case B.m:N.a.push({url:"/user/status?statusCode=-4007"});break;case B.i:N.a.push({url:"/user/status?statusCode=-4009"});break;case B.o:q.a.saveAndRedirect("/user/supplementary");break;case B.j:N.a.redirect({url:"/"});break;case B.l:q.a.saveAndRedirect("/forum/partner-invite");break;default:t.setErrPageType("site"),N.a.redirect({url:"/500"})}}},{key:"checkJump",value:function(){var e=this.props.router,t=q.a.getUrl();if(t){var n=new URL(t);if(n.pathname===e.asPath||n.pathname.includes("/cate/"))q.a.clear();else if("/"===e.asPath)return q.a.restore(),!1}return!0}},{key:"isPass",value:function(e){var t=this.props,n=t.site,r=t.router,a=t.user,i=t.commonLogin;if(n&&n.webConfig){var o,s;if(e&&this.setState({isNoSiteData:!1}),"/close"!==r.asPath&&n.closeSiteConfig)return N.a.redirect({url:"/close"}),!1;if(a.isLogin()){if(!n.isOffiaccountOpen&&!n.isMiniProgramOpen&&"/user/bind-phone"!==r.asPath&&n.isSmsOpen&&!a.mobile)return q.a.saveAndRedirect("/user/bind-phone"),!1;if("/user/bind-nickname"!==r.asPath&&!a.nickname)return i.needToCompleteExtraInfo=a.userStatus===J.a.SUPPLEMENTARY,q.a.saveAndRedirect("/user/bind-nickname"),!1;if(a.userStatus===R.b&&!B.u.includes(r.pathname))return N.a.replace({url:"/user/status?statusCode=".concat(a.userStatus)}),!1}if("pay"===(null===n||void 0===n||null===(o=n.webConfig)||void 0===o||null===(s=o.setSite)||void 0===s?void 0:s.siteMode)){var c;if(B.y.some((function(e){return r.asPath.match(e)})))return this.checkJump(),!0;var u=r.query.inviteCode,l=u?"?inviteCode=".concat(u):"";if((null===a||void 0===a||!a.paid)&&0===(null===a||void 0===a||null===(c=a.group)||void 0===c?void 0:c.level)||!a.isLogin())return q.a.saveAndRedirect("/forum/partner-invite".concat(l)),!1}}return this.checkJump()}},{key:"filterProps",value:function(e){var t=z({},e);return delete t.serverUser,delete t.serverSite,delete t.user,delete t.site,t}},{key:"canPublish",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this.props,r=n.user,a=n.site,i=n.thread;return Object(T.a)(r,a,t,null===i||void 0===i||null===(e=i.threadData)||void 0===e?void 0:e.threadId)}},{key:"render",value:function(){var e=this.state,n=e.isNoSiteData,a=e.isPass;return"static"===this.props.site.platform?null:n||!a?Object(r.jsx)("div",{className:L.a.loadingBox,children:Object(r.jsx)(A.a,{className:L.a.loading,name:"LoadingOutlined",size:"large"})}):Object(r.jsx)(t,z({canPublish:this.canPublish},this.filterProps(this.props)))}}]),s}(P.a.Component))||a)||a)||a)||a)||a)||a)||a)||a)||a;return Object(E.withRouter)(o)}}).call(this,n("ntbh"))},"Tk/S":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("lY1M"),a=n("KBHl");function i(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";r.b.env("weixin")&&window.wx&&window.wx.ready((function(){var r={title:e||"Discuz! Q",desc:t&&""!=t?t:e||"Discuz! Q",link:Object(a.a)(n||window.location.href,{inviteCode:o}),imgUrl:i};wx.updateAppMessageShareData(r),wx.updateTimelineShareData(r),wx.onMenuShareWeibo(r)}))}},Xrmz:function(e,t,n){"use strict";t.a={loadingBox:"IaolWSnqMjqk8NJnV76AR",loading:"SeS7jrWNwr45DU-hTARv9"}},"bC0/":function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n("pNMO"),n("ma9I"),n("TeQF"),n("QWBl"),n("HRxU"),n("eoL8"),n("5DmW"),n("27RR"),n("tkto"),n("FZtP"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.pluginName,r=t.author,i=t.type,o=t.app_id,s=t.pluginVersion,c=t.pluginComponentName,u=t.pluginData,l=t.callback,p=t.preCallback,d=u.disables,f=u.pluginFiles,b=f.js,h=f.css;if(!d){if(this.task={},this.pluginComponentName=c,this.callback=l,this.preCallback=p,b&&0!==b.length)for(var g=0;g<b.length;g++)this.task[b[g]]={type:"js",done:!1};if(h&&0!==h.length)for(var v=0;v<b.length;v++)this.task[h[v]]={type:"css",done:!1};this.isEmptyObject(this.task)||(this.preRegister(a(a({},u),{},{pluginName:n,version:s,author:r,type:i,app_id:o,component:"padding"})),this.start())}}var t,n,r;return t=e,(n=[{key:"preRegister",value:function(e){e.pluginName,e.disables,e.version,e.target,e.hookName,e.component,e.author,e.type,e.app_id,e.platform,e.path,e.options,this.preCallback(e)}},{key:"isEmptyObject",value:function(e){for(var t in e)return!1;return!0}},{key:"start",value:function(){for(var e in this.task){var t=this.task[e].type;"js"===t?this.createJS(e):"css"===t&&this.createCSS(e)}}},{key:"createJS",value:function(e){var t=this,n=document.createElement("script");n.src=e,n.onload=function(){t.task[e]&&(t.task[e].done=!0),t.check()&&t.callback(t.pluginComponentName)},n.onerror=function(){console.error("".concat(t.pluginComponentName,", \u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\uff1a").concat(e))},document.body.appendChild(n)}},{key:"createCSS",value:function(e){var t=this,n=document.createElement("link");n.href=e,n.rel="stylesheet",n.type="text/css",n.onload=function(){t.task[e]&&(t.task[e].done=!0),t.check()&&t.callback(t.pluginComponentName)},n.onerror=function(){console.error("".concat(t.pluginComponentName,", \u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\uff1a").concat(e))},document.head.appendChild(n)}},{key:"check",value:function(){for(var e in this.task)if(!this.task[e].done)return!1;return!0}}])&&o(t.prototype,n),r&&o(t,r),e}();t.default=s},kjc1:function(e,t,n){"use strict";n("ma9I"),n("2B1R"),n("eoL8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e||0===e.length)return;for(var n=0;n<e.length;n++)c(e[n],t)};var r=i(n("bC0/")),a=i(n("4x5+"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){window.DZQPlugin[e].default||console.error("".concat(e,"\u6ca1\u6709\u627e\u5230default\u5c5e\u6027").concat(window.DZQPlugin[e]));var n=a.default.register(window.DZQPlugin[e].default);n&&n.map&&n.pluginName&&t(n.pluginName,n.map)}function s(e,t){var n=a.default.register(e);n&&n.map&&n.pluginName&&t(n.pluginName,n.map)}function c(e,t){var n=e.name_en,a=e.version,i=e.view,c=e.author;if(i)for(var u in i)i[u].pluginFiles&&new r.default({pluginName:n,pluginVersion:a,pluginComponentName:u,pluginData:i[u],author:c,callback:function(e){o(e,t)},preCallback:function(e){s(e,t)}})}},rGXy:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getWXConfig=function(){return b.apply(this,arguments)};var a=r(n("o0o1")),i=r(n("lSNA")),o=r(n("QILm"));n("ls82");var s=r(n("yXPU")),c=n("0QFe"),u=r(n("m4Ii")),l=["params","data"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={messageText:{type:"string",required:!0},recipientUsername:{type:"string",required:!0},imageUrl:{type:"string"},attachmentId:{type:"number"}};function b(){return(b=(0,s.default)(a.default.mark((function e(){var t,n,r,i,s,p,b,h,g=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.length>0&&void 0!==g[0]?g[0]:{},e.prev=1,n=t.params,r=void 0===n?{}:n,i=t.data,s=void 0===i?{}:i,p=(0,o.default)(t,l),b=d(d({url:"/api/v3/offiaccount/jssdk",method:"GET",params:r,data:s},p),{},{validateRules:f}),e.next=6,u.default.dispatcher(b);case 6:return h=e.sent,e.abrupt("return",h);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",(0,c.handleError)(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}},yq1k:function(e,t,n){"use strict";var r=n("I+eb"),a=n("TWQb").includes,i=n("RNIs");r({target:"Array",proto:!0,forced:!n("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},zDaA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("n4oF");function a(e){var t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)?"h5":"pc";if(!Object(r.a)()){var n=90===Math.abs(window.orientation),a=window.innerWidth;"pc"===t&&a<800&&(t="h5"),"h5"===t&&!n&&a>=800&&(t="pc")}return t}},zZWi:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("lSNA"),s=n.n(o),c=(n("ls82"),n("yXPU")),u=n.n(c),l=n("lwsE"),p=n.n(l),d=n("W8MJ"),f=n.n(d),b=n("7W2i"),h=n.n(b),g=n("a1gu"),v=n.n(g),m=n("Nsbk"),O=n.n(m),j=n("q1tI"),y=n.n(j),w=n("yuBF"),P=n("n4oF"),k=n("lN2P");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O()(e);if(t){var a=O()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}function D(e){var t;return Object(w.inject)("user")(t=Object(w.observer)(t=function(t){h()(a,t);var n=C(a);function a(e){return p()(this,a),n.call(this,e)}return f()(a,null,[{key:"getInitialProps",value:function(){var t=u()(i.a.mark((function t(n,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}throw Error("CheckLoginStatus\u5fc5\u987b\u524d\u7f6e\u4f7f\u7528HOCFetchSiteData");case 2:if(t.prev=2,a={},!Object(P.a)()){t.next=9;break}if(!e.getInitialProps){t.next=9;break}return t.next=8,e.getInitialProps(n);case 8:a=t.sent;case 9:return t.abrupt("return",S({},a));case 12:return t.prev=12,t.t0=t.catch(2),console.log("err",t.t0),t.abrupt("return",{});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,n){return t.apply(this,arguments)}}()}]),f()(a,[{key:"componentDidMount",value:function(){this.props.user.isLogin()||k.a.saveAndLogin()}},{key:"componentDidUpdate",value:function(){this.props.user.isLogin()||k.a.saveAndLogin()}},{key:"render",value:function(){return this.props.user.isLogin()?Object(r.jsx)(e,S({},this.props)):null}}]),a}(y.a.Component))||t)||t}}},[["+FtA",0,1,4,3,2]]]);