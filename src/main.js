import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {store} from './store'







Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




import '/src/css/main.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'




Vue.config.productionTip = false

new Vue({
  store,
  router,

  render: h => h(App)
}).$mount('#app')
