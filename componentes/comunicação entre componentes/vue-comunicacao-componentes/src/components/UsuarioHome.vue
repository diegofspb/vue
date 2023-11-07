<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome em UsuarioHome.vue = <strong>{{ nome }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :usuarioNome="nome"/>
            <app-usuario-editar />
        </div>
    </div>
</template>

<!-- 
    explicando o código acima:

    ':usuarioNome' é o v-bind criando/nomeando uma propriedade/atributo ao elemento <app-usuario-info> que vai se comunicar com outro componente
    ':usuarioNome' recebe o valor que está dentro da propriedade/atributo 'nome'
    'nome' é uma propriedade/atributo criada e atribuído seu valor neste componente que estamos 'UsuarioHome.vue'
    'nome' é uma propriedade/atributo que será lançada dentro de outra propriedade/atributo do tipo 'comunicante' criada através de um 'props'

    Ao chamar/importar 'app-usuario-info' que é um componente presente em outro aquivo chamado UsuarioInfo.vue, lá está vindo a seguinte <div>:

            <div class="componente">
                <h2>As Informações de Usuário</h2>
                <p>Vários detalhes...</p>
                <p>Nome do Usuário: <strong>{{ usuarioNome }}</strong></p>
            </div>
    
    para que o componente UsuarioInfo.vue tivesse uma propriedade que se comunicasse com uma propriedade de outro componente, foi preciso criar um 'props'
    
            props: ['usuarioNome'] 

    declarando que o componente UsuarioInfo.vue, aqui importado e nomeado como 'app-usuario-info', agora possui uma propriedade/abritudo 'nome'
    -->

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome:'Pedro'
        }
    },
    methods:{
        alterarNome(){
            this.nome = 'Ana'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
