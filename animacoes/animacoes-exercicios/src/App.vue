<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

		<transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return{
			msg: 'Uma mensagem de informação para o usuário',
			exibir: false
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
	font-size: 1.5rem;
}

/* 
	As classe css abaixo são na realidade classes do componente 'transition' e obedecem a um fluxo padrão: 
	se eu não tivesse nomeado o componente 'transition' de 'fade' então o Vue daria o nome padrão 'V', ficando v-enter, v-enter-active ...
*/

.fade-enter{    /* estado inicial, aqui vamos deixar o componente invisível */
	opacity:0
}
.fade-enter-active{    
	transition: opacity 2s; /* entre o estado .fade-enter(inicial de aparecimento) e fade-enter-to(final de aparecimento) vai durar 2 segundos*/
}
.fade-enter-to{    /* componente totalmente visível = final da transição de entrada */
	opacity:1
}
.fade-leave{     /* início da transição de saída */
	opacity:1
}
.fade-leave-active{    
	transition: opacity 2s; /* entre o inicio do fim até o fim vai durar 2 segundos*/
}
.fade-leave-to{    /* final da transição de saída */
	opacity:0
}

</style>



