(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(t,a,e){},182:function(t,a,e){"use strict";var i=e(169);e.n(i).a},210:function(t,a,e){"use strict";e.r(a);var i={props:{lang:{type:String,default:"ru"}},data:function(){return{string1:"Пишите на:"}},created:function(){"en"===this.lang&&(this.string1="Write us:")}},s=(e(182),e(20)),n=e(0),r=n.a.config.optionMergeStrategies.computed,c={metadata:{email:"ping@airalab.org",subscribeRU:"https://forms.gle/cG9HMKL1a3yhEAPK6",subscribeEN:"https://forms.gle/HoBKY7jLaog4ZW36A"}},l=function(t){var a=t.options;a.__staticData?a.__staticData.data=c:(a.__staticData=n.a.observable({data:c}),a.computed=r({$static:function(){return a.__staticData.data}},a.computed))},o=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{attrs:{role:"contentinfo"}},[e("div",{staticClass:"w-base"},[e("div",{staticClass:"footer-row d-t w-full"},[e("div",{staticClass:"d-t_cell align-v-m"},["ru"==t.lang?e("tenplate",[e("g-link",{attrs:{to:t.$static.metadata.subscribeRU,target:"_blank"}},[t._v("Рассылка важных новостей")])],1):t._e(),"en"==t.lang?e("tenplate",[e("g-link",{attrs:{to:t.$static.metadata.subscribeEN,target:"_blank"}},[t._v("Newsletter subscribe")])],1):t._e()],1),e("div",{staticClass:"d-t_cell align-v-m t-align-right"},[t._v(t._s(t.string1)+" "),e("g-link",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{to:"mailto:"+t.$static.metadata.email},domProps:{innerHTML:t._s(t.$static.metadata.email)}})],1)])])])}),[],!1,null,null,null);"function"==typeof l&&l(o);a.default=o.exports}}]);