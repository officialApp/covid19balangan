(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-app-covid-admin-covid-index~e1a6d9cf"],{9433:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-6 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow p-3 rounded-lg"},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-sm table-striped table-bordered"},[e("tr",[e("td",{staticClass:"capitalize"},[t._v("wilayah")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("v-select",{attrs:{options:t.wilayah,label:"kecamatan",reduce:function(t){return t.id}},model:{value:t.vdata.wilayah,callback:function(a){t.$set(t.vdata,"wilayah",a)},expression:"vdata.wilayah"}})],1)]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("tanggal")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal,expression:"vdata.tanggal"}],staticClass:"form-control form-control-sm",attrs:{type:"date",id:"tanggal",name:"tanggal",placeholder:"tanggal"},domProps:{value:t.vdata.tanggal},on:{input:function(a){a.target.composing||t.$set(t.vdata,"tanggal",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("odp")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.odp,expression:"vdata.odp"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"odp",name:"odp",placeholder:"odp"},domProps:{value:t.vdata.odp},on:{input:function(a){a.target.composing||t.$set(t.vdata,"odp",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("pdp")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.pdp,expression:"vdata.pdp"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"pdp",name:"pdp",placeholder:"pdp"},domProps:{value:t.vdata.pdp},on:{input:function(a){a.target.composing||t.$set(t.vdata,"pdp",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("positif")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.positif,expression:"vdata.positif"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"positif",name:"positif",placeholder:"positif"},domProps:{value:t.vdata.positif},on:{input:function(a){a.target.composing||t.$set(t.vdata,"positif",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("sembuh")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.sembuh,expression:"vdata.sembuh"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"sembuh",name:"sembuh",placeholder:"sembuh"},domProps:{value:t.vdata.sembuh},on:{input:function(a){a.target.composing||t.$set(t.vdata,"sembuh",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"capitalize"},[t._v("meninggal")]),e("td",{staticClass:"pl-2 pr-2"},[t._v(":")]),e("td",[e("div",{staticClass:"sm-form "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.meninggal,expression:"vdata.meninggal"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"meninggal",name:"meninggal",placeholder:"meninggal"},domProps:{value:t.vdata.meninggal},on:{input:function(a){a.target.composing||t.$set(t.vdata,"meninggal",a.target.value)}}})])])])])]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])])]),e("div",{staticClass:"col-6 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow rounded-lg p-2"},[t.datanya.length>0?e("div",{staticClass:"p-2"},[e("div",{staticClass:"text-right"},[e("vue-json-excel",{attrs:{data:t.datanya}},[e("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v(" Export "),e("span",{staticClass:"typcn typcn-chart-area"})])])],1),e("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:["wilayah"]},on:{selected:t.ambil}})],1):t._e()])])])])])},n=[],i=e("1da1"),o=(e("96cf"),e("2896")),l=e("6be6"),r=new o["a"],d={layout:"app_gis",components:{Btables:l["a"]},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[],wilayah:[]}},methods:{app_gis_covid_balangan:function(){this.$refs.btable.getData()},getData:function(){var t=this;r.collection("app_gis_covid_balangan").doc().select("select tb1.id,tb1.wilayah,tb2.kecamatan,tb1.tanggal,tb1.odp,tb1.pdp,tb1.positif,tb1.meninggal,tb1.sembuh from app_gis_covid_balangan tb1 left join app_gis_wilayah_balangan tb2 on tb2.id=tb1.wilayah").then((function(a){t.datanya=a,t.$forceUpdate()})),r.collection("app_gis_wilayah_balangan").doc().select("select * from app_gis_wilayah_balangan").then((function(a){t.wilayah=a,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t,!confirm("Apakah yakin proses dilanjutkan ?")){a.next=19;break}if("tambah"!=t.btn){a.next=9;break}return delete t.vdata.id,a.next=6,r.collection("app_gis_covid_balangan").doc().set(t.vdata);case 6:e.getData(),a.next=19;break;case 9:if("update"!=t.btn){a.next=15;break}return a.next=12,r.collection("app_gis_covid_balangan").doc().set(t.vdata);case 12:e.getData(),a.next=19;break;case 15:if("delete"!=t.btn){a.next=19;break}return a.next=18,r.collection("app_gis_covid_balangan").doc(t.vdata.id)["delete"]();case 18:e.getData();case 19:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.getData();case 1:case"end":return a.stop()}}),a)})))()}},c=d,p=e("2877"),m=Object(p["a"])(c,s,n,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=page-app-covid-admin-covid-index~e1a6d9cf.e59d5b83.js.map