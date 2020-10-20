/*
 * @Author       : tongzonghua
 * @Date         : 2020-07-12 23:47:24
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2020-07-13 00:34:46
 * @Email        : tongzonghua@360.cn
 * @Description  : 入口文件
 * @FilePath     : /workspace/QPic/src/renderer/main.js
 */ 
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import '@/assets/styles/main.less'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('assets/imgs/loading.gif'),
  error: require('assets/imgs/error.png'),
  attempt: 3
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
