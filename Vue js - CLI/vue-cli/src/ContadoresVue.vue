<template>
    <div class="contadores">
        <app-contador />
    </div>
</template>
  
<script>
    import Contador from './ContadorVue.vue'

    export default{
        components: {'app-contador': Contador}
    }
</script>

<style>
</style>

  <!-- 
    Estrutura de um Component:<template>
      
        Template: 

            Esta seção define a estrutura do componente na forma de um código HTML. É onde você descreve como o componente deve ser renderizado na página.

        Script: 
            Aqui, você escreve a lógica do componente. Isso inclui métodos, propriedades de dados, ganchos de ciclo de vida e outras configurações do componente.

        style: 
        
            Esta seção permite que você defina estilos CSS específicos para o componente, isolados dos estilos de outros componentes ou da página em que o componente é usado.  
   -->
  