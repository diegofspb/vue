<template>
    <div class="usuario-detalhe">
        <h3>Usuario detalhe</h3>
        <hr>
        <p><strong>Id do usuário passado via Url: </strong>{{ id }}</p>
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> 
             abaixo está o exemplo usando ROTA NOMEADA:
        -->
        <router-link tag="button" primario :to="{ name: 'editarUsuario', params:{id} }">Editar</router-link>  
    </div>
</template>
<!-- 
    - primario é um atributo que está no style.css ficando [primario] {}, parece com um id # normal de css ou uma classse .
    - router-link pode gerenciar qualquer elemento html;
    - to="/usuario/1/editar"  inicialmente foi colocado assim hardcode para exemplificar, porém não serve de verdade e 
      para conserta foi utilizado a crase para usar o template strings e dentro dela usa o ${atributo} que é a sintaxe do JS.
-->
<script>
    export default{
        props: ['id']
    }
</script>