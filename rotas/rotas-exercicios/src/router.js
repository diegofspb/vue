/* Esse arquivo 'router.js' é dedicado a:

    - definir as rotas da sua aplicação;
    - associar cada rota a um componente específico;
    - configurar opções adicionais do Vue Router.

    Obs.: tem que ser importado para o arquivo principal que neste caso é o 'main.js'
*/

import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/InicioComponent'
import Usuario from './components/usuario/UsuarioComponent'

import Menu from './components/template/MenuComponent'
import MenuAlt from './components/template/MenuComponentAlternativo'

import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({ // éu uma instancia do Vue Router que define as rotas do projeto
    mode: 'history', //não funcionou porém o correto é que ao utilizar este moto a url invez de aparecer # irá aparecer a url completa
    routes: [{        
        path: '/',
        name: 'inicio',
        components:{
            default: Inicio, // default é o <router-view />  não nomeado
            menu: Menu //menu está previsto no AppRotas.vue
        }
        // component: Inicio  // 'Inicio' é o apelido que foi dado ao componente 'InicioComponent'
        // o código acima se refere a apenas 1 componente, porém a aula evoluiu para uma situação em que a página home vai executar 2 componentes ou mais
        // o 'component' acima está comentado, pois logicamente por ser singular apenas acessará 1 componente, no caso abaixo é possível varios
    }, {
        path: '/usuario', // exemplo passando parâmetros pela url
        // component: Usuario,  // 'Usuario' é o apelido que foi dado ao componente 'UsuarioComponent'
        components:{
            default: Usuario, // default é o <router-view />  não nomeado
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true, // significa que tudo que for passado na url será considerado uma propriedade para o componente que está recebendo
        // abaixo estão as ROTAS ANINHADAS, são rotas filhas vinculadas a uma rota principal '/usuario' que é a rota pai
        children:[
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true},  //utilizando ':id' com os dois ponto, o Vue interperta o id como parâmetro
            // exemplo da url: http://localhost:8080/usuario/1
            {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'} 
            // se não usar os : antes do id, o Vue entenderá como um literal ou seja, uma aba de nome id
            // exemplo da url: http://localhost:8080/usuario/1/editar
            // name é a forma de nomear uma rota, então não precisa mais usar o path, basta usar o name, veja o exemplo em UsuarioDetalhe.vue
        ]
    }, {
        path: 'redirecionar',  // isso faz com que ao se digitar na url http://localhost:8080/usuario/redirecionar 
        redirect: '/usuario'  // ele volta para http://localhost:8080/usuario
    },{
        path: '*', // esse é o PEGA TUDO, qualquer url que não estiver prevista elel envia para home do projeto
        redirect: '/'
    }]
})
