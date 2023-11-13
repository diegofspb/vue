<template>
    <div class="usuario-editar">
        <h3>Usuario editar</h3>
        <hr>
        <button primario @click="confirmar = true">Confirmar</button>
        <p><strong>Id do usuário passado via Url: </strong>{{ id }}</p>
    </div>
</template>

<script>
    export default{
        props: ['id'],
        data(){
            return {
                confirmar: false
            }
        },    // quando o usuário tentar sair da pagina só vai poder sair se antes clicar em confirmar conforme botão acima ou dar 'ok' no alert
        beforeRouteLeave(to, from, next){
            if(this.confirmar){
                next()
            }else{
                if(confirm('Tem certeza ?')){
                    next()
                }else{
                    next(false)
                }
            }

        }
}
</script>