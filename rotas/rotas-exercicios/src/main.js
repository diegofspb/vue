import './style.css'
import Vue from 'vue'
import App from './AppRotas.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
