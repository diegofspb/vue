<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- 
            <Citacao :texto="citacoes[indice].texto"></Citacao> O código cima é subtituído pelo uso do <slot> que dispensa uso de 'props';  
        -->
        <Citacao>
            <h1 slot="autor">{{ citacoes[indice].autor }}</h1>  
            <p  slot="texto">{{ citacoes[indice].texto }}</p>  
            <h6  slot="fonte">{{ citacoes[indice].fonte }}</h6>  
        </Citacao>
    </div>
</template>

<!--
    No Vue.js, os componentes podem se comunicar trocando informações através de propriedades (props). No código acima:

    - `:texto` é uma propriedade do componente `Citacao`. Isso significa que o componente `Citacao` espera receber uma propriedade chamada `texto`.

    - `"citacoes[indice].texto"` é o valor que está sendo passado para a propriedade `texto`. Esse valor é uma expressão JavaScript que é avaliada dinamicamente. Vamos quebrar essa expressão em partes:

    - `citacoes` é um array que contém várias citações.
    
    - `indice` é uma propriedade computada (computed property) no seu componente que calcula o valor do índice com base na propriedade `numero`. O valor de `indice` é calculado como `Math.abs(this.numero % 3)`. Isso é usado para determinar qual citação deve ser exibida com base no valor de `numero`.

    - % (módulo): É o operador de módulo em JavaScript, que calcula o resto da divisão. Por exemplo, 10 % 3 resultaria em 1, pois o resto da divisão de 10 por 3 é 1.

    - this.numero % 3 é usado para garantir que o valor resultante esteja dentro do intervalo de 0 a 2 (inclusive). Isso é útil para ciclar pelas citações em um array de 3 citações (índices 0, 1 e 2) de forma cíclica, garantindo que, mesmo se this.numero for um número grande ou negativo, você sempre obtenha um índice válido para acessar as citações no array. Isso permite que você percorra as citações em um loop contínuo, retornando ao início quando necessário.

 -->

<script>
import Citacao from './CitacaoComponente.vue'

export default {
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    components:{
        Citacao
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
