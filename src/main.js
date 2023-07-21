import 'ant-design-vue/dist/antd.css'

import Antd from 'ant-design-vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

new Vue({ router }).$mount('#app')
