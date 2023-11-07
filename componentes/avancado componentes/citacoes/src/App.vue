<template>
	<div id="app">
		<!-- 
			Esta era a forma inicial da aula que exibe na home os dois compoentes abaixo:

			<Citacoes />
			<Sobre /> 

			porém depois a aula evoluiu para você poder escolher qual componente exibir ficando:
		-->
		<span>
			<button @click="componente = 'Citacoes'">Citacoes</button> <!-- Citacoes e Sobre são os nomes dados aos imports dos componentes -->
			<button @click="componente = 'Sobre'">Sobre</button>
		</span>

		<keep-alive>
			<component :is="componente" />  <!-- isso aqui é o que será exibido na home, porém vc pode alternar nos botões acima -->
			<!-- Para usar a diretiva is em um componente Vue, você deve fornecer o nome do componente como uma string -->
		</keep-alive>
		<!-- keep-alive faz com que o componente não reja reiniciado quando vc saí dele, imagino que seja similar a quando você está digitando algo em um formulário e ao sair e voltar o componente ainda esteja com os dados digitados -->

	</div>
</template>

<script>
import Citacoes from './components/CitacoesComponente'
import Sobre from './components/SobreComponente'

export default {
	components: { Citacoes, Sobre },
	data(){
		return{
			componente: 'Sobre'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>