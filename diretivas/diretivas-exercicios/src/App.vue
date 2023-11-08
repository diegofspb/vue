 <template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva <strong>v-text</strong>'"></p> <!-- v-text considera tudo string -->
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p> <!-- v-html interpreta a string como html -->
		<hr>
		<h3>Usando diretiva personalizada GLOBAL</h3>
		<hr>
		<!-- Diretiva personalizada sem nada -->
		<p v-destaque>Usando diretiva personalizada</p>
		<!-- Diretiva personalizada + atributo interno do data() -->
		<p v-destaque="cor">Usando cor do atributo deste componente descrito em data()</p>
		<!-- Diretiva personalizada + string com nome da cor  -->
		<p v-destaque="'blue'">Usando diretiva personalizada => aplicando na cor da fonte</p>
		<!-- Diretiva personalizada + ARGUMENTO ('fundo')  -->
		<p v-destaque:fundo="'blue'">Usando diretiva personalizada => aplicando na cor do fundo, ou seja, backgroundColor</p>
		<!-- Diretiva personalizada + ARGUMENTO ('fundo') + modificadores -->
		<p v-destaque:fundo.atrasar="'blue'">Diretiva personalizada + ARGUMENTO ('fundo') + modificadores</p>
		<hr>
		<h3>Usando diretiva personalizada LOCAL</h3>
		<hr>
		<!-- Diretiva personalizada sem nada -->
		<p v-destaque-local>Usando diretiva personalizada</p>
		<!-- Diretiva personalizada + atributo interno do data() -->
		<p v-destaque-local="cor">Usando cor do atributo deste componente descrito em data()</p>
		<!-- Diretiva personalizada + string com nome da cor  -->
		<p v-destaque-local="'blue'">Usando diretiva personalizada => aplicando na cor da fonte</p>
		<!-- Diretiva personalizada + ARGUMENTO ('fundo')  -->
		<p v-destaque-local:fundo="'blue'">Usando diretiva personalizada => aplicando na cor do fundo, ou seja, backgroundColor</p>
		<!-- Diretiva personalizada + ARGUMENTO ('fundo') + modificadores -->
		<p v-destaque-local:fundo.atrasar="'blue'">Diretiva personalizada + ARGUMENTO ('fundo') + modificadores</p>

	</div>
</template>

<script>
export default {
	data(){
		return{
			cor:'red'
		}
	},
	// criando diretivas locais
	directives:{
		'destaque-local':{
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
</style>
