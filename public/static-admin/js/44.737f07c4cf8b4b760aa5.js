(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"Bj/X":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("QbLZ"));r("z99J");var o=n(r("RCrl"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"order-details"},o.default)},D40Z:function(e,t,r){"use strict";r.r(t);var a=r("Emro"),o=r("PsjA");for(var n in o)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(n);var l=r("KHd+"),i=Object(l.a)(o.default,a.a,a.b,!1,null,null,null);t.default=i.exports},Emro:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"order-record-box"},[t("div",{staticClass:"order-record__search-box"},[t("div",{staticClass:"order-record__search-condition"},[t("span",{staticClass:"order-record__search-condition__title"},[e._v("订单号：")]),e._v(" "),t("el-input",{attrs:{clearable:"",placeholder:"搜索订单号"},model:{value:e.orderNumber,callback:function(t){e.orderNumber=t},expression:"orderNumber"}})],1),e._v(" "),t("div",{staticClass:"order-record__search-condition"},[t("span",{staticClass:"order-record__search-condition__title"},[e._v("订单时间：")]),e._v(" "),t("el-date-picker",{attrs:{clearable:"",type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleTimeChange},model:{value:e.orderTime,callback:function(t){e.orderTime=t},expression:"orderTime"}})],1),e._v(" "),t("div",{staticClass:"order-record__search-condition"},[t("span",{staticClass:"order-record__search-condition__title"},[e._v("发起方：")]),e._v(" "),t("el-input",{attrs:{clearable:"",placeholder:"搜索发起方"},model:{value:e.operationUser,callback:function(t){e.operationUser=t},expression:"operationUser"}})],1),e._v(" "),t("div",{staticClass:"order-record__search-condition"},[t("span",{staticClass:"order-record__search-condition__title"},[e._v("商品：")]),e._v(" "),t("el-input",{attrs:{clearable:"",placeholder:"搜索商品"},model:{value:e.commodity,callback:function(t){e.commodity=t},expression:"commodity"}})],1),e._v(" "),t("div",{staticClass:"order-record__search-condition"},[t("span",{staticClass:"order-record__search-condition__title"},[e._v("订单状态：")]),e._v(" "),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),t("div",{staticClass:"order-record__search-condition"},[t("span",{staticClass:"order-record__search-condition__title"},[e._v("订单类型：")]),e._v(" "),t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.orderValue,callback:function(t){e.orderValue=t},expression:"orderValue"}},e._l(e.orderType,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),t("div",{staticClass:"order-record__search-condition"},[t("span",{staticClass:"order-record__search-condition__title"},[e._v("收入方：")]),e._v(" "),t("el-input",{attrs:{clearable:"",placeholder:"搜索收入方"},model:{value:e.incomeSide,callback:function(t){e.incomeSide=t},expression:"incomeSide"}})],1),e._v(" "),t("div",{staticClass:"order-record__search-condition"},[t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.searchClick}},[e._v("搜索")])],1)]),e._v(" "),t("div",{staticClass:"order-record-table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"orderSn",label:"订单号","min-width":"110"}}),e._v(" "),t("el-table-column",{attrs:{prop:"nickname",label:"发起方"}}),e._v(" "),t("el-table-column",{attrs:{prop:"payeeNickname",label:"收入方"}}),e._v(" "),t("el-table-column",{attrs:{prop:"thread.title","show-overflow-tooltip":"",label:"商品名称","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(r){return[!r.row.thread||2!==r.row.type&&3!==r.row.type&&5!==r.row.type&&6!==r.row.type&&7!==r.row.type&&8!==r.row.type&&9!==r.row.type&&10!==r.row.type&&11!==r.row.type?1===r.row.type?t("span",{on:{click:function(t){return e.viewClick("")}}},[e._v("\n            注册付费\n          ")]):4===r.row.type?t("span",{on:{click:function(t){return e.viewClick("")}}},[e._v("\n            "+e._s(r.row.group?r.row.group.name:"")+"用户组\n          ")]):e._e():t("span",{class:r.row.thread?"cursor-pointer":"",on:{click:function(t){return e.viewClick(r.row.thread?r.row.thread.threadId:"")}}},[e._v("\n            "+e._s(r.row.thread.title)+"\n          ")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"thread.content","show-overflow-tooltip":"",label:"类型","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(r){return[1===r.row.type?t("span",[e._v("\n            注册(站点付费加入)\n          ")]):2===r.row.type?t("span",[e._v("\n            打赏\n          ")]):3===r.row.type?t("span",[e._v("\n            购买主题\n          ")]):4===r.row.type?t("span",[e._v("\n            购买权限组\n          ")]):5===r.row.type?t("span",[e._v("\n            付费提问\n          ")]):6===r.row.type?t("span",[e._v("\n            问答围观付费\n          ")]):7===r.row.type?t("span",[e._v("\n            购买附件\n          ")]):8===r.row.type?t("span",[e._v("\n            站点付费(续费)\n          ")]):9===r.row.type?t("span",[e._v("\n            红包\n          ")]):10===r.row.type?t("span",[e._v("\n            悬赏\n          ")]):11===r.row.type?t("span",[e._v("\n            合并订单(红包+悬赏合并支付)\n          ")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"amount",label:"金额",width:"100"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createdAt",label:"订单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.formatDate(t.row.createdAt)))]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.cashStatus(t.row.status)))]}}])})],1),e._v(" "),e.pageCount>1?t("Page",{attrs:{"current-page":e.currentPaga,"page-size":10,total:e.total},on:{"current-change":e.handleCurrentChange}}):e._e()],1)])},o=[]},PsjA:function(e,t,r){"use strict";r.r(t);var a=r("Bj/X"),o=r.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t.default=o.a},RCrl:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r("4gYi")),o=l(r("rWG0")),n=l(r("VVfg"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{tableData:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-7776e6),e.$emit("pick",[r,t])}}]},orderNumber:"",operationUser:"",commodity:"",orderTime:["",""],incomeSide:"",pageCount:0,currentPaga:1,total:0,options:[{value:"0",label:"待付款"},{value:"1",label:"已付款"},{value:"2",label:"取消订单"},{value:"3",label:"支付失败"},{value:"4",label:"订单过期"},{value:"5",label:"部分退款"},{value:"10",label:"全额退款"},{value:"11",label:"在异常订单处理中不进行处理的订单"}],orderType:[{value:"1",label:"注册"},{value:"2",label:"打赏"},{value:"3",label:"付费主题"},{value:"4",label:"付费用户组"},{value:"5",label:"问答提问"},{value:"6",label:"问答围观"},{value:"7",label:"付费附件"},{value:"8",label:"站点续费"},{value:"9",label:"红包"},{value:"10",label:"悬赏"},{value:"11",label:"合并支付"},{value:"20",label:"文字贴红包"},{value:"21",label:"长文贴红包"}],value:"",orderValue:""}},methods:{handleTimeChange:function(){null!=this.orderTime&&(this.orderTime[0]=this.orderTime[0]+"-00-00-00",this.orderTime[1]=this.orderTime[1]+"-24-00-00")},viewClick:function(e){if(e){var t=this.$router.resolve({path:"/thread/"+e});window.open(t.href,"_blank")}},cashStatus:function(e){switch(e){case 0:return"待付款";case 1:return"已付款";case 2:return"取消订单";case 3:return"支付失败";case 4:return"订单过期";case 5:return"部分退款";case 10:return"全额退款";case 11:return"在异常订单处理中不进行处理的订单";default:return"未知状态"}},searchClick:function(){this.orderTime=null==this.orderTime?["",""]:this.orderTime,this.currentPaga=1,this.getOrderList()},handleCurrentChange:function(e){this.currentPaga=e,this.getOrderList()},formatDate:function(e){return this.$dayjs(e).format("YYYY-MM-DD HH:mm")},getOrderList:function(){var e=this;this.appFetch({url:"orderLogs_get_v3",method:"get",data:{page:this.currentPaga,perPage:10,"filter[orderSn]":this.orderNumber,"filter[product]":this.commodity,"filter[nickname]":this.operationUser,"filter[startTime]":this.orderTime[0],"filter[endTime]":this.orderTime[1],"filter[status]":this.value,"filter[type]":this.orderValue,"filter[payeeNickname]":this.incomeSide}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);var r=t.Data;e.tableData=[],e.tableData=r.pageData||[],e.pageCount=r.totalPage,e.total=r.totalCount}})).catch((function(e){}))},getCreated:function(e){this.currentPaga=e?1:Number(n.default.getLItem("currentPag"))||1,this.getOrderList()}},beforeRouteEnter:function(e,t,r){r((function(r){e.name!==t.name&&null!==t.name?r.getCreated(!0):r.getCreated(!1)}))},components:{Card:a.default,Page:o.default}}}}]);