import 'ant-design-vue/dist/antd.css'

import $routes from './routes'
import $store from './store'
import Antd from 'ant-design-vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store($store)

const router = new VueRouter({
  routes: $routes,
})

new Vue({ store, router }).$mount('#app')
