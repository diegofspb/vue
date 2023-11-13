import './style.css'
import Vue from 'vue'
import App from './AppRotas.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
