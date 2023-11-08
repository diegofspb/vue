import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// CRIANDO Diretivas GLOBAIS:

Vue.directive('destaque',{  // Vue.directive = cria uma diretiva personalizada
	bind(el,binding){ // el é o elemento DOM ao qual a diretiva está vinculada.
		// el.style.backgroundColor = 'lightgreen'  se fizer assim, no arquivo App.vue fica assim: <p v-destaque>Usando diretiva personalizada</p>
		
		let atraso = 0

		if (binding.modifiers['atrasar']) {
			atraso = 3000 // 3000 é o valor em milessegundos que equivale a 3 s
		}

		setTimeout(() => {
			if (binding.arg == 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
	}
})

/* 

 bind(el, binding) {  ...  }: O gancho bind é uma função que é chamada quando a diretiva é vinculada a um elemento. Ele recebe dois parâmetros:

	el: 

		Representa o elemento DOM ao qual a diretiva está vinculada.

	binding: 

		É um objeto que contém informações sobre a diretiva. 
		O objeto binding pode incluir propriedades como value, name, expression, etc. 
		No seu código, você está interessado na propriedade value, que contém o valor associado à diretiva. 
		Neste caso, o valor determina a cor de fundo do elemento.

	el.style.backgroundColor = binding.value: Dentro do gancho bind, você está definindo a cor de fundo do elemento el com base no valor associado à diretiva. Isso significa que, quando você usa a diretiva "destaque" em um elemento no seu template, você pode fornecer um valor de cor como argumento e essa cor será aplicada como o fundo desse elemento.

*/

new Vue({
	render: h => h(App),
}).$mount('#app')
