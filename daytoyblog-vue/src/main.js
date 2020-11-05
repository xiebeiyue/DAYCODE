import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import './index.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 

Vue.use(VueSweetalert2);

Vue.use(mavonEditor);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
