/*
 * @Author       : tongzonghua
 * @Date         : 2020-07-12 23:47:24
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2020-07-13 00:07:18
 * @Email        : tongzonghua@360.cn
 * @Description  : 
 * @FilePath     : /workspace/QPic/src/renderer/router/index.js
 */ 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: require('@/views').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
