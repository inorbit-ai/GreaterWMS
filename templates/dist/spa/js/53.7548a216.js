(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{a4be:function(t,e,a){"use strict";var s=a("a683"),i=a.n(s);e["default"]=i.a},a683:function(t,e){},cc62:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-input",{staticStyle:{display:"none"},model:{value:t.scaneddata.request_time,callback:function(e){t.$set(t.scaneddata,"request_time",e)},expression:"scaneddata.request_time"}}),a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],style:{width:t.width,height:t.height}},[a("q-card-section",[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("refresh")},on:{click:function(e){return t.reFresh()}}}),a("q-btn",{attrs:{color:"purple",label:t.$t("stock.view_stocklist.cyclecountresult")}})],1)],1),a("q-scroll-area",{style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(t._s(t.bin_name_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.goods_code_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.physical_label))]),a("th",{staticClass:"text-right"},[t._v(t._s(t.action_label))])])]),a("tbody",[t._l(t.table_list,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v(t._s(e.bin_name))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_code))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.physical_inventory))]),a("td",{staticClass:"text-right"},[a("q-btn",{staticStyle:{width:"50px"},attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(e){return t.repeatCount(s)}}})],1)])}))],2)])],1),a("q-separator",{attrs:{dark:""}})],1)],1)},i=[],n=a("3004"),o=a("18d6"),l=a("09f9"),c={name:"Pagezebra_cyclecount",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",width:"",height:"",scroll_height:"",table_list:[],bin_name_label:this.$t("warehouse.view_binset.bin_name"),goods_code_label:this.$t("stock.view_stocklist.goods_code"),physical_label:this.$t("stock.view_stocklist.physical_inventory"),action_label:this.$t("action"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},bin_scan:"",goods_scan:""}},methods:{getList(){var t=this;o["a"].has("auth")&&Object(n["e"])(t.pathname,{}).then((e=>{t.table_list=e.results})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.barscan="",t.bin_scan="",t.goods_scan="",t.getList()},barshow(){console.log(10,this.scaneddata)}},created(){var t=this;o["a"].has("openid")?t.openid=o["a"].getItem("openid"):(t.openid="",o["a"].set("openid","")),o["a"].has("login_name")?t.login_name=o["a"].getItem("login_name"):(t.login_name="",o["a"].set("login_name","")),o["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;t.width=1*l["a"].width+"px",t.height=l["a"].height-50+"px",t.scroll_height=l["a"].height-175+"px",t.bin_scan="",t.goods_scan="",t.getList()},computed:{fab:{get(){return console.log("7",this.$store.state.fabchange.fab),this.$store.state.fabchange.fab}},scaneddata:{get(){return console.log("8",this.$store.state.scanedsolve.scaneddata),this.$store.state.scanedsolve.scaneddata}}},updated(){console.log(11,this.scaneddata)},beforeDestroy(){},destroyed(){}},r=c,h=a("42e1"),d=a("a4be"),u=a("9989"),b=a("27f9"),_=a("f09f"),p=a("a370"),g=a("e7a9"),f=a("9c40"),m=a("4983"),y=a("2bb1"),v=a("eb85"),w=a("eebe"),x=a.n(w),k=Object(h["a"])(r,s,i,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(k);e["default"]=k.exports;x()(k,"components",{QPage:u["a"],QInput:b["a"],QCard:_["a"],QCardSection:p["a"],QBtnGroup:g["a"],QBtn:f["a"],QScrollArea:m["a"],QMarkupTable:y["a"],QSeparator:v["a"]})}}]);