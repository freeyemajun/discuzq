(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"2Ebl":function(e,t,a){"use strict";a.r(t);var r=a("k0Bk"),i=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t.default=i.a},KJA6:function(e,t,a){},PPjN:function(e,t,a){"use strict";a.r(t);var r=a("hxbm"),i=a("2Ebl");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("Xa5E");var n=a("KHd+"),o=Object(n.a)(i.default,r.a,r.b,!1,null,null,null);t.default=o.exports},Xa5E:function(e,t,a){"use strict";a("KJA6")},hxbm:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"site-set-box"},[t("Card",{attrs:{header:"开启水印："}},[t("CardRow",{attrs:{description:"是否开启水印"}},[t("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:e.switchBtn,callback:function(t){e.switchBtn=t},expression:"switchBtn"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"图片："}},[t("CardRow",{attrs:{description:"请选择图片（.png格式）进行上传"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","http-request":e.uploaderLogo,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},on:{change:e.handleFile}},[e.imageUrl?t("div",{staticClass:"avatar"},[t("img",{staticClass:"avatar-LogoImage",attrs:{src:e.imageUrl}})]):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),t("el-button",{style:{opacity:e.deleteBtn?"1":"0",cursor:e.deleteBtn?"pointer":"auto"},attrs:{type:"text"},on:{click:e.deleteImage}},[e._v("删除")])],1)],1),e._v(" "),t("Card",{attrs:{header:"水印位置："}},[t("CardRow",{attrs:{description:"请选择水印所在的位置"}},[t("div",{staticClass:"posi-list"},e._l(e.posiList,(function(a,r){return t("span",{key:r,staticClass:"posi-child",class:{posiactive:r==e.posiCurrent},on:{click:function(t){return e.posiClick(a.val,r)}}},[e._v(e._s(a.name))])})),0)])],1),e._v(" "),t("Card",{attrs:{header:"边距："}},[t("CardRow",{attrs:{description:"请选择水印距离图片的边距"}},[t("div",{staticClass:"proportion-box"},[t("span",[e._v("垂直")]),e._v(" "),t("el-input",{attrs:{size:"small",type:"number"},model:{value:e.verticalSpacing,callback:function(t){e.verticalSpacing=t},expression:"verticalSpacing"}}),e._v(" "),t("span",{staticClass:"marL10"},[e._v("PX")])],1),e._v(" "),t("div",{staticClass:"proportion-box"},[t("span",[e._v("水平")]),e._v(" "),t("el-input",{attrs:{size:"small",type:"number"},model:{value:e.horizontalSpacing,callback:function(t){e.horizontalSpacing=t},expression:"horizontalSpacing"}}),e._v(" "),t("span",{staticClass:"marL10"},[e._v("PX")])],1)])],1),e._v(" "),t("Card",{staticClass:"footer-btn"},[t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.submi}},[e._v("提交")])],1)],1)},i=[]},k0Bk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a("QbLZ")),i=s(a("ohWj"));function s(e){return e&&e.__esModule?e:{default:e}}a("lpfh"),t.default=(0,r.default)({name:"water-mark-set-view"},i.default)},ohWj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a("4gYi")),i=s(a("pNQN"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{switchBtn:!1,deleteBtn:!1,imageUrl:"",imgWidth:0,imgHeight:0,posiCurrent:-1,posiList:[{name:"左上",val:1},{name:"中上",val:2},{name:"右上",val:3},{name:"左中",val:4},{name:"居中",val:5},{name:"右中",val:6},{name:"左下",val:7},{name:"中下",val:8},{name:"右下",val:9}],waterMarkPosi:0,verticalSpacing:0,horizontalSpacing:0}},created:function(){this.waterMarkSet()},methods:{waterMarkSet:function(){var e=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);var a=t.Data;e.switchBtn=a.watermark.watermark,e.imageUrl=a.watermark.watermarkImage,""!==e.imageUrl&&null!=e.imageUrl&&(e.deleteBtn=!0),""!==a.watermark.position&&null!=a.watermark.position&&0!==a.watermark.position&&(e.posiCurrent=a.watermark.position-1,e.waterMarkPosi=a.watermark.position),e.verticalSpacing=a.watermark.verticalSpacing,e.horizontalSpacing=a.watermark.horizontalSpacing}}))},submi:function(){var e=this,t=/^[0-9]*$/;if(this.switchBtn){if(!this.imageUrl)return void this.$message.error("请上传水印图片");if(!this.waterMarkPosi)return void this.$message.error("请选择水印位置");if(t.test(this.verticalSpacing)>9999)return void this.$message.error("请输入正确格式的垂直边距值");if(t.test(this.horizontalSpacing)>9999)return void this.$message.error("请输入正确格式的水平边距值");if(this.verticalSpacing>9999)return void this.$message.error("垂直边距值不能超过9999");if(this.horizontalSpacing>9999)return void this.$message.error("水平边距值不能超过9999")}this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"watermark",value:this.switchBtn,tag:"watermark"},{key:"position",value:this.waterMarkPosi,tag:"watermark"},{key:"vertical_spacing",value:this.verticalSpacing,tag:"watermark"},{key:"horizontal_spacing",value:this.horizontalSpacing,tag:"watermark"}]}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"提交成功",type:"success"}),e.annexSet()}})).catch((function(e){}))},beforeAvatarUpload:function(e){var t="image/png"===e.type,a=e.size/1024/1024<2;return t?a?t&&a:(this.$message.warning("上传头像图片大小不能超过 2MB!"),a):(this.$message.warning("上传水印图片只能是 PNG 格式!"),t)},uploaderLogo:function(e){var t=this,a=new FormData;a.append("logo",e.file),a.append("type","watermark_image"),this.appFetch({url:"settings_logo_post_v3",method:"post",data:a}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);t.imageUrl=e.Data.value,t.$message({message:"上传成功",type:"success"}),t.deleteBtn=!0}})).catch((function(e){}))},deleteImage:function(e,t){var a=this;!1!==this.deleteBtn&&(this.imageUrl="",this.appFetch({url:"delete_logo_post_v3",method:"post",data:{type:"watermark_image"}}).then((function(e){if(e.errors)a.$message.error(e.errors[0].code);else{if(0!==e.Code)return void a.$message.error(e.Message);a.$message("删除成功"),a.deleteBtn=!1}})).catch((function(e){})))},handleAvatarSuccess:function(e,t){},handleFile:function(){},posiClick:function(e,t){this.posiCurrent=t,this.waterMarkPosi=e}},components:{Card:r.default,CardRow:i.default}}}}]);