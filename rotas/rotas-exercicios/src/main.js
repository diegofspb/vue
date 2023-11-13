import './style.css'
import Vue from 'vue'
import App from './AppRotas.vue'
import router from './router'

/*

Abaixo está um exemplo de como registrar um componente para ser utilizado globalmente:

    import MeuComponenteGlobal from './components/MeuComponenteGlobal.vue';

    Vue.use(MeuComponenteGlobal);

    Dentro do arquivo do MeuComponenteGlobal.vue:

    export default {
        install(Vue) {
          // Registro global
          Vue.component('meu-componente-global', MeuComponenteGlobal);
        },
        // Restante do componente...
      };

*/

Vue.config.productionTip = false

new Vue({
  router, //router é importado, indicando que a aplicação usa o Vue Router.
  render: h => h(App),
}).$mount('#app')

/*
  O que está dentro da instância Vue (new Vue({...})) e é fornecido como opções é o que será usado na instância principal da aplicação Vue. 
  Isso inclui o roteador (router), e qualquer configuração que você deseje aplicar globalmente, como Vue.config.productionTip para desativar mensagens de dica de produção no console.
*/
