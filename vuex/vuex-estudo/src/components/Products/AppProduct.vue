<template>
    <div class="card">          
        {{ product.name }} - {{ product.price }}     
        <button @click="addProduct()">Adicionar ao carrinho</button>  
        <button @click="removeProduct()">Remover do carrinho</button>        
        <!-- <pre> este pré exibe o produto em formato json 
            {{ product }}
        </pre> -->
    </div>
</template>

<script>
export default {
    props:{
        product: Object
    },
    methods:{
        addProduct(){
            this.$store.commit('addProduct', this.product)
        },
        removeProduct(){
            this.$store.commit('removeProduct', this.product.id)
        }
    }
}
</script>

<style>
.card{
    background-color: aqua;
    padding: 6px;
    margin-bottom: 5px;
    width: 200px;
}
</style>