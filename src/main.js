// 入口JS

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import './filters'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'

Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
