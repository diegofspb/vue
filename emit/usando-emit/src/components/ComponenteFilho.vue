<template>
  <button @click="enviarEvento">Clique aqui para enviar evento para Componente Pai</button>
</template>

<script>
export default {
  methods:{
    enviarEvento(){
      this.$emit('enviarEvento', 'adicionando dados opcionais no $emit');
    }
  }
}
</script>
