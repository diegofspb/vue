<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email"> 
					<!-- 
						lembrando que v-model = v-bind + v-on 
						v-bind = linka o valor do atributo em data() com o valor do elemento html
						v-on = fica 'escutando'

						o input pode ser utilizado com 3 recursos:

							.lazy = faz com que o v-model só replique os dados que estão sendo digitdos, quando o usuário mudar de campo
							.trim = remove espaços vazios
							.number = mesmo vc criando um input type="number" o que você digita é string, o '.number' garante que o que vc digitar será numero
					-->
					
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4">
						<input type="checkbox" value="reproduzivel" v-model="usandoCheckbox"> 
							Reproduzível
					</span>
					<span>
						<input type="checkbox" value="intermitente" v-model="usandoCheckbox"> 
							Intermitente
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" value="web" v-model="usandoRadio"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="usandoRadio"> Mobile</span>
					<span><input type="radio" value="outro" v-model="usandoRadio"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select name="" id="" v-model="prioridade">
						<option v-for="prioridade in prioridades" :key="prioridade.codigo" :value="prioridade.nome"> {{ prioridade.nome }}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha />
				</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{usuario.email}}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{usuario.senha}}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{usuario.idade}}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span style="white-space: pre;">{{mensagem}}</span>   
					<!-- style="white-space: pre;" por padrão uma caixa de texto já corta espaços em branco e não permite quebra de linha, ao utilizar 'white-space: pre' a caixa de texto passar a aceitar tudo normalmente -->
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="c in usandoCheckbox" :key="c">{{ c }}</li>  <!-- não está funcionando -->
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span> {{ usandoRadio }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span> {{prioridade}} </span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>???</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
	import Rotulo from './components/RotuloComponente.vue'
	import Escolha from './components/EscolhaComponente.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha }
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
