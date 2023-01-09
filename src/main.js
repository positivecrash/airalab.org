// Import main css
import '~/assets/style/index.css'
import inViewportDirective from 'vue-in-viewport-directive'


// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import LayoutRU from '~/layouts/LayoutRU.vue'
import LayoutEN from '~/layouts/LayoutEN.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('LayoutRU', LayoutRU)
  Vue.component('LayoutEN', LayoutEN)

  Vue.directive('in-viewport', inViewportDirective)

  // https://webmaster.yandex.ru/sites/
  // head.meta.push({
  //   name: 'yandex-verification',
  //   content: 'c3195085175df568'
  // })
}
