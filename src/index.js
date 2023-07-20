import 'ant-design-vue/dist/antd.css'

import Antd from 'ant-design-vue'
import App from './App.vue'
import Vue from 'vue'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
