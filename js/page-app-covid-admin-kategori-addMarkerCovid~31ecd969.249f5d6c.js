(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-app-covid-admin-kategori-addMarkerCovid~31ecd969"],{"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),o=e("e8b5"),n=e("861d"),r=e("7b0b"),l=e("50c4"),c=e("8418"),d=e("65f0"),p=e("1dde"),m=e("b622"),v=e("2d00"),u=m("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",h=v>=51||!s((function(){var t=[];return t[u]=!1,t.concat()[0]!==t})),b=p("concat"),k=function(t){if(!n(t))return!1;var a=t[u];return void 0!==a?!!a:o(t)},y=!h||!b;i({target:"Array",proto:!0,forced:y},{concat:function(t){var a,e,i,s,o,n=r(this),p=d(n,0),m=0;for(a=-1,i=arguments.length;a<i;a++)if(o=-1===a?n:arguments[a],k(o)){if(s=l(o.length),m+s>f)throw TypeError(g);for(e=0;e<s;e++,m++)e in o&&c(p,m,o[e])}else{if(m>=f)throw TypeError(g);c(p,m++,o)}return p.length=m,p}})},d639:function(t,a,e){"use strict";e.r(a);var i,s,o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-sm btn-style9  text-xs",staticStyle:{position:"fixed",top:"10px",right:"50px","z-index":"1000"},attrs:{type:"button"},on:{click:function(a){return t.$router.go(-1)}}},[t._v(t._s(t.$route.query.nama))]),t.modal?e("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"100vh",width:"100vw",position:"fixed","z-index":"100",background:"rgba(151,151,179,0.4)"},on:{click:function(a){t.modal=!1}}},[e("div",{staticStyle:{width:"100%"}})]):t._e(),t.modal?e("div",{staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","z-index":"1000"}},[e("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"100px"}},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"p-4 bg-white rounded-lg shadow"},[e("p",{staticClass:"text-xs text-center font-bold p-3 uppercase"},[t._v("Pilih Kategori ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("button",{staticClass:"btn btn-sm btn-block",class:"icon"==t.pilihkategori?"btn-dark":"btn-outline-dark",attrs:{type:"button"},on:{click:function(a){t.pilihkategori="icon"}}},[t._v("Icon")])]),e("div",{staticClass:"col-4"},[e("button",{staticClass:"btn btn-sm  btn-block",class:"gambar"==t.pilihkategori?"btn-dark":"btn-outline-dark",attrs:{type:"button"},on:{click:function(a){t.pilihkategori="gambar"}}},[t._v("Gambar")])]),e("div",{staticClass:"col-4"},[e("button",{staticClass:"btn btn-sm  btn-block",class:"radius"==t.pilihkategori?"btn-dark":"btn-outline-dark",attrs:{type:"button"},on:{click:function(a){t.pilihkategori="radius"}}},[t._v("Radius")])])]),e("div",{staticStyle:{width:"70vw",height:"80vh",overflow:"scroll"}},[e("form",{staticClass:"text-sm",attrs:{action:""},on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},["radius"==t.pilihkategori?e("div",[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"p-0 mt-2",attrs:{for:"title"}},[t._v("Title : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(a){a.target.composing||t.$set(t.vdata,"title",a.target.value)}}})]),e("p",{staticClass:"text-sm"},[t._v("Deskripsi : ")]),e("div",{staticClass:"sm-form"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.deskripsi,expression:"vdata.deskripsi"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"deskripsi",name:"deskripsi",rows:"2",placeholder:"deskripsi..."},domProps:{value:t.vdata.deskripsi},on:{input:function(a){a.target.composing||t.$set(t.vdata,"deskripsi",a.target.value)}}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"text-xs mt-1 p-0",attrs:{for:"lat"}},[t._v("Lat : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lat,expression:"vdata.lat"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"lat",name:"lat",placeholder:"lat"},domProps:{value:t.vdata.lat},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lat",a.target.value)}}})])]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"text-xs mt-1 p-0",attrs:{for:"lng"}},[t._v("Lng : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lng,expression:"vdata.lng"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"lng",name:"lng",placeholder:"lng"},domProps:{value:t.vdata.lng},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lng",a.target.value)}}})])])]),e("button",{staticClass:"btn btn-sm btn-dark float-right ",attrs:{type:"button"},on:{click:t.gantiPosisi}},[e("span",{staticClass:"typcn typcn-arrow-repeat"})]),e("p",{staticClass:"text-sm"},[t._v("Type Popup : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.popup,expression:"vdata.popup"}],attrs:{type:"radio",id:"click",value:"click"},domProps:{checked:t._q(t.vdata.popup,"click")},on:{change:function(a){return t.$set(t.vdata,"popup","click")}}}),e("label",{attrs:{for:"click"}},[t._v("click")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.popup,expression:"vdata.popup"}],staticClass:"ml-2",attrs:{type:"radio",id:"hover",value:"hover"},domProps:{checked:t._q(t.vdata.popup,"hover")},on:{change:function(a){return t.$set(t.vdata,"popup","hover")}}}),e("label",{attrs:{for:"hover"}},[t._v("hover")])]),e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"p-0 mt-2",attrs:{for:"radius"}},[t._v("Radius lingkaran/area : ")]),e("p",{staticClass:"text-xs text-red-300"},[t._v("per Meter/M")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.radius,expression:"vdata.radius"}],staticClass:"form-control form-control-sm",staticStyle:{width:"50%"},attrs:{required:"",type:"text",id:"radius",name:"radius",placeholder:"ex: 100"},domProps:{value:t.vdata.radius},on:{input:function(a){a.target.composing||t.$set(t.vdata,"radius",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"color"}},[t._v("Warna/color : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.color,expression:"vdata.color"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"color",id:"color",name:"color",placeholder:"color"},domProps:{value:t.vdata.color},on:{input:function(a){a.target.composing||t.$set(t.vdata,"color",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"opacity"}},[t._v("Opacity (seberapa transparent) : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.opacity,expression:"vdata.opacity"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"opacity",name:"opacity",placeholder:"ex : 0.0 - 1.0"},domProps:{value:t.vdata.opacity},on:{input:function(a){a.target.composing||t.$set(t.vdata,"opacity",a.target.value)}}})])])])]):e("div",{staticClass:"sm-form "},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"p-0 mt-2",attrs:{for:"title"}},[t._v("Title : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(a){a.target.composing||t.$set(t.vdata,"title",a.target.value)}}})]),e("p",{staticClass:"text-sm"},[t._v("Deskripsi : ")]),e("div",{staticClass:"sm-form"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.deskripsi,expression:"vdata.deskripsi"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"deskripsi",name:"deskripsi",rows:"2",placeholder:"deskripsi..."},domProps:{value:t.vdata.deskripsi},on:{input:function(a){a.target.composing||t.$set(t.vdata,"deskripsi",a.target.value)}}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"text-xs mt-1 p-0",attrs:{for:"lat"}},[t._v("Lat : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lat,expression:"vdata.lat"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"lat",name:"lat",placeholder:"lat"},domProps:{value:t.vdata.lat},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lat",a.target.value)}}})])]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"text-xs mt-1 p-0",attrs:{for:"lng"}},[t._v("Lng : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.lng,expression:"vdata.lng"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"lng",name:"lng",placeholder:"lng"},domProps:{value:t.vdata.lng},on:{input:function(a){a.target.composing||t.$set(t.vdata,"lng",a.target.value)}}})])])]),e("button",{staticClass:"btn btn-sm btn-dark float-right ",attrs:{type:"button"},on:{click:t.gantiPosisi}},[e("span",{staticClass:"typcn typcn-arrow-repeat"})]),e("p",{staticClass:"text-sm"},[t._v("Type Popup : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.popup,expression:"vdata.popup"}],attrs:{type:"radio",id:"click",value:"click"},domProps:{checked:t._q(t.vdata.popup,"click")},on:{change:function(a){return t.$set(t.vdata,"popup","click")}}}),e("label",{attrs:{for:"click"}},[t._v("click")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.popup,expression:"vdata.popup"}],staticClass:"ml-2",attrs:{type:"radio",id:"hover",value:"hover"},domProps:{checked:t._q(t.vdata.popup,"hover")},on:{change:function(a){return t.$set(t.vdata,"popup","hover")}}}),e("label",{attrs:{for:"hover"}},[t._v("hover")])]),e("div",{staticClass:"col-sm-5"},["icon"==t.pilihkategori?e("div",[e("label",{staticClass:"p-0 mt-2",attrs:{for:"file"}},[t._v("Icon Link/Upload: ")]),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya",name:"file",placeholder:"file"},on:{change:t.upload}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.icon,expression:"vdata.icon"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",id:"icon",name:"icon",placeholder:"icon"},domProps:{value:t.vdata.icon},on:{input:function(a){a.target.composing||t.$set(t.vdata,"icon",a.target.value)}}})]):t._e(),e("label",{staticClass:"p-0 mt-2",attrs:{for:"file"}},[t._v("Gambar Link/Upload: ")]),"icon"==t.pilihkategori?e("p",{staticClass:"text-xs text-red-500"},[t._v("Gambar akan berada di deskripsi saat icon di klik ")]):t._e(),e("input",{staticClass:"form-control form-control-sm",attrs:{type:"file",id:"filenya2",name:"file",placeholder:"file"},on:{change:t.upload2}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.gambar,expression:"vdata.gambar"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"gambar",name:"gambar",placeholder:"gambar"},domProps:{value:t.vdata.gambar},on:{input:function(a){a.target.composing||t.$set(t.vdata,"gambar",a.target.value)}}})])])]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])]),t.datanya.length>0?e("div",{staticClass:"p-3"},[e("Btables",{ref:"btable",attrs:{tables:t.td,cari:[""],hide:["icon","gambar","radius","color","opacity"]},on:{selected:t.ambil}})],1):t._e()])])])])]):t._e(),t.ready?e("div",[e("div",{staticStyle:{height:"100vh"},attrs:{id:"mapid"}})]):t._e()])},n=[],r=e("ade3"),l=(e("4de4"),e("4795"),e("4160"),e("159b"),e("99af"),e("2896")),c=e("6be6"),d=new l["a"],p={components:{Btables:c["a"]},data:function(){return{modal:!1,selected:!1,ready:!1,vdata:{opacity:"0.6",radius:"100"},btn:"tambah",datanya:[],posisi:[],pilihkategori:"icon",iconSize:30}},computed:{td:function(){var t=this,a=this.datanya;return a=a.filter((function(a){if(a.kategori==t.pilihkategori)return a})),a},dynamicSize:function(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor:function(){return[this.iconSize/2,1.15*this.iconSize]}},mounted:function(){this.loadmap()},methods:(i={loadmap:function(){var t=this,a=this;this.getData(),this.ready=!1,s=null,setTimeout((function(){t.ready=!0,setTimeout((function(){s=new L.Map("mapid"),s.setView([-2.3618679484544427,-244.53054865284417],13),L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}).addTo(s),s.on("click",(function(t){console.log(t),a.posisi[0]=t.latlng.lat,a.posisi[1]=t.latlng.lng,a.modal=!0,a.$forceUpdate()})),a.datanya.length>0&&a.datanya.forEach((function(t){if("icon"==t.kategori){var a=L.icon({iconUrl:t.icon,iconSize:[28,75],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?L.marker([t.lat,t.lng],{icon:a}).bindPopup('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{maxWidth:500}).addTo(s):L.marker([t.lat,t.lng],{icon:a}).bindTooltip('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{permanent:!1,sticky:!0}).addTo(s)}else if("gambar"==t.kategori){a=L.icon({iconUrl:t.gambar,iconSize:[48,45],iconAnchor:[12,54],popupAnchor:[-3,-26]});"click"==t.popup?L.marker([t.lat,t.lng],{icon:a}).bindPopup('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{maxWidth:500}).addTo(s):L.marker([t.lat,t.lng],{icon:a}).bindTooltip('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                    ").concat(t.gambar?'<a href="'.concat(t.gambar,'" class="mt-2" target="__blank"><img src="').concat(t.gambar,'" class="mt-2" style="height:100px;width:100px;" /></a>'):"","\n                                </div>\n                                "),{permanent:!1,sticky:!0}).addTo(s)}else"radius"==t.kategori&&("click"==t.popup?L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindPopup('\n                                <div class="text-xs">\n                                    <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                    <div class="text-justify">').concat(t.deskripsi,"</div>\n                                </div>\n                                "),{maxWidth:500}).addTo(s):L.circle([t.lat,t.lng],{color:"black",fillColor:t.color,fillOpacity:t.opacity,radius:t.radius}).bindTooltip('\n                            <div class="text-xs">\n                                <div class="font-bold uppercase">'.concat(t.title,'</div>\n                                <div class="text-justify">').concat(t.deskripsi,"</div>\n                            </div>\n                            "),{permanent:!1,sticky:!0}).addTo(s))})),L.control.ruler().addTo(s)}),2e3)}),1e3)},ambil:function(){},gantiPosisi:function(){this.vdata.lat=this.posisi[0],this.vdata.lng=this.posisi[1],this.$forceUpdate()},getData:function(){var t=this;d.collection("app_gis_marker").doc().select("select * from app_gis_marker where id_peta='".concat(this.$route.query.id,"'")).then((function(a){t.datanya=a,t.$forceUpdate()}))}},Object(r["a"])(i,"ambil",(function(t){this.vdata=t,this.pilihkategori=t.kategori,this.btn="update",this.$forceUpdate()})),Object(r["a"])(i,"submit",(function(){var t=this;t.vdata.kategori=t.pilihkategori,t.vdata.id_peta=this.$route.query.id,confirm("Apakah yakin proses dilanjutkan ?")&&("tambah"==this.btn?(delete this.vdata.id,d.collection("app_gis_marker").doc().set(this.vdata).then((function(a){t.getData()}))):"update"==this.btn?d.collection("app_gis_marker").doc().set(this.vdata).then((function(a){t.getData()})):"delete"==this.btn&&d.collection("app_gis_marker").doc(this.vdata.id)["delete"]().then((function(a){t.getData()})),this.loadmap())})),Object(r["a"])(i,"upload",(function(){var t=document.querySelector("#filenya");d.collection("tbuser").upload(t).then((function(t){console.log(t)}))})),Object(r["a"])(i,"upload2",(function(){var t=document.querySelector("#filenya2");d.collection("tbuser").upload(t).then((function(t){console.log(t)}))})),i),metaInfo:{title:"Add Marker dynamic",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.css",integrity:"sha384-P9DABSdtEY/XDbEInD3q+PlL+BjqPCXGcF8EkhtKSfSTr/dS5PBKa9+/PMkW2xsY",crossorigin:"anonymous"}],script:[{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""},{src:"https://cdn.jsdelivr.net/gh/gokertanrisever/leaflet-ruler@master/src/leaflet-ruler.js",integrity:"sha384-N2S8y7hRzXUPiepaSiUvBH1ZZ7Tc/ZfchhbPdvOE5v3aBBCIepq9l+dBJPFdo1ZJ",crossorigin:"anonymous"}]}},m=p,v=e("2877"),u=Object(v["a"])(m,o,n,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=page-app-covid-admin-kategori-addMarkerCovid~31ecd969.249f5d6c.js.map