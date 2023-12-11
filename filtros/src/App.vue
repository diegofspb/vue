<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!-- O uso do pipe | no Vue.js é uma maneira de aplicar filtros  -->
		<!-- então, depois do pipe tem que vir o filtro -->
		<p> {{cpfInicial | cpf }} </p> <!-- usando filtro LOCAL  -->
		<p> {{cpfInicial | inverter}} </p> <!-- usando filtro GLOBAL  -->
		<p> {{cpfInicial | cpf | inverter}} </p> <!-- usando vários filtros  -->

		<!-- Exemplo de uso de FILTRO dentro um input:     os.: só funciona com v-bind   -->
		<input type="text" :value="cpfInicial | cpf">
	</div>
</template>

<script>
export default {

	// criando um filtro LOCAL
	filters: {
		cpf(valor) {
			const arr = valor.split('')   // Cria uma constante 'arr' e atribui a ela um array, onde cada caractere se torna um elemento
			arr.splice(3, 0, '.')  // Insere um ponto (.) na terceira posição do array
			arr.splice(7, 0, '.')  // Insere outro ponto (.) na sétima posição do array
			arr.splice(11, 0, '-')  // Insere um traço (-) na décima primeira posição do array
			return arr.join('') // Converte o array de caracteres de volta em uma única string
		}
	},
	data(){
		return{
			cpfInicial: '12345678900'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input{
	font-size: 2.5rem;
}
</style>
