_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"/Nde":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return h}));var r=n("lSNA"),a=n.n(r),i=(n("o0o1"),n("ls82"),n("yXPU"),n("+3IH")),o=n("dJ22");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={Code:"common_0001",Message:"\u9700\u8981\u8865\u5145\u6635\u79f0"},l={Code:"common_0002",Message:"\u9700\u8981\u8865\u5145\u9644\u52a0\u4fe1\u606f"},d={Code:"common_0003",Message:"\u9700\u8981\u8865\u5145\u6635\u79f0\u548c\u9644\u52a0\u4fe1\u606f"},p=-4009,f=2,b=-4007,h=function(e){var t=e.webConfig.setSite;return"1"===(t=void 0===t?{}:t).openExtFields},v=function(e){if(function(e){var t=Object(i.a)(e,"data.isMissNickname",!1),n=10===Object(i.a)(e,"data.userStatus"),r=Object(i.a)(e,"data.accessToken","");if(-8e3!==e.code){var a=Object(i.a)(e,"data.uid","");if(Object(o.a)({accessToken:r}),n&&t)throw c({uid:a},d);if(t)throw c({uid:a},u);if(n)throw c({uid:a},l)}}(e),0===e.code||e.code===p||e.code===b){var t=e.code,n=Object(i.a)(e,"data.userStatus",0),r=Object(i.a)(e,"data.uid","");if(0===t&&n===f){var a=Object(i.a)(e,"data.accessToken","");Object(o.a)({accessToken:a}),t=n}if(t)throw{Code:t,Message:Object(i.a)(e,"data.rejectReason","")||Object(i.a)(e,"data.banReason",""),uid:r}}}},"5MUC":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("QWBl"),n("sMBO"),n("T63A"),n("tkto"),n("FZtP");var r=n("J4zp"),a=n.n(r),i={101:"IMAGE",102:"VOICE",103:"VIDEO",104:"GOODS",105:"QA",106:"RED_PACKET",107:"REWARD",108:"VOTE",109:"VOTE_THREAD",110:"FILE",111:"QA_IMAGE",10002:"IFRAME"};function o(e){var t={plugin:{}};return e&&Object.keys(e)&&Object.entries(e).forEach((function(e){var n=a()(e,2)[1];if(n){var r=n.tomId,o=n.body,s=n._plugin;i[r]?t[i[r]]=o:s&&(t.plugin[null===s||void 0===s?void 0:s.name]={tomId:r,body:o,_plugin:s})}})),t}},"7zbd":function(e,t,n){"use strict";n.r(t);n("ma9I"),n("qePV"),n("rB9j"),n("EnZy");var r,a=n("nKUr"),i=n("o0o1"),o=n.n(i),s=(n("ls82"),n("yXPU")),c=n.n(s),u=n("lwsE"),l=n.n(u),d=n("W8MJ"),p=n.n(d),f=n("7W2i"),b=n.n(f),h=n("a1gu"),v=n.n(h),m=n("Nsbk"),g=n.n(m),O=n("q1tI"),w=n.n(O),j=n("yuBF"),y=n("wdT/"),k=n.n(y),P=(n("RiVy"),n("B5JU")),x=n.n(P),C=n("sho3"),S=(n("IvHc"),n("QcND")),D=n("5MUC");function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var I=Object(j.inject)("user")(r=Object(j.observer)(r=function(e){b()(n,e);var t=E(n);function n(e){var r;return l()(this,n),(r=t.call(this,e)).state={},r}return p()(n,[{key:"componentDidMount",value:function(){var e=c()(o.a.mark((function e(){var t,n,r,a,i,s,c,u,l,d,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.router.query.url){e.next=3;break}return e.abrupt("return");case 3:return t=this.props.router.asPath,n=decodeURI(t).split("?"),"".concat(n[1].split("=")[1],"?").concat(n[2].split("&")[0],"&").concat(n[2].split("&")[1]),r=n[2].split("&"),a=r[0].split("=")[1],i=r[2].split("=")[1],s=Number(r[1].split("=")[1]),e.next=12,this.getCanDownloadAttachment(i);case 12:if(c=e.sent,u=c.canDownloadAttachment,l=c.attachment,u){e.next=19;break}return k.a.warning({content:"\u6682\u2f46\u6743\u9650\u4e0b\u8f7d\u9644\u4ef6"}),x.a.redirect({url:"/"}),e.abrupt("return");case 19:return d=this.getAttachmentLink(s,l),p={sign:a,attachmentsId:s,threadId:i},e.next=23,this.downloadAttachment(p);case 23:e.sent&&(k.a.info({content:"\u6b63\u5728\u4e0b\u8f7d"}),window.location.href=d);case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCanDownloadAttachment",value:function(){var e=c()(o.a.mark((function e(t){var n,r,a,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.readThreadDetail)({params:{threadId:Number(t)}});case 2:if(0!==(n=e.sent).code){e.next=6;break}return c=Object(D.a)(null===n||void 0===n||null===(r=n.data)||void 0===r||null===(a=r.content)||void 0===a?void 0:a.indexes),e.abrupt("return",{canDownloadAttachment:null===n||void 0===n||null===(i=n.data)||void 0===i||null===(s=i.ability)||void 0===s?void 0:s.canDownloadAttachment,attachment:c&&c.VOTE});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAttachmentLink",value:function(e,t){for(var n=0;n<(null===t||void 0===t?void 0:t.length);n++)if(t[n].id===e)return t[n].url}},{key:"downloadAttachment",value:function(){var e=c()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.readDownloadAttachment)(t);case 2:if(0!==(null===(n=e.sent)||void 0===n?void 0:n.code)){e.next=6;break}return x.a.redirect({url:"/"}),e.abrupt("return",!0);case 6:return-7083===(null===n||void 0===n?void 0:n.code)&&(k.a.info({content:null===n||void 0===n?void 0:n.msg}),x.a.redirect({url:"/"})),-7082===(null===n||void 0===n?void 0:n.code)&&(k.a.info({content:null===n||void 0===n?void 0:n.msg}),x.a.redirect({url:"/"})),-4004===(null===n||void 0===n?void 0:n.code)&&k.a.info({content:null===n||void 0===n?void 0:n.msg}),-5001===(null===n||void 0===n?void 0:n.code)&&(k.a.info({content:null===n||void 0===n?void 0:n.msg}),x.a.redirect({url:"/"})),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{})}}]),n}(w.a.Component))||r)||r;t.default=Object(S.a)(I)},ALHM:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n("ma9I"),n("4mDm"),n("07d7"),n("5s+n"),n("PKPk"),n("3bBZ");var r=n("o0o1"),a=n.n(r),i=n("RIqP"),o=n.n(i),s=n("lSNA"),c=n.n(s),u=(n("ls82"),n("yXPU")),l=n.n(u),d=n("rGXy"),p=n("lY1M");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=["closeWindow","chooseImage","uploadImage","getLocalImgData","updateAppMessageShareData","updateTimelineShareData","getNetworkType"],v=!1;function m(){return g.apply(this,arguments)}function g(){return(g=l()(a.a.mark((function e(){var t,n,r,i,s,c,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]&&u[0],n=u.length>1&&void 0!==u[1]?u[1]:[],p.b.env("weixin")){e.next=4;break}return e.abrupt("return");case 4:return r=[],window.wx&&wx.config||(i=new Promise((function(e){var t=document.createElement("script");t.src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js",t.onload=function(){return e()},document.body.appendChild(t)})),r.push(i)),e.next=8,Promise.all(r);case 8:if(t&&!v){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Object(d.getWXConfig)({params:{url:encodeURIComponent(window.location.href)}});case 12:if(0!==(s=e.sent).code||!s.data||!s.data.appId){e.next=21;break}return a=s.data,c={appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature},wx&&wx.config(b(b({debug:!1},c),{},{jsApiList:[].concat(h,o()(n))})),wx&&(wx.hasDoneConfig=!0),v=!0,e.abrupt("return",!0);case 21:console.error("\u521d\u59cb\u5316\u5fae\u4fe1jssdk\u5931\u8d25\uff01",s);case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}var a}),e)})))).apply(this,arguments)}},E2vk:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("ma9I");var r=n("lN2P"),a=n("KBHl"),i="/thread/post",o="/indexPages/thread/post/index";function s(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e.isLogin())return r.a.saveAndLogin(),!1;if(!t.publishNeedBindPhone&&!t.publishNeedBindWechat)return!0;var c="bind".concat(t.publishNeedBindPhone&&!e.mobile?"Mobile":"").concat(t.publishNeedBindWechat&&!e.isBindWechat?"Wechat":""),u="".concat(t.isSmsOpen?"mobile":"").concat("none"!==t.wechatEnv?"wechat":""),l="",d="",p={limitPublishType:n};if("h5"===t.platform){switch(n){case"comment":if("miniProgram"===t.wechatEnv){d="".concat(window.location.origin).concat(o);break}d="".concat(window.location.origin).concat(i);break;case"reply":if("miniProgram"===t.wechatEnv){d="/indexPages/thread/index?id=".concat(s);break}r.a.saveCurrentUrl(),d=r.a.getUrl()}(d=encodeURIComponent(d))&&(p.toPage=d)}switch(u){case"mobile":l=e.mobile?"":Object(a.a)("/user/bind-phone",p);break;case"wechat":l=e.isBindWechat?"":Object(a.a)("/user/wx-bind-qrcode",p);break;case"mobilewechat":switch(c){case"bindMobile":l=e.mobile?"":Object(a.a)("/user/bind-phone",p);break;case"bindWechat":l=e.isBindWechat?"":Object(a.a)("/user/wx-bind-qrcode",p);break;case"bindMobileWechat":p.bindPhone=1,l=e.isBindWechat||e.mobile?"":Object(a.a)("/user/wx-bind-qrcode",p)}}return l&&r.a.saveAndPush(l),"comment"===n&&r.a.setUrl("".concat(window.location.origin).concat(i)),!l}},FtgW:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SUPPLEMENTARY:10}},IvHc:function(e,t,n){"use strict";var r=n("lN2P");t.a=r.a.saveAndLogin},JTJg:function(e,t,n){"use strict";var r=n("I+eb"),a=n("WjRb"),i=n("HYAF");r({target:"String",proto:!0,forced:!n("qxPZ")("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},KBHl:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("ma9I"),n("QWBl"),n("yq1k"),n("tkto"),n("JTJg"),n("FZtP");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.includes("?"),r=e;try{return Object.keys(t).forEach((function(e,a){t[e]&&(r+="".concat(n||0!==a?"&":"?").concat(e,"=").concat(t[e]))})),r}catch(a){return""}}},QcND:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return V}));n("ma9I"),n("yq1k"),n("4mDm"),n("Rfxz"),n("wLYn"),n("07d7"),n("TWNs"),n("rB9j"),n("JfAA"),n("JTJg"),n("PKPk"),n("Rm1S"),n("UxlC"),n("3bBZ"),n("Kz25");var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("lSNA"),s=n.n(o),c=(n("ls82"),n("yXPU")),u=n.n(c),l=n("lwsE"),d=n.n(l),p=n("PJYZ"),f=n.n(p),b=n("W8MJ"),h=n.n(b),v=n("7W2i"),m=n.n(v),g=n("a1gu"),O=n.n(g),w=n("Nsbk"),j=n.n(w),y=n("q1tI"),k=n.n(y),P=n("yuBF"),x=n("n4oF"),C=n("zDaA"),S=n("sho3"),D=n("B5JU"),E=n.n(D),I=n("20a2"),N=n("bK+J"),A=n("/Nde"),R=n("MCNy"),U=n.n(R),M=n("pGE/"),T=n("Tk/S"),W=n("Xrmz"),_=n("ALHM"),L=n("E2vk"),B=n("yO9+"),q=n("lN2P"),J=n("FtgW"),F=n("kjc1"),Q=n.n(F);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var a=j()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return O()(this,n)}}function V(t,n){var a,o=Object(P.inject)("site")(a=Object(P.inject)("forum")(a=Object(P.inject)("user")(a=Object(P.inject)("thread")(a=Object(P.inject)("emotion")(a=Object(P.inject)("commonLogin")(a=Object(P.inject)("plugin")(a=Object(P.inject)("invite")(a=Object(P.observer)(a=function(a){m()(s,a);var o=H(s);function s(e){var t,n;d()(this,s),(t=o.call(this,e)).handleWxShare=t.handleWxShare.bind(f()(t)),t.canPublish=t.canPublish.bind(f()(t));var r=e.serverUser,a=e.serverSite,i=e.serverEmotion,c=e.user,u=e.site,l=e.emotion,p=e.forum;return a&&a.platform&&u.setPlatform(a.platform),a&&a.closeSite&&u.setCloseSiteConfig(a.closeSite),a&&a.webConfig&&u.setSiteConfig(a.webConfig),a&&a.webConfig&&p.setOtherPermissions(a.webConfig),a&&a.pluginConfig&&u.setPluginConfig(a.pluginConfig),r&&r.userInfo&&c.setUserInfo(r.userInfo),r&&r.userPermissions&&c.setUserPermissions(r.userPermissions),i&&i.emojis&&l.setEmoji(i.emojis),n=Object(x.a)()?!a:!(u&&u.webConfig),t.state={isNoSiteData:n,isPass:!!Object(x.a)()},t}return h()(s,null,[{key:"getInitialProps",value:function(){var n=u()(i.a.mark((function n(r){var a,o,s,c,u,l,d,p,f,b,h,v;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.ssr_host=e.dzq_host||r.req&&r.req.headers&&r.req.headers.host,e.ctx=r,a="static",o={},u={},!Object(x.a)()){n.next=31;break}return h=r.req.headers,a=h&&!M.a.isEmptyObject(h)?Object(C.a)(h["user-agent"]):"static",Object(S.readEmoji)({},r),n.next=12,Object(S.readForum)({},r);case 12:if(o=n.sent,c={platform:a,closeSite:-3005===o.code?o.data:null,webConfig:o&&o.data||null},!o||0!==o.code||null===(p=o)||void 0===p||null===(f=p.data)||void 0===f||null===(b=f.user)||void 0===b||!b.userId){n.next=23;break}return n.next=17,Object(S.readUser)({params:{userId:o.data.user.userId}},r);case 17:return s=n.sent,n.next=20,Object(S.readPermissions)({},r);case 20:d=n.sent,l=s&&0===s.code?s.data:null,d=d&&0===d.code?d.data:null;case 23:return n.next=25,Object(S.readPluginList)({},r);case 25:if(0===(v=n.sent).code&&(c.pluginConfig=v.data),!o||0!==o.code||!t.getInitialProps){n.next=31;break}return n.next=30,t.getInitialProps(r,{user:l,site:c});case 30:u=n.sent;case 31:return n.abrupt("return",X(X({},u),{},{serverSite:c,serverUser:{userInfo:l,userPermissions:d}}));case 34:return n.prev=34,n.t0=n.catch(0),console.log("err",n.t0),n.abrupt("return",{serverSite:{},serverUser:{}});case 38:case"end":return n.stop()}}),n,null,[[0,34]])})));return function(e){return n.apply(this,arguments)}}()}]),h()(s,[{key:"componentDidMount",value:function(){var e=u()(i.a.mark((function e(){var t,r,a,o,s,c,u,l,d,p,f,b,h,v,m,g,O,w,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state.isNoSiteData,a=this.props,o=a.serverUser,s=a.serverSite,c=a.user,u=a.site,l=a.emotion,d=a.forum,f=!1,b=decodeURIComponent(this.props.router.asPath),h=new RegExp("(^|[&|?])inviteCode=([^&]*)(&|$)"),(v=b.match(h))&&this.props.invite.setInviteCode(v[2]),null!==(t=l.emojis)&&void 0!==t&&t.length||l.fetchEmoji(),u.setPlatform(Object(C.a)(window.navigator.userAgent)),!r){e.next=21;break}if(p=(null===s||void 0===s?void 0:s.webConfig)||null){e.next=19;break}return e.next=14,Object(S.readForum)({});case 14:(m=e.sent).data&&u.setSiteConfig(m.data),m.data&&d.setOtherPermissions(m.data),this.setAppCommonStatus(m),p=m.data||null;case 19:e.next=22;break;case 21:p=u?u.webConfig:null;case 22:if(!u||!u.pluginConfig){e.next=26;break}Q()(u.pluginConfig,this.props.plugin.setPluginComponent.bind(this.props.plugin)),e.next=30;break;case 26:return e.next=28,Object(S.readPluginList)();case 28:0===(g=e.sent).code&&(u.setPluginConfig(g.data),Q()(g.data,this.props.plugin.setPluginComponent.bind(this.props.plugin)));case 30:if(u.initUserLoginEntryStatus(),!p||!p.user){e.next=47;break}if(c&&c.userInfo||o&&o.userInfo){e.next=44;break}return e.next=35,Object(S.readUser)({params:{userId:p.user.userId}});case 35:return O=e.sent,e.next=38,Object(S.readPermissions)({});case 38:0===(w=e.sent).code&&w.data&&c.setUserPermissions(w.data),O.data&&c.setUserInfo(O.data),f=!!O.data,e.next=45;break;case 44:f=!0;case 45:e.next=48;break;case 47:f=!1;case 48:return c.updateLoginStatus(f),j=this.isPass(r),n&&j&&(j=n(j)),this.setState({isPass:j}),e.next=54,Object(_.a)(p&&p.passport&&p.passport.offiaccountOpen);case 54:e.sent&&(this.handleWxShare(this.props.router.asPath),this.props.router.events.on("routeChangeComplete",this.handleWxShare));case 56:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleWxShare",value:function(e){if(window.wx&&window.wx.hasDoneConfig){var t=this.props,n=t.user,r=t.site,a=n.userInfo,i=r.webConfig.setSite,o=i.siteName,s=i.siteIntroduction,c=i.siteHeaderLogo,u=i.siteFavicon,l=a||{},d=l.nickname,p=l.avatarUrl,f=l.signature,b=l.id,h=document.title,v=s?s.length>35?"".concat(s.substr(0,35),"..."):s:"\u5728\u8fd9\u91cc\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9",m=window.location.href,g=c||u;e.match(/\/thread\/\d+/)||e.match(/\/user\/\d+/)||("/my"===e&&d&&(h="".concat(d,"\u7684\u4e3b\u9875"),g=p,v=f?f.length>35?"".concat(f.substr(0,35),"..."):f:"\u5728\u8fd9\u91cc\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9",m="".concat(window.location.origin,"/user/").concat(b)),(e.includes("/forum/partner-invite")||e.match(/\/user\/(username|wx|phone)-login/)||e.includes("/user/register"))&&(h="\u9080\u8bf7\u60a8\u52a0\u5165".concat(o)),(e.includes("/invite")||"/"===e)&&(h="".concat(d||"","\u9080\u8bf7\u60a8\u52a0\u5165").concat(o)),e.includes("/message?page=chat")&&(h="\u6211\u7684\u79c1\u4fe1 - ".concat(o),m="".concat(window.location.origin,"/message")),Object(T.a)(h,v,m,g,b))}}},{key:"setAppCommonStatus",value:function(e){var t=this.props.site;switch([B.k,B.n,B.h,B.m,B.i,B.o,B.l].includes(e.code)&&q.a.saveCurrentUrl(),e.code){case 0:break;case B.v:t.setCloseSiteConfig(e.data),E.a.redirect({url:"/close"});break;case B.f:break;case B.x:Object(N.a)(),window.location.reload();break;case B.g:E.a.redirect({url:"/404"});break;case B.k:Object(N.a)(),q.a.gotoLogin();break;case B.n:Object(N.a)(),q.a.saveAndRedirect("/user/register");break;case B.h:E.a.push({url:"/user/status?statusCode=2"});break;case B.m:E.a.push({url:"/user/status?statusCode=-4007"});break;case B.i:E.a.push({url:"/user/status?statusCode=-4009"});break;case B.o:q.a.saveAndRedirect("/user/supplementary");break;case B.j:E.a.redirect({url:"/"});break;case B.l:q.a.saveAndRedirect("/forum/partner-invite");break;default:t.setErrPageType("site"),E.a.redirect({url:"/500"})}}},{key:"checkJump",value:function(){var e=this.props.router,t=q.a.getUrl();if(t){var n=new URL(t);if(n.pathname===e.asPath||n.pathname.includes("/cate/"))q.a.clear();else if("/"===e.asPath)return q.a.restore(),!1}return!0}},{key:"isPass",value:function(e){var t=this.props,n=t.site,r=t.router,a=t.user,i=t.commonLogin;if(n&&n.webConfig){var o,s;if(e&&this.setState({isNoSiteData:!1}),"/close"!==r.asPath&&n.closeSiteConfig)return E.a.redirect({url:"/close"}),!1;if(a.isLogin()){if(!n.isOffiaccountOpen&&!n.isMiniProgramOpen&&"/user/bind-phone"!==r.asPath&&n.isSmsOpen&&!a.mobile)return q.a.saveAndRedirect("/user/bind-phone"),!1;if("/user/bind-nickname"!==r.asPath&&!a.nickname)return i.needToCompleteExtraInfo=a.userStatus===J.a.SUPPLEMENTARY,q.a.saveAndRedirect("/user/bind-nickname"),!1;if(a.userStatus===A.b&&!B.u.includes(r.pathname))return E.a.replace({url:"/user/status?statusCode=".concat(a.userStatus)}),!1}if("pay"===(null===n||void 0===n||null===(o=n.webConfig)||void 0===o||null===(s=o.setSite)||void 0===s?void 0:s.siteMode)){var c;if(B.y.some((function(e){return r.asPath.match(e)})))return this.checkJump(),!0;var u=r.query.inviteCode,l=u?"?inviteCode=".concat(u):"";if((null===a||void 0===a||!a.paid)&&0===(null===a||void 0===a||null===(c=a.group)||void 0===c?void 0:c.level)||!a.isLogin())return q.a.saveAndRedirect("/forum/partner-invite".concat(l)),!1}}return this.checkJump()}},{key:"filterProps",value:function(e){var t=X({},e);return delete t.serverUser,delete t.serverSite,delete t.user,delete t.site,t}},{key:"canPublish",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this.props,r=n.user,a=n.site,i=n.thread;return Object(L.a)(r,a,t,null===i||void 0===i||null===(e=i.threadData)||void 0===e?void 0:e.threadId)}},{key:"render",value:function(){var e=this.state,n=e.isNoSiteData,a=e.isPass;return"static"===this.props.site.platform?null:n||!a?Object(r.jsx)("div",{className:W.a.loadingBox,children:Object(r.jsx)(U.a,{className:W.a.loading,name:"LoadingOutlined",size:"large"})}):Object(r.jsx)(t,X({canPublish:this.canPublish},this.filterProps(this.props)))}}]),s}(k.a.Component))||a)||a)||a)||a)||a)||a)||a)||a)||a;return Object(I.withRouter)(o)}}).call(this,n("ntbh"))},RiVy:function(e,t,n){"use strict";function r(){if("undefined"===typeof window)return!1;var e=window.navigator.userAgent.toLowerCase();return/micromessenger/.test(e)}n.d(t,"a",(function(){return r}))},"Tk/S":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("lY1M"),a=n("KBHl");function i(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";r.b.env("weixin")&&window.wx&&window.wx.ready((function(){var r={title:e||"Discuz! Q",desc:t&&""!=t?t:e||"Discuz! Q",link:Object(a.a)(n||window.location.href,{inviteCode:o}),imgUrl:i};wx.updateAppMessageShareData(r),wx.updateTimelineShareData(r),wx.onMenuShareWeibo(r)}))}},Xrmz:function(e,t,n){"use strict";t.a={loadingBox:"IaolWSnqMjqk8NJnV76AR",loading:"SeS7jrWNwr45DU-hTARv9"}},"bC0/":function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n("pNMO"),n("ma9I"),n("TeQF"),n("QWBl"),n("HRxU"),n("eoL8"),n("5DmW"),n("27RR"),n("tkto"),n("FZtP"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.pluginName,r=t.author,i=t.type,o=t.app_id,s=t.pluginVersion,c=t.pluginComponentName,u=t.pluginData,l=t.callback,d=t.preCallback,p=u.disables,f=u.pluginFiles,b=f.js,h=f.css;if(!p){if(this.task={},this.pluginComponentName=c,this.callback=l,this.preCallback=d,b&&0!==b.length)for(var v=0;v<b.length;v++)this.task[b[v]]={type:"js",done:!1};if(h&&0!==h.length)for(var m=0;m<b.length;m++)this.task[h[m]]={type:"css",done:!1};this.isEmptyObject(this.task)||(this.preRegister(a(a({},u),{},{pluginName:n,version:s,author:r,type:i,app_id:o,component:"padding"})),this.start())}}var t,n,r;return t=e,(n=[{key:"preRegister",value:function(e){e.pluginName,e.disables,e.version,e.target,e.hookName,e.component,e.author,e.type,e.app_id,e.platform,e.path,e.options,this.preCallback(e)}},{key:"isEmptyObject",value:function(e){for(var t in e)return!1;return!0}},{key:"start",value:function(){for(var e in this.task){var t=this.task[e].type;"js"===t?this.createJS(e):"css"===t&&this.createCSS(e)}}},{key:"createJS",value:function(e){var t=this,n=document.createElement("script");n.src=e,n.onload=function(){t.task[e]&&(t.task[e].done=!0),t.check()&&t.callback(t.pluginComponentName)},n.onerror=function(){console.error("".concat(t.pluginComponentName,", \u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\uff1a").concat(e))},document.body.appendChild(n)}},{key:"createCSS",value:function(e){var t=this,n=document.createElement("link");n.href=e,n.rel="stylesheet",n.type="text/css",n.onload=function(){t.task[e]&&(t.task[e].done=!0),t.check()&&t.callback(t.pluginComponentName)},n.onerror=function(){console.error("".concat(t.pluginComponentName,", \u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\uff1a").concat(e))},document.head.appendChild(n)}},{key:"check",value:function(){for(var e in this.task)if(!this.task[e].done)return!1;return!0}}])&&o(t.prototype,n),r&&o(t,r),e}();t.default=s},kjc1:function(e,t,n){"use strict";n("ma9I"),n("2B1R"),n("eoL8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e||0===e.length)return;for(var n=0;n<e.length;n++)c(e[n],t)};var r=i(n("bC0/")),a=i(n("4x5+"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){window.DZQPlugin[e].default||console.error("".concat(e,"\u6ca1\u6709\u627e\u5230default\u5c5e\u6027").concat(window.DZQPlugin[e]));var n=a.default.register(window.DZQPlugin[e].default);n&&n.map&&n.pluginName&&t(n.pluginName,n.map)}function s(e,t){var n=a.default.register(e);n&&n.map&&n.pluginName&&t(n.pluginName,n.map)}function c(e,t){var n=e.name_en,a=e.version,i=e.view,c=e.author;if(i)for(var u in i)i[u].pluginFiles&&new r.default({pluginName:n,pluginVersion:a,pluginComponentName:u,pluginData:i[u],author:c,callback:function(e){o(e,t)},preCallback:function(e){s(e,t)}})}},"o6+f":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return n("7zbd")}])},rGXy:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getWXConfig=function(){return b.apply(this,arguments)};var a=r(n("o0o1")),i=r(n("lSNA")),o=r(n("QILm"));n("ls82");var s=r(n("yXPU")),c=n("0QFe"),u=r(n("m4Ii")),l=["params","data"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={messageText:{type:"string",required:!0},recipientUsername:{type:"string",required:!0},imageUrl:{type:"string"},attachmentId:{type:"number"}};function b(){return(b=(0,s.default)(a.default.mark((function e(){var t,n,r,i,s,d,b,h,v=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.length>0&&void 0!==v[0]?v[0]:{},e.prev=1,n=t.params,r=void 0===n?{}:n,i=t.data,s=void 0===i?{}:i,d=(0,o.default)(t,l),b=p(p({url:"/api/v3/offiaccount/jssdk",method:"GET",params:r,data:s},d),{},{validateRules:f}),e.next=6,u.default.dispatcher(b);case 6:return h=e.sent,e.abrupt("return",h);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",(0,c.handleError)(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}},yq1k:function(e,t,n){"use strict";var r=n("I+eb"),a=n("TWQb").includes,i=n("RNIs");r({target:"Array",proto:!0,forced:!n("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},zDaA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("n4oF");function a(e){var t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)?"h5":"pc";if(!Object(r.a)()){var n=90===Math.abs(window.orientation),a=window.innerWidth;"pc"===t&&a<800&&(t="h5"),"h5"===t&&!n&&a>=800&&(t="pc")}return t}}},[["o6+f",0,1,4,3,2]]]);