(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-app-covid-admin-kategori-index~9b314944"],{"327e":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"offset-1 col-9"},[e("div",{staticClass:"shadow rounded-lg p-3"},[t.vdata.id?e("button",{staticClass:"btn btn-sm btn-dark  float-right",attrs:{type:"button"},on:{click:function(a){return t.$router.push("/app/covid/admin/kategori/addMarker?id="+t.vdata.id+"&nama="+t.vdata.kategori)}}},[e("span",{staticClass:"typcn typcn-pin"}),t._v(" Add Marker")]):t._e(),t.vdata.id?e("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"button"},on:{click:function(a){return t.$router.push("/app/covid/admin/kategori/geojson?id="+t.vdata.id+"&nama="+t.vdata.kategori)}}},[e("span",{staticClass:"typcn typcn-map"}),t._v(" Add GeoJson")]):t._e(),e("hr"),e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"kategori"}},[t._v("Kategori Peta/Map : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.kategori,expression:"vdata.kategori"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"kategori",name:"kategori",placeholder:"kategori"},domProps:{value:t.vdata.kategori},on:{input:function(a){a.target.composing||t.$set(t.vdata,"kategori",a.target.value)}}})]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])])])])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-9 sm:ml-5"},[t.datanya.length>0?e("div",{staticClass:"p-3"},[e("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:["latitude","longitude"]},on:{selected:t.ambil}})],1):t._e()])])])},s=[],i=e("1da1"),o=(e("96cf"),e("2896")),r=e("6be6"),c=new o["a"],d={components:{Btables:r["a"]},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},methods:{upload:function(){var t=this,a=document.querySelector("#filenya");c.collection("tbuser").upload(a).then((function(a){t.vdata.geojson=a,t.$forceUpdate()}))},test:function(){this.$refs.btable.getData()},getData:function(){var t=this;c.collection("app_gis_kategori").doc().select("select * from app_gis_kategori").then((function(a){t.datanya=a,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;confirm("Apakah yakin proses dilanjutkan ?")&&("tambah"==this.btn?(delete this.vdata.id,c.collection("app_gis_kategori").doc().set(this.vdata).then((function(a){t.getData()}))):"update"==this.btn?c.collection("app_gis_kategori").doc().set(this.vdata).then((function(a){t.getData()})):"delete"==this.btn&&c.collection("app_gis_kategori").doc(this.vdata.id)["delete"]().then((function(a){t.getData()})))}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.getData();case 1:case"end":return a.stop()}}),a)})))()},layout:"app_gis"},l=d,u=e("2877"),p=Object(u["a"])(l,n,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=page-app-covid-admin-kategori-index~9b314944.635a9082.js.map