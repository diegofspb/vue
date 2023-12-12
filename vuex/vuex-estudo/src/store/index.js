import { createStore } from 'vuex'

/*
  state = contém os dados = atributos e não os métodos;
  mutations = altera os dados = salva ou deleta dados no 'state' = apenas métodos;
  getters = funciona como computed

*/

export default createStore({
  state: {
    user:{
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    products:[
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart:[] //carrinho de compras
  },

  /*
    No Vuex, as mutations são responsáveis por modificar o estado da aplicação de maneira síncrona. 
    Cada mutação é uma função que recebe o estado como primeiro argumento e os parâmetros necessários como segundo argumento. 
    Quando você chama uma mutação usando commit, ela é executada e pode modificar o estado.
  */
  mutations: { 
    storeUser(state, data){  // esta função sempre recebe o 'state' como parâmetro obrigatório e data como payload que é o dado a ser atualizado
      state.user = data // faz com que os dados de user que esta em state sejam atualizados com o parâmetro 'data' vindo do App.vue
    },
    addProduct(state, data){
      //adicionando um produto no carrinho
      state.cart.push(data);
    },
    removeProduct(state, id){
      const idx = state.cart.findIndex(o => o.id === id) // objetivo de pegar o número do index do objeto a ser excluído do carrinho
      // a função de javascript findIndex() vai 'iterar' para procurar o index do objeto desde que atenda a função de callback que está dentro dos ()
      // lê-se assim dentro dos parênteses: os objetos que estão dentro de state.cart serão iterados pela função findIdex
      // o é cada um dos objetos, tal que, a id de cada objeto que está sendo iterado 'o.id'  tem que ser igual === a id passada pela chamada da função
      // assim que encontrar pela primeira e única vez o id procurado, então a função retornará o valor do index para a contante 'idx'
      state.cart.splice(idx);
      // splice  irá remover todos os elementos a partir do índice idx
    }
  },
  getters: {
    total(state){ // funciona como uma 'cumputed' e está somando no total os valores unitários de cada objeto que está entrando no carrinho
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  actions: {
    // a documentação no Vue diz que antes de salvar os dados através do mutations, deve-se usar o 'actions' para após executar uma 'promessa' 
    // é que o objeto seria salvo através do mutations
  },

})
