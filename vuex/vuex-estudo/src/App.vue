<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <AppProducts />
    <br>
    <br>
    <pre>
      <p>Quantidade e objetos adicionados no carrinho: {{ $store.state.cart.length }}</p> 
      <h4>Carrinho de Compras:</h4>      
      {{ $store.state.cart }}
    </pre>
    
    Nome Completo usando 'mapState': {{ fullname }} 

    <br><br>
    <span>Total das compras: R$</span>{{ $store.getters.total }}

    <div>
      <h3>Pegando dados do usuário através do Vuex em $store</h3>
      <p>Usuário primeiro nome: <span>{{ $store.state.user.first_name }}</span></p>
      <p>Usuário segundo nome: <span>{{ $store.state.user.last_name }}</span></p>
      <p>Usuário email: <span>{{ $store.state.user.email }}</span></p>
    </div>
    <div>
      <button @click="updateUser()">
        Atualizando dados do Usuário
      </button>
    </div>
  </div>
</template>

<script>
import AppProducts from '@/components/Products/AppProducts';
import { mapState } from 'vuex'; // serve para criar nomes que resumem métodos que teriam o nome grande

export default {
  components: { AppProducts },
  data(){
    return{
      title:'Aula de Vuex'
    }
  },
  created(){
    console.log('Acessando todo o \'store\' com vuex: ',this.$store);
    console.log('Acessando dados apenas do state no Vuex: ',this.$store.state.user);    
  },
  computed:{
    ...mapState({ // lembrando que ... serve para dar uma continuidade ao computed, senão o computed usaria apenas o mapState
      firstName: state => state.user.first_name,
      lastName: state => state.user.last_name,
    }),
    fullname(){
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods:{
    updateUser(){
      const newUser={
        first_name: 'diego',
        last_name: 'farias',
        email: 'diego@farias.com'
      }

    this.$store.commit('storeUser', newUser) 
    /*

      Por padrão, as mutações no Vuex devem ser chamadas dentro de um bloco commit. 

        exemplo: 
                this.$store.commit('NOME_DA_MUTACAO', payload);

                NOME_DA_MUTACAO é o storeUser que é o nome da função que está em mutation que está em index.js dentro do diretório 'store'
                newUser é o payload, ou seja, é o dado que você está passando e que será atualizado = novo usuário

      O commit é usado para acionar uma mutação e é uma maneira de garantir que as mutações sejam síncronas.

    */
    }
  }
}
</script>

<style>

</style>
