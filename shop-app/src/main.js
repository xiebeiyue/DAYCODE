import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
// import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';

// import '../ui/element-ui.js'
import '../ui/mint-ui.js'

import './assets/css/base.css'
import './assets/css/vue2-animate.css'

Vue.use(ElementUI);

// Vue.use(VueAxios,axios)
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
