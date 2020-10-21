import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './index'
import axios from 'axios'
// import VueAxios from 'vue-axios'

import '../ui/element-ui.js'
import '../ui/mint-ui.js'


// Vue.use(VueAxios,axios)
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
