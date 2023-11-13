<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <router-view />        
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>
<!-- 
    no arquivo css o sucesso nem está como classe nem como id e sim como ATRIBUTO;
    para que o css entenda que 'sucesso' é um atributo basta colocar ele entre colchetes: [sucesso] {} 
-->

<script>
export default {  

methods:{
    irParaInicio(){
        // this.$router.push('/') //ou
        // this.$router.push({path: '/'}) ou a forma NOMEADA:
        this.$router.push({name: 'inicio'}) // inicio é o nome dado a rota ('/') construida no arquivo router.js
        }
    }    
}

</script>
<!--
     data(){
         return{
             id: this.$route.params.id
         }
     },
     watch:{
          eslint-disable-next-line no-unused-vars
         $route(to, from){
              Atualiza a propriedade id com o novo valor da rota
             this.id = to.params.id
         }
     },


 watch é uma opção em um componente Vue que permite que você observe alterações nas propriedades ou expressões e reaja a essas alterações.
 $route:

 $route é uma propriedade especial em componentes Vue que contém informações sobre a rota atual. Neste caso, a opção watch está assistindo às mudanças nesta propriedade.

 to e from:

 Esses são os parâmetros passados para a função de callback da opção watch. Eles representam o objeto $route antes da mudança (from) e depois da mudança (to).
 this.id = to.params.id;:

 Dentro da função de callback, você está atualizando a propriedade id do componente com o valor do parâmetro id da rota atual (to.params.id).

 
    $router é um método Vue que permite você acessar o código que está no arquivo 'router.js';

    o arquivo 'router.js' contém todas as rotas;

    'this.'' serve para apontar para um atritubo ou método de outro componente que no caso é o 'router.js';

    push('/') é um método do Vue Router que empurra uma nova entrada para a pilha de histórico, 
    navegando assim para a rota especificada (no caso, a rota raiz '/'). 
-->
