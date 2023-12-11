import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Criando um filtro de forma GLOBAL
Vue.filter('inverter', function(valor){
	return valor.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
