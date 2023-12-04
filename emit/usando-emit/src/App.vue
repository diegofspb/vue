<template>
  <div>
    <!-- <p>Evento Recebido: {{  }}</p> -->
    <ComponenteFilho @enviarEvento="lidarComEvento" />    
  </div>
</template>

<!-- 
$emit é um recurso em Vue.js usado para emitir eventos personalizados de um componente filho para um componente pai. Isso é particularmente útil quando você precisa que um componente filho informe ao componente pai sobre alguma ação ou estado específico.
 -->

<script>
import ComponenteFilho from '@/components/ComponenteFilho';

export default {
  components:{
    ComponenteFilho,
  },
  methods:{
    lidarComEvento(dadosOpcionais){
      console.log('evento recebido no componente pai + ' + dadosOpcionais)
    }
  }
}
</script>
