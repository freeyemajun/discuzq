_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"91s+":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my/others",function(){return r("SZdU")}])},QL3K:function(e,t,r){"use strict";r("ma9I"),r("E9XD"),r("tkto"),r("B6y2"),r("rB9j"),r("UxlC");var n,s=r("nKUr"),a=r("RIqP"),i=r.n(a),o=r("o0o1"),c=r.n(o),u=(r("ls82"),r("yXPU")),d=r.n(u),p=r("lwsE"),l=r.n(p),f=r("W8MJ"),h=r.n(f),g=r("7W2i"),j=r.n(g),v=r("a1gu"),b=r.n(v),m=r("Nsbk"),x=r.n(m),U=r("q1tI"),y=r.n(U),O=r("QV9d"),I=r("yuBF"),w=r("TSYQ"),k=r.n(w),L=r("INMq"),P=r("WNcC"),S=r("wXCO"),R=r("20a2"),T=r("9XgB"),B=r("7KEy"),N=r("B5JU"),C=r.n(N),q=r("Niza"),D=r("TC67"),E=r("kBz5");r("4x5+");function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x()(e);if(t){var s=x()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return b()(this,r)}}var J=Object(I.inject)("site")(n=Object(I.inject)("user")(n=Object(I.inject)("thread")(n=Object(I.inject)("threadList")(n=Object(I.observer)(n=function(e){j()(r,e);var t=F(r);function r(e){var n,a;l()(this,r),(a=t.call(this,e)).targetUserId=null,a.fansPopupInstance=null,a.followsPopupInstance=null,a.componentDidMount=d()(c.a.mark((function e(){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.props.router.query,n=null===(t=a.props.user)||void 0===t?void 0:t.id,r.id&&"undefined"!==r.id||C.a.replace({url:"/"}),String(n)!==r.id){e.next=6;break}return C.a.replace({url:"/my"}),e.abrupt("return");case 6:if(!r.id){e.next=11;break}return a.targetUserId=r.id,e.next=10,a.props.user.getTargetUserInfo({userId:r.id});case 10:a.setState({fetchUserInfoLoading:!1});case 11:case"end":return e.stop()}}),e)}))),a.componentDidUpdate=d()(c.a.mark((function e(){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.props.router.query,n=null===(t=a.props.user)||void 0===t?void 0:t.id,String(n)!==r.id){e.next=5;break}return C.a.replace({url:"/my"}),e.abrupt("return");case 5:if(String(a.targetUserId)!==String(r.id)){e.next=7;break}return e.abrupt("return");case 7:if(a.targetUserId=r.id,!r.id){e.next=18;break}return a.fansPopupInstance&&a.fansPopupInstance.closePopup(),a.followsPopupInstance&&a.followsPopupInstance.closePopup(),a.props.user.targetUsers[r.id]||a.setState({fetchUserInfoLoading:!0}),a.setState({fetchUserThreadsLoading:!0}),e.next=15,a.props.user.getTargetUserInfo({userId:r.id});case 15:return a.setState({fetchUserInfoLoading:!1}),e.next=18,a.fetchTargetUserThreads();case 18:case"end":return e.stop()}}),e)}))),a.fetchTargetUserThreads=d()(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=a.props.router.query).id){e.next=7;break}return e.next=4,a.props.threadList.fetchList({namespace:"user/".concat(t.id),filter:{toUserId:t.id,complex:5}});case 4:r=e.sent,a.props.threadList.setList({namespace:"user/".concat(t.id),data:r}),a.setState({fetchUserThreadsLoading:!1});case 7:return e.abrupt("return");case 8:case"end":return e.stop()}}),e)}))),a.formatUserThreadsData=function(e){return 0===Object.keys(e).length?[]:Object.values(e).reduce((function(e,t){return[].concat(i()(e),i()(t))}))},a.moreFans=function(){a.setState({showFansPopup:!0})},a.moreFollow=function(){a.setState({showFollowPopup:!0})},a.onSearch=function(e){a.props.router.replace("/search?keyword=".concat(e))},a.renderRight=function(){var e=a.props.router.query,t=null===e||void 0===e?void 0:e.id;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(T.a,{userId:t,getRef:function(e){return a.fansPopupInstance=e}}),Object(s.jsx)(B.a,{userId:t,getRef:function(e){return a.followsPopupInstance=e}}),Object(s.jsx)(S.a,{})]})},a.renderContent=function(){var e=a.state.fetchUserThreadsLoading,t=a.props.threadList,r=(t.lists,a.props.router.query),n=void 0===r?{}:r,i=t.getList({namespace:"user/".concat(n.id)}),o=t.getAttribute({namespace:"user/".concat(n.id),key:"totalCount"}),c=t.getListRequestError({namespace:"user/".concat(n.id)});return Object(s.jsx)("div",{className:O.a.userContent,children:Object(s.jsx)(P.a,{title:"\u4e3b\u9898",type:"normal",bigSize:!0,isShowMore:!1,isLoading:e,leftNum:void 0!==o?"".concat(o,"\u4e2a\u4e3b\u9898"):"",noData:!(null!==i&&void 0!==i&&i.length),mold:"plane",isError:c.isError,errorText:c.errorText,children:i.length>0&&Object(s.jsx)(q.a,{data:i})})})};var o=a.props.router.query;return a.state={showFansPopup:!1,showFollowPopup:!1,fetchUserInfoLoading:!0,fetchUserThreadsLoading:!0},a.props.user.targetUsers[o.id]&&(a.state.fetchUserInfoLoading=!1),o.id&&o.id!==String(null===(n=a.props.user)||void 0===n?void 0:n.id)&&a.props.threadList.clearList({namespace:"user/".concat(o.id)}),a}return h()(r,[{key:"render",value:function(){var e=this.state.fetchUserInfoLoading,t=this.props,r=t.thread,n=t.threadList,a=(n.lists,r.hasRedPacket),i=this.props.router.query,o=void 0===i?{}:i,c=n.getList({namespace:"user/".concat(o.id)}),u=n.getAttribute({namespace:"user/".concat(o.id),key:"totalPage"}),d=n.getAttribute({namespace:"user/".concat(o.id),key:"currentPage"});return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(L.a,{allowRefresh:!1,onRefresh:this.fetchTargetUserThreads,noMore:u<d,showRefresh:!1,onSearch:this.onSearch,immediateCheck:!0,isShowLayoutRefresh:!(null===c||void 0===c||!c.length)&&!e,showHeaderLoading:e,children:[Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:O.a.headerbox,children:Object(s.jsx)("div",{className:O.a.userHeader,children:Object(s.jsx)(D.a,{showHeaderLoading:e,isOtherPerson:!0})})})})}),Object(s.jsxs)("div",{className:O.a.userCenterBody,children:[Object(s.jsx)("div",{className:k()(O.a.userCenterBodyItem,O.a.userCenterBodyLeftItem),children:this.renderContent()}),Object(s.jsx)("div",{className:k()(O.a.userCenterBodyItem,O.a.userCenterBodyRightItem),children:this.renderRight()})]}),a>0&&Object(s.jsx)(E.a,{money:a,onClose:function(){return r.setRedPacket(0)}})]})})}}]),r}(y.a.Component))||n)||n)||n)||n)||n;t.a=Object(R.withRouter)(J)},SZdU:function(e,t,r){"use strict";r.r(t);var n,s=r("nKUr"),a=r("lwsE"),i=r.n(a),o=r("W8MJ"),c=r.n(o),u=r("7W2i"),d=r.n(u),p=r("a1gu"),l=r.n(p),f=r("Nsbk"),h=r.n(f),g=r("q1tI"),j=r("yuBF"),v=r("zrgt"),b=r("QL3K"),m=r("QcND");function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return l()(this,r)}}var U=Object(j.inject)("site")(n=Object(j.observer)(n=function(e){d()(r,e);var t=x(r);function r(){return i()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){return"h5"===this.props.site.platform?Object(s.jsx)(v.a,{}):Object(s.jsx)(b.a,{})}}]),r}(g.Component))||n)||n;t.default=Object(m.a)(U)},zrgt:function(e,t,r){"use strict";r("ma9I"),r("E9XD"),r("tkto"),r("B6y2"),r("rB9j"),r("UxlC"),r("R5XZ");var n,s=r("nKUr"),a=r("RIqP"),i=r.n(a),o=r("o0o1"),c=r.n(o),u=(r("ls82"),r("yXPU")),d=r.n(u),p=r("lwsE"),l=r.n(p),f=r("W8MJ"),h=r.n(f),g=r("7W2i"),j=r.n(g),v=r("a1gu"),b=r.n(v),m=r("Nsbk"),x=r.n(m),U=r("q1tI"),y=r.n(U),O=r("/YC7"),I=r("x2xJ"),w=r.n(I),k=r("jqTq"),L=r.n(k),P=r("Jw8/"),S=r.n(P),R=r("GuWI"),T=r("QLYM"),B=r("yuBF"),N=(r("E+SJ"),r("JhUJ"),r("Niza")),C=r("INMq"),q=(r("HoAE"),r("DTmq")),D=r("20a2"),E=r("B5JU"),F=r.n(E),J=r("Tk/S");r("4x5+");function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x()(e);if(t){var s=x()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return b()(this,r)}}var M=Object(B.inject)("site")(n=Object(B.inject)("user")(n=Object(B.inject)("thread")(n=Object(B.inject)("threadList")(n=Object(B.observer)(n=function(e){j()(r,e);var t=_(r);function r(e){var n;l()(this,r),(n=t.call(this,e)).targetUserId=null,n.componentDidMount=d()(c.a.mark((function e(){var t,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props.router.query,s=null===(t=n.props.user)||void 0===t?void 0:t.id,r.id&&"undefined"!==r.id||F.a.replace({url:"/"}),String(s)!==r.id){e.next=6;break}return F.a.replace({url:"/my"}),e.abrupt("return");case 6:if(!r.id){e.next=12;break}return e.next=9,n.props.user.getTargetUserInfo({userId:r.id});case 9:n.setWeixinShare(),n.targetUserId=r.id,n.setState({fetchUserInfoLoading:!1});case 12:case"end":return e.stop()}}),e)}))),n.componentDidUpdate=d()(c.a.mark((function e(){var t,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.props.router.query,s=null===(t=n.props.user)||void 0===t?void 0:t.id,r.id&&"undefined"!==r.id||F.a.replace({url:"/"}),String(s)!==r.id){e.next=6;break}return F.a.replace({url:"/my"}),e.abrupt("return");case 6:if(n.targetUserId){e.next=8;break}return e.abrupt("return");case 8:if(String(n.targetUserId)!==String(r.id)){e.next=10;break}return e.abrupt("return");case 10:if(n.targetUserId=r.id,!r.id){e.next=20;break}return n.props.user.targetUsers[r.id]||n.setState({fetchUserInfoLoading:!0}),n.setState({fetchUserThreadsLoading:!0}),e.next=16,n.props.user.getTargetUserInfo({userId:r.id});case 16:return n.setWeixinShare(),n.setState({fetchUserInfoLoading:!1}),e.next=20,n.fetchTargetUserThreads();case 20:case"end":return e.stop()}}),e)}))),n.fetchTargetUserThreads=d()(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.props.router.query).id){e.next=6;break}return e.next=4,n.props.threadList.fetchList({namespace:"user/".concat(t.id),filter:{toUserId:t.id,complex:5}});case 4:r=e.sent,n.props.threadList.setList({namespace:"user/".concat(t.id),data:r});case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)}))),n.formatUserThreadsData=function(e){return 0===Object.keys(e).length?[]:Object.values(e).reduce((function(e,t){return[].concat(i()(e),i()(t))}))},n.handlePreviewBgImage=function(e){e&&e.stopPropagation(),n.setState({isPreviewBgVisible:!n.state.isPreviewBgVisible})},n.getBackgroundUrl=function(){var e,t=null,r=n.props.router.query,s=null===r||void 0===r?void 0:r.id;return s&&null!==(e=n.props.user)&&void 0!==e&&e.targetUsers[s]&&(t=n.props.user.targetUsers[s].originalBackGroundUrl),t||!1};var s=n.props.router.query;return n.state={fetchUserInfoLoading:!0,isPreviewBgVisible:!1},n.props.user.targetUsers[s.id]&&(n.state.fetchUserInfoLoading=!1),n}return h()(r,[{key:"setWeixinShare",value:function(){var e=this;setTimeout((function(){var t=e.props.user.targetUser;if(t){var r=t.nickname,n=t.avatarUrl,s=t.signature,a=t.id,i="".concat(r,"\u7684\u4e3b\u9875"),o=n,c=s?s.length>35?"".concat(s.substr(0,35),"..."):s:"\u5728\u8fd9\u91cc\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9",u="".concat(window.location.origin,"/user/").concat(a);Object(J.a)(i,c,u,o)}}),500)}},{key:"render",value:function(){var e=this,t=this.props,r=t.site,n=(t.user,t.thread),a=t.threadList,i=r.platform,o=(a.lists,n.hasRedPacket),c=this.props.router.query,u=void 0===c?{}:c,d=null===u||void 0===u?void 0:u.id,p=a.getList({namespace:"user/".concat(d)}),l=a.getAttribute({namespace:"user/".concat(d),key:"totalPage"}),f=a.getAttribute({namespace:"user/".concat(d),key:"totalCount"}),h=a.getAttribute({namespace:"user/".concat(d),key:"currentPage"});return Object(s.jsxs)(C.a,{showHeader:!0,showTabBar:!1,immediateCheck:!0,onRefresh:this.fetchTargetUserThreads,noMore:l<h,showRefresh:!this.state.fetchUserInfoLoading,children:[Object(s.jsxs)("div",{className:O.a.mobileLayout,children:[this.state.fetchUserInfoLoading&&Object(s.jsx)("div",{className:O.a.loadingSpin,children:Object(s.jsx)(L.a,{type:"spinner",children:"\u52a0\u8f7d\u4e2d..."})}),!this.state.fetchUserInfoLoading&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{onClick:this.handlePreviewBgImage,children:Object(s.jsx)(R.a,{isOtherPerson:!0})}),Object(s.jsx)(T.a,{platform:i,isOtherPerson:!0})]}),Object(s.jsxs)("div",{className:O.a.unit,children:[Object(s.jsxs)("div",{className:O.a.threadUnit,children:[Object(s.jsx)("div",{className:O.a.threadTitle,children:"\u4e3b\u9898"}),Object(s.jsx)("div",{className:O.a.threadCount,children:void 0===f?"":"".concat(f,"\u4e2a\u4e3b\u9898")})]}),Object(s.jsx)("div",{className:O.a.dividerContainer,children:Object(s.jsx)(w.a,{className:O.a.divider})}),Object(s.jsx)("div",{className:O.a.threadItemContainer,children:p.length>0&&Object(s.jsx)(N.a,{data:p})})]})]}),this.getBackgroundUrl()&&this.state.isPreviewBgVisible&&Object(s.jsx)(S.a,{visible:this.state.isPreviewBgVisible,onClose:this.handlePreviewBgImage,imgUrls:[this.getBackgroundUrl()],currentUrl:this.getBackgroundUrl(),onError:function(){var t;return d&&(null===(t=e.props.user)||void 0===t?void 0:t.targetUsers[d])&&e.props.user.targetUsers[d].backgroundUrl||""}}),o>0&&Object(s.jsx)(q.a,{money:o,onClose:function(){return n.setRedPacket(0)}})]})}}]),r}(y.a.Component))||n)||n)||n)||n)||n;t.a=Object(D.withRouter)(M)}},[["91s+",0,1,5,4,6,7,3,2]]]);