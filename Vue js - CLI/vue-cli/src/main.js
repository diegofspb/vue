import { createApp } from 'vue'
import App from './App.vue'
// import Contador from './ContadorVue.vue'
import Contadores from './ContadoresVue.vue'  // 'Contadores' é uma variável qualquer que assume o valor de 'component'

const app = createApp(App)

app.component('app-contadores', Contadores) // 'app.component' registra um componente de forma global e associa um nome qualquer a um componente criado

app.mount('#app')




/*
    import { createApp } from 'vue': 

        Importa a função createApp da biblioteca 'Vue'
        createApp é uma função usada para criar uma instância da aplicação Vue.        

    import App from './App.vue': 

        Importa o componente principal da aplicação Vue, que está definido no arquivo "App.vue". 
        Este é o componente raiz da sua aplicação.

    createApp(App).mount('#app'): 
    
        Cria uma instância da aplicação Vue, passando o componente raiz "App" como argumento para createApp(). 
        Em seguida, ele monta a instância da aplicação no elemento HTML com o ID "app". 
        Isso significa que o conteúdo da sua aplicação Vue será renderizado dentro desse elemento.
*/