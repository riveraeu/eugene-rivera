webpackJsonp([0],{"/TYz":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("/ssn"),n=r("rGQh"),s=!1;var a=function(t){s||r("ZVFb")},o=r("VU/8")(i.a,n.a,!1,a,"data-v-2a183b29",null);o.options.__file="pages/index.vue",e.default=o.exports},"/ssn":function(t,e,r){"use strict";var i=r("Xxa5"),n=r.n(i),s=r("exGp"),a=r.n(s),o=r("NUlU"),c=r("nzfd");e.a={data:function(){return{projects:[]}},components:{card:o.a,VueResponsiveImage:c.a},asyncData:function(){var t=a()(n.a.mark(function t(e){var r,i=e.app;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.$axios.$get("api/projects/projects");case 2:return r=t.sent,t.abrupt("return",{projects:r});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},"4WTo":function(t,e,r){var i=r("NWt+");t.exports=function(t,e){var r=[];return i(t,!1,r.push,r,e),r}},"5zde":function(t,e,r){r("zQR9"),r("qyJz"),t.exports=r("FeBl").Array.from},"7Doy":function(t,e,r){var i=r("EqjI"),n=r("7UMu"),s=r("dSzd")("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),i(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},"9Bbf":function(t,e,r){"use strict";var i=r("kM2E");t.exports=function(t){i(i.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},"9C8M":function(t,e,r){"use strict";var i=r("evD5").f,n=r("Yobk"),s=r("xH/j"),a=r("+ZMJ"),o=r("2KxR"),c=r("NWt+"),u=r("vIB/"),h=r("EGZi"),d=r("bRrM"),l=r("+E39"),p=r("06OY").fastKey,f=r("LIJb"),v=l?"_s":"size",g=function(t,e){var r,i=p(e);if("F"!==i)return t._i[i];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,u){var h=t(function(t,i){o(t,h,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=i&&c(i,r,t[u],t)});return s(h.prototype,{clear:function(){for(var t=f(this,e),r=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete r[i.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var r=f(this,e),i=g(r,t);if(i){var n=i.n,s=i.p;delete r._i[i.i],i.r=!0,s&&(s.n=n),n&&(n.p=s),r._f==i&&(r._f=n),r._l==i&&(r._l=s),r[v]--}return!!i},forEach:function(t){f(this,e);for(var r,i=a(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(i(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!g(f(this,e),t)}}),l&&i(h.prototype,"size",{get:function(){return f(this,e)[v]}}),h},def:function(t,e,r){var i,n,s=g(t,e);return s?s.v=r:(t._l=s={i:n=p(e,!0),k:e,v:r,p:i=t._l,n:void 0,r:!1},t._f||(t._f=s),i&&(i.n=s),t[v]++,"F"!==n&&(t._i[n]=s)),t},getEntry:g,setStrong:function(t,e,r){u(t,e,function(t,r){this._t=f(t,e),this._k=r,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))},r?"entries":"values",!r,!0),d(e)}}},"9MQR":function(t,e,r){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-flex",{attrs:{sm4:""}},[e("v-card",{staticClass:"ma-3"},[e("v-card-media",{attrs:{src:this.icon,height:"15vh",contain:""}}),e("v-card-title",{attrs:{"primary-title":""}},[e("v-spacer"),e("div",{staticClass:"sub-header display-1"},[this._v(this._s(this.title))]),e("v-spacer")],1),e("v-card-text",[e("div",{staticClass:"body-text text-xs-center"},[this._v(this._s(this.text))])])],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},ALrJ:function(t,e,r){var i=r("+ZMJ"),n=r("MU5D"),s=r("sB3e"),a=r("QRG4"),o=r("oeOm");t.exports=function(t,e){var r=1==t,c=2==t,u=3==t,h=4==t,d=6==t,l=5==t||d,p=e||o;return function(e,o,f){for(var v,g,m=s(e),b=n(m),w=i(o,f,3),y=a(b.length),S=0,x=r?p(e,y):c?p(e,0):void 0;y>S;S++)if((l||S in b)&&(g=w(v=b[S],S,m),t))if(r)x[S]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:x.push(v)}else if(h)return!1;return d?-1:u||h?h:x}}},BDhv:function(t,e,r){var i=r("kM2E");i(i.P+i.R,"Set",{toJSON:r("m9gC")("Set")})},"DJ+E":function(t,e,r){var i=r("zS0M");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("c56fd856",i,!1,{sourceMap:!1})},FOfx:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",[t.hasSmartphoneSrcset?r("source",{attrs:{srcset:t.smartphoneSrcset,sizes:t.smartphoneSizes,media:"(max-width: 767px)"}}):t._e(),t.hasTabletSrcset?r("source",{attrs:{srcset:t.tabletSrcset,sizes:t.tabletSizes,media:"(min-width: 768px) and (max-width: 1023px)"}}):t._e(),r("img",{class:[t.defaultClass,t.imageClass],attrs:{src:t.defaultImage,alt:t.alt,srcset:t.srcset,sizes:t.sizes}})])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},Five:function(t,e,r){"use strict";var i=r("lHA8"),n=r.n(i),s=r("Gu7T"),a=r.n(s);e.a={name:"VueResponsiveImage",props:{imageUrl:{type:String,required:!0},mode:{type:String,default:"all",validator:function(t){return-1!==["all","tablet","smartphone","mobile"].indexOf(t)}},widthOnScreen:{type:Number,default:100},widthOnScreenTablet:{type:Number,default:void 0},widthOnScreenSmartphone:{type:Number,default:void 0},imageRatio:{type:Number,default:16/9},alt:{type:String,default:""},imageClass:{type:String,default:""},maxWidth:{type:Number,default:1920}},data:function(){return{defaultClass:"vue-responsive-image",widthPlaceholder:"%width%",heightPlaceholder:"%height%",baseSizes:{desktop:[1920,1600,1440,1366,1024,768],tabletPortrait:[1600,1024,768],smartphone:[818,768,640]},defaultWidth:1600}},computed:{test:function(){return"test"},defaultImage:function(){var t=this.getWidthAdaptedToWidthOnScreen(this.defaultWidth,this.widthOnScreen);return this.getImageUrlWithWidthAndHeight(t,this.getHeightFromWidth(t))},srcset:function(){var t=this;return void 0===this.widthOnScreenTablet&&void 0===this.widthOnScreenSmartphone?this.srcscetSizes.map(function(e){var r=t.getWidthAdaptedToWidthOnScreen(e,t.widthOnScreen);return t.getImageUrlWithWidthAndHeight(r,t.getHeightFromWidth(r))+" "+r+"w"}).join(", "):this.getSrcsetSizes("desktop").map(function(e){var r=t.getWidthAdaptedToWidthOnScreen(e,t.widthOnScreenTablet);return t.getImageUrlWithWidthAndHeight(r,t.getHeightFromWidth(r))+" "+r+"w"}).join(", ")},tabletSrcset:function(){var t=this;return this.getSrcsetSizes("tablet").map(function(e){var r=t.getWidthAdaptedToWidthOnScreen(e,t.widthOnScreenTablet);return t.getImageUrlWithWidthAndHeight(r,t.getHeightFromWidth(r))+" "+r+"w"}).join(", ")},smartphoneSrcset:function(){var t=this;return this.getSrcsetSizes("smartphone").map(function(e){var r=t.getWidthAdaptedToWidthOnScreen(e,t.widthOnScreenSmartphone);return t.getImageUrlWithWidthAndHeight(r,t.getHeightFromWidth(r))+" "+r+"w"}).join(", ")},hasTabletSrcset:function(){return void 0!==this.widthOnScreenTablet&&this.widthOnScreenTablet!==this.widthOnScreen},hasSmartphoneSrcset:function(){return void 0!==this.widthOnScreenSmartphone&&this.widthOnScreenSmartphone!==this.widthOnScreen},sizes:function(){return this.widthOnScreen+"vw"},tabletSizes:function(){return this.widthOnScreenTablet+"vw"},smartphoneSizes:function(){return this.widthOnScreenSmartphone+"vw"},srcscetSizes:function(){return this.getSrcsetSizes(this.mode)}},methods:{getSrcsetSizes:function(t){switch(t){case"tablet":return this.baseSizes.tabletPortrait;case"smartphone":return this.baseSizes.smartphone;case"mobile":return[].concat(a()(new n.a([].concat(a()(this.baseSizes.tabletPortrait),a()(this.baseSizes.smartphone)))));case"desktop":return this.baseSizes.desktop;case"all":default:return[].concat(a()(new n.a([].concat(a()(this.baseSizes.desktop),a()(this.baseSizes.tabletPortrait),a()(this.baseSizes.smartphone)))))}},getHeightFromWidth:function(t){return Math.round(t/this.imageRatio)},getWidthAdaptedToWidthOnScreen:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return e>=100?t:Math.round(t/100*e)},getImageUrlWithWidthAndHeight:function(t,e){return this.imageUrl.replace(this.widthPlaceholder,"h_"+e).replace(this.heightPlaceholder,"w_"+t)}}}},Gu7T:function(t,e,r){"use strict";e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(r("c/Tr"));e.default=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return(0,i.default)(t)}},HpRW:function(t,e,r){"use strict";var i=r("kM2E"),n=r("lOnJ"),s=r("+ZMJ"),a=r("NWt+");t.exports=function(t){i(i.S,t,{from:function(t){var e,r,i,o,c=arguments[1];return n(this),(e=void 0!==c)&&n(c),void 0==t?new this:(r=[],e?(i=0,o=s(c,arguments[2],2),a(t,!1,function(t){r.push(o(t,i++))})):a(t,!1,r.push,r),new this(r))}})}},LIJb:function(t,e,r){var i=r("EqjI");t.exports=function(t,e){if(!i(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},NUlU:function(t,e,r){"use strict";var i=r("NWPC"),n=r("9MQR"),s=!1;var a=function(t){s||r("ySTW")},o=r("VU/8")(i.a,n.a,!1,a,"data-v-191db86c",null);o.options.__file="components/globals/card.vue",e.a=o.exports},NWPC:function(t,e,r){"use strict";e.a={props:["icon","title","text"]}},ZVFb:function(t,e,r){var i=r("dV+n");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("bed588d6",i,!1,{sourceMap:!1})},"c/Tr":function(t,e,r){t.exports={default:r("5zde"),__esModule:!0}},"dV+n":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".grey-background[data-v-2a183b29]{background-color:#eee}.dark-background[data-v-2a183b29]{background-color:#2c3e50}@media (max-width:600px){.about[data-v-2a183b29]{margin-right:unset!important}}",""])},fBQ2:function(t,e,r){"use strict";var i=r("evD5"),n=r("X8DO");t.exports=function(t,e,r){e in t?i.f(t,e,n(0,r)):t[e]=r}},ioQ5:function(t,e,r){r("HpRW")("Set")},lHA8:function(t,e,r){t.exports={default:r("pPW7"),__esModule:!0}},m9gC:function(t,e,r){var i=r("RY/4"),n=r("4WTo");t.exports=function(t){return function(){if(i(this)!=t)throw TypeError(t+"#toJSON isn't generic");return n(this)}}},nzfd:function(t,e,r){"use strict";var i=r("Five"),n=r("FOfx"),s=!1;var a=function(t){s||r("DJ+E")},o=r("VU/8")(i.a,n.a,!1,a,"data-v-d38d5808",null);o.options.__file="components/ResponsiveImage.vue",e.a=o.exports},oNmr:function(t,e,r){r("9Bbf")("Set")},oeOm:function(t,e,r){var i=r("7Doy");t.exports=function(t,e){return new(i(t))(e)}},pPW7:function(t,e,r){r("M6a0"),r("zQR9"),r("+tPU"),r("ttyz"),r("BDhv"),r("oNmr"),r("ioQ5"),t.exports=r("FeBl").Set},qo66:function(t,e,r){"use strict";var i=r("7KvD"),n=r("kM2E"),s=r("06OY"),a=r("S82l"),o=r("hJx8"),c=r("xH/j"),u=r("NWt+"),h=r("2KxR"),d=r("EqjI"),l=r("e6n0"),p=r("evD5").f,f=r("ALrJ")(0),v=r("+E39");t.exports=function(t,e,r,g,m,b){var w=i[t],y=w,S=m?"set":"add",x=y&&y.prototype,_={};return v&&"function"==typeof y&&(b||x.forEach&&!a(function(){(new y).entries().next()}))?(y=e(function(e,r){h(e,y,t,"_c"),e._c=new w,void 0!=r&&u(r,m,e[S],e)}),f("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in x&&(!b||"clear"!=t)&&o(y.prototype,t,function(r,i){if(h(this,y,t),!e&&b&&!d(r))return"get"==t&&void 0;var n=this._c[t](0===r?0:r,i);return e?this:n})}),b||p(y.prototype,"size",{get:function(){return this._c.size}})):(y=g.getConstructor(e,t,m,S),c(y.prototype,r),s.NEED=!0),l(y,t),_[t]=y,n(n.G+n.W+n.F,_),b||g.setStrong(y,t,m),y}},qyJz:function(t,e,r){"use strict";var i=r("+ZMJ"),n=r("kM2E"),s=r("sB3e"),a=r("msXi"),o=r("Mhyx"),c=r("QRG4"),u=r("fBQ2"),h=r("3fs2");n(n.S+n.F*!r("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,n,d,l=s(t),p="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,g=void 0!==v,m=0,b=h(l);if(g&&(v=i(v,f>2?arguments[2]:void 0,2)),void 0==b||p==Array&&o(b))for(r=new p(e=c(l.length));e>m;m++)u(r,m,g?v(l[m],m):l[m]);else for(d=b.call(l),r=new p;!(n=d.next()).done;m++)u(r,m,g?a(d,v,[n.value,m],!0):n.value);return r.length=m,r}})},rGQh:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("v-layout",{staticClass:"mt-5",attrs:{row:""}},[r("v-flex",{attrs:{xs6:""}},[r("vue-responsive-image",{attrs:{"image-url":"https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1532649367/eugene-rivera/helloquence-61189-unsplash-min.jpg","image-ratio":1840/1203,"width-on-screen":50}})],1),r("v-flex",{attrs:{xs6:""}},[r("vue-responsive-image",{attrs:{"image-url":"https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1532649338/eugene-rivera/ilya-pavlov-87438-unsplash-min.jpg","image-ratio":3543/2365,"width-on-screen":50}})],1)],1),r("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[r("h1",{staticClass:"image-text text-xs-center primary--text mt-5"},[t._v("Rivera Web Solutions")])]),r("v-container",[r("v-layout",{attrs:{"align-center":"",column:""}},[r("v-flex",{staticClass:"mb-5"},[r("p",{staticClass:"body-text headline text-xs-center"},[t._v("Modern web solutions for your bussines.\n        Founded by Eugene Rivera, Rivera Web Solutions specializes in custom built and designed websites.\n        Read about the web building process, view examples of previous projects and get in contact with Eugene today!")])]),r("v-flex",{attrs:{xs1:""}},[r("v-btn",{attrs:{large:"",raised:"",dark:"",color:"primary",to:"/contact"}},[t._v("Let's Talk")])],1)],1)],1),r("div",{staticClass:"grey-background mt-5 pb-5"},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"justify-center":""}},[r("h1",{staticClass:"header mt-5 mb-5 text-xs-center"},[t._v("Web Design Process")])]),r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[r("card",{attrs:{icon:"/process/vectors-market-strategy.svg",title:"Planning",text:"\n        The process starts off by meeting with the customer and talking about what they are looking for in a website.\n        We work together to stategies the best plan for your site.\n        This is when we disscus different features the customer is look for and how best to achive them.\n        Eugene also conducts market research and studies succesful sites in the same indusrty. "}}),r("card",{attrs:{icon:"/process/DinosoftLabs-edit.svg",title:"Design",text:"Next up is the site design stage.\n        Starting with basic “wire frame” drawings, then progessing to a digital mockup on your site.\n        This is a very important part of the process, as you get to see what your site will look like, and figure our what is working\n        and what can be improved design wise. The mockups showcase how the site will look on mobile phones and larger sceens."}}),r("card",{attrs:{icon:"/process/Freepik-coding.svg",title:"Development",text:"Now the time has come to start programming your site.\n        Eugene use some of the latest and most advanved web technologies to build a fast, secure and engaging site.\n        Eugene works to futher improve the design in this stage, so that the customer and their users are satisfied."}}),r("card",{attrs:{icon:"/process/vectors-market-rocket-ship.svg",title:"Launch",text:"\n        After thoughrly testing your website for errors, bugs, preformance and usability, it is time to launch.\n        Deploying the project to production server, you will now be able to share the with all your customers and supporters.\n        Now you have a beautiful custom site, what about getting people to visit?"}}),r("card",{attrs:{icon:"/process/Prosymbols-statistics.svg",title:"Marketing & Maitenace",text:"\n        Eugene sticks with you after your project is launched to help you get the most out of it.\n        He helps to make sure your site is being properly marketed and showing up in google searches.\n        Eugene is also on hand should any technical problems arise or you want to make changes or updates to your site."}})],1),r("v-layout",{staticClass:"pt-5",attrs:{"justify-center":""}},[r("v-btn",{attrs:{large:"",raised:"",dark:"",color:"primary",to:"/contact"}},[t._v("Get Started")])],1)],1)],1),r("div",{staticClass:"dark-background pt-5 pb-5"},[r("v-container",[r("v-layout",{attrs:{"justify-center":""}},[r("h1",{staticClass:"header white--text mb-5"},[t._v("Projects")])]),t._l(t.projects,function(e,i){return r("v-layout",{key:i,attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm6:""}},[r("vue-responsive-image",{attrs:{"image-url":e.secure_url,"image-ratio":2,"width-on-screen":100}})],1),r("v-flex",{staticClass:"text-xs-center pa-5 projects",attrs:{sm6:""}},[r("h1",{staticClass:"sub-header white--text"},[t._v(t._s(e.context.custom.title))]),r("p",{staticClass:"body-text white--text"},[t._v(t._s(e.context.custom.short))]),r("v-btn",{staticClass:"primary--text",attrs:{large:"",raised:"",to:{name:"projects-project",params:{project:e.context.custom.path}}}},[t._v("Read More")])],1)],1)})],2)],1),r("v-container",{},[r("v-layout",{attrs:{"justify-center":"",row:""}},[r("h1",{staticClass:"header mb-5 text-xs-center"},[t._v("About")])]),r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[r("v-flex",{attrs:{sm4:""}},[r("p",{staticClass:"body-text mr-5 text-xs-center about"},[t._v("Founded by Eugene Rivera, Rivera Web Solutions is a small web design and development business.\n          Based in the Bay Area Eugene is able to server a wide varierty of local clients, along with any remote projects.\n          After reciving his Computer Science degree from Sonoma State University, Eugene went on to further his education in\n          web techonologies.By studying current trends, and teaching himself, Eugene had learned a lot about the business.\n          From designing to coding to marketing, Eugene can handle it all.\n          Being a small new company, allows RWS to uses the latest web technologies to make your sites fast, secure and interactive. ")])]),r("v-flex",{attrs:{sm4:""}},[r("vue-responsive-image",{attrs:{"image-url":"https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1532727693/eugene-rivera/about-pic.jpg","image-ratio":.75,"width-on-screen":50,"width-on-screen-smartphone":100}})],1)],1)],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},ttyz:function(t,e,r){"use strict";var i=r("9C8M"),n=r("LIJb");t.exports=r("qo66")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return i.def(n(this,"Set"),t=0===t?0:t,t)}},i)},uwni:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".card[data-v-191db86c]{height:50vh!important}@media (max-width:600px){.card[data-v-191db86c]{height:60vh!important}}",""])},ySTW:function(t,e,r){var i=r("uwni");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("d7a75b5a",i,!1,{sourceMap:!1})},zS0M:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])}});