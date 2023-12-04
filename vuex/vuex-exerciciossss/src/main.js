import Vue from 'vue'
import App from './AppVuex.vue'

Vue.config.productionTip = false

import Painel from './components/PainelComponente'
Vue.component('PainelComponente', Painel)

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
