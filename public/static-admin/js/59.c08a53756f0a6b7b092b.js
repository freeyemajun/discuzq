(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{ETVB:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(s("QbLZ"));s("lpfh");var c=a(s("RIZz"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)({name:"site-function-set-view"},c.default)},RIZz:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(s("4gYi")),c=a(s("pNQN"));function a(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{reward:!1,closeListreward:[],closeSelectListreward:[],closeListareward:[],closeSelectListareward:[],closeListredpacket:[],closeSelectListredpacket:[],closeListanonymous:[],closeSelectListanonymous:[],closeListpersonalletter:[],closeSelectListpersonalletter:[],closeListshop:[],closeSelectListshop:[],closeListpay:[],closeSelectListpay:[],closeListusergroup:[],closeSelectListusergroup:[],closeListrecharge:[],closeSelectListrecharge:[],closeListwithdrawal:[],closeSelectListwithdrawal:[],closeListcomment:[],closeSelectListcomment:[],titles:!1,recharge:!1}},methods:{loadFunctionStatus:function(){var e=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);var s=t.Data;e.reward=s.other.threadOptimize,e.recharge=1===s.setSite.siteCharge,e.titles=1===s.setSite.siteTitles,e.closeListreward=s.setSite.siteRewards||[],e.closeSelectListreward=e.closeListreward.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListareward=s.setSite.siteAreward||[],e.closeSelectListareward=e.closeListareward.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListredpacket=s.setSite.siteRedpacket||[],e.closeSelectListredpacket=e.closeListredpacket.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListanonymous=s.setSite.siteAnonymous||[],e.closeSelectListanonymous=e.closeListanonymous.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListpersonalletter=s.setSite.sitePersonalletter||[],e.closeSelectListpersonalletter=e.closeListpersonalletter.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListshop=s.setSite.siteShop||[],e.closeSelectListshop=e.closeListshop.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListpay=s.setSite.sitePay||[],e.closeSelectListpay=e.closeListpay.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListusergroup=s.setSite.siteUsergroup||[],e.closeSelectListusergroup=e.closeListusergroup.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListrecharge=s.setSite.siteRecharges||[],e.closeSelectListrecharge=e.closeListrecharge.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListwithdrawal=s.setSite.siteWithdrawal||[],e.closeSelectListwithdrawal=e.closeListwithdrawal.reduce((function(e,t){return t.value&&e.push(t.key),e}),[]),e.closeListcomment=s.setSite.siteComment||[],e.closeSelectListcomment=e.closeListcomment.reduce((function(e,t){return t.value&&e.push(t.key),e}),[])}})).catch((function(e){}))},handlePublishingSubmit:function(){var e=this;this.appFetch({url:"thread_optimize_post",method:"post",data:{isDisplay:this.reward?1:0}}).then((function(t){if(t.errors)t.errors[0].detail?e.$message.error(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.rechargePost()}})).catch((function(e){}))},rechargePost:function(){var e=this,t=this.closeListreward.map((function(t){return t.value=-1!=e.closeSelectListreward.indexOf(t.key),t})),s=this.closeListareward.map((function(t){return t.value=-1!=e.closeSelectListareward.indexOf(t.key),t})),r=this.closeListredpacket.map((function(t){return t.value=-1!=e.closeSelectListredpacket.indexOf(t.key),t})),c=this.closeListanonymous.map((function(t){return t.value=-1!=e.closeSelectListanonymous.indexOf(t.key),t})),a=this.closeListpersonalletter.map((function(t){return t.value=-1!=e.closeSelectListpersonalletter.indexOf(t.key),t})),l=this.closeListshop.map((function(t){return t.value=-1!=e.closeSelectListshop.indexOf(t.key),t})),o=this.closeListpay.map((function(t){return t.value=-1!=e.closeSelectListpay.indexOf(t.key),t})),i=this.closeListusergroup.map((function(t){return t.value=-1!=e.closeSelectListusergroup.indexOf(t.key),t})),n=this.closeListrecharge.map((function(t){return t.value=-1!=e.closeSelectListrecharge.indexOf(t.key),t})),u=this.closeListwithdrawal.map((function(t){return t.value=-1!=e.closeSelectListwithdrawal.indexOf(t.key),t})),d=this.closeListcomment.map((function(t){return t.value=-1!=e.closeSelectListcomment.indexOf(t.key),t}));this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"site_charge",value:this.recharge?1:0,tag:"default"},{key:"site_rewards",value:t,tag:"default"},{key:"site_areward",value:s,tag:"default"},{key:"site_redpacket",value:r,tag:"default"},{key:"site_anonymous",value:c,tag:"default"},{key:"site_personalletter",value:a,tag:"default"},{key:"site_shop",value:l,tag:"default"},{key:"site_pay",value:o,tag:"default"},{key:"site_usergroup",value:i,tag:"default"},{key:"site_recharges",value:n,tag:"default"},{key:"site_withdrawal",value:u,tag:"default"},{key:"site_comment",value:d,tag:"default"},{key:"site_titles",value:this.titles?1:0,tag:"default"}]}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"提交成功",type:"success"}),e.loadFunctionStatus()}})).catch((function(t){e.$message.error("操作失败！")}))}},created:function(){this.loadFunctionStatus()},components:{Card:r.default,CardRow:c.default}}},l4bN:function(e,t,s){"use strict";s.r(t);var r=s("ETVB"),c=s.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return r[e]}))}(a);t.default=c.a},oB4s:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return c}));var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"site-function-set-box"},[t("Card",{staticClass:"recharge-points"},[t("div",{staticClass:"recharge-points__lf"},[t("el-checkbox",{model:{value:e.titles,callback:function(t){e.titles=t},expression:"titles"}},[e._v("标题")])],1),e._v(" "),t("div",{staticClass:"recharge-points__rf"},[t("p",[e._v("开启标题。")]),e._v(" "),t("p",[e._v("关闭标题")])])]),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"打赏开启："}},[t("CardRow",{attrs:{description:"打赏开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListreward,callback:function(t){e.closeSelectListreward=t},expression:"closeSelectListreward"}},e._l(e.closeListreward,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"悬赏开启："}},[t("CardRow",{attrs:{description:"悬赏开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListareward,callback:function(t){e.closeSelectListareward=t},expression:"closeSelectListareward"}},e._l(e.closeListareward,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"红包开启："}},[t("CardRow",{attrs:{description:"红包开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListredpacket,callback:function(t){e.closeSelectListredpacket=t},expression:"closeSelectListredpacket"}},e._l(e.closeListredpacket,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"匿名开启："}},[t("CardRow",{attrs:{description:"匿名开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListanonymous,callback:function(t){e.closeSelectListanonymous=t},expression:"closeSelectListanonymous"}},e._l(e.closeListanonymous,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"私信开启："}},[t("CardRow",{attrs:{description:"私信开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListpersonalletter,callback:function(t){e.closeSelectListpersonalletter=t},expression:"closeSelectListpersonalletter"}},e._l(e.closeListpersonalletter,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"商品开启："}},[t("CardRow",{attrs:{description:"商品开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListshop,callback:function(t){e.closeSelectListshop=t},expression:"closeSelectListshop"}},e._l(e.closeListshop,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"帖子付费开启："}},[t("CardRow",{attrs:{description:"帖子付费开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListpay,callback:function(t){e.closeSelectListpay=t},expression:"closeSelectListpay"}},e._l(e.closeListpay,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"用户组付费开启："}},[t("CardRow",{attrs:{description:"用户组付费开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListusergroup,callback:function(t){e.closeSelectListusergroup=t},expression:"closeSelectListusergroup"}},e._l(e.closeListusergroup,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"充值开启："}},[t("CardRow",{attrs:{description:"充值开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListrecharge,callback:function(t){e.closeSelectListrecharge=t},expression:"closeSelectListrecharge"}},e._l(e.closeListrecharge,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"提现开启："}},[t("CardRow",{attrs:{description:"提现开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListwithdrawal,callback:function(t){e.closeSelectListwithdrawal=t},expression:"closeSelectListwithdrawal"}},e._l(e.closeListwithdrawal,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",{staticClass:"card-radio-con",attrs:{header:"评论开启："}},[t("CardRow",{attrs:{description:"评论开启，勾选则代表开启"}},[t("el-checkbox-group",{model:{value:e.closeSelectListcomment,callback:function(t){e.closeSelectListcomment=t},expression:"closeSelectListcomment"}},e._l(e.closeListcomment,(function(s){return t("el-checkbox",{key:s.key,attrs:{label:s.key}},[e._v("\n          "+e._s(s.desc)+"\n        ")])})),1)],1)],1),e._v(" "),t("Card",[t("CardRow",{staticClass:"publishing-title other"},[e._v("\n      其它功能\n    ")])],1),e._v(" "),t("Card",[t("CardRow",{staticClass:"card-points",attrs:{description:"一键关闭,关闭后，这些功能将无法在站内使用。(仅限小程序)"}},[t("el-checkbox",{model:{value:e.reward,callback:function(t){e.reward=t},expression:"reward"}},[e._v("打赏、悬赏、红包、匿名、私信、商品、帖子付费、用户组付费、充值，提现")])],1)],1),e._v(" "),t("Card",{staticClass:"recharge-points"},[t("div",{staticClass:"recharge-points__lf"},[t("el-checkbox",{model:{value:e.recharge,callback:function(t){e.recharge=t},expression:"recharge"}},[e._v("充值")])],1),e._v(" "),t("div",{staticClass:"recharge-points__rf"},[t("p",[e._v("开启后，用户可在站内自主充值钱包余额。")]),e._v(" "),t("p",[e._v("根据相关规定，开启自动充值功能站长需先取得ICP增值业务许可证，请确保已获取相关资质后开启本功能，否则责任自负")])])]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.handlePublishingSubmit}},[e._v("提交")])],1)},c=[]},xMor:function(e,t,s){"use strict";s.r(t);var r=s("oB4s"),c=s("l4bN");for(var a in c)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return c[e]}))}(a);var l=s("KHd+"),o=Object(l.a)(c.default,r.a,r.b,!1,null,null,null);t.default=o.exports}}]);