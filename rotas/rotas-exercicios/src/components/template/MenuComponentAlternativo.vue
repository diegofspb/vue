<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/usuario" tag="li" active-class="active"><a>User</a></router-link>
    
        </ul>
    </nav>
    <!--
        <router-link> sempre estará vinculado ao que estiver configurado em 'router.js' (local padrão das rotas em Vue);
        <router-link> cria obrigatoriamente uma ancora <a> para linkar o label que estiver dentro dele;
        to="" é justamente o destino que está previsto no 'router.js';

        active-class="" é uma tag que ativa uma classe que está configurada em seu css
        "active" é o nome da classe que está no css que deixa a tag azul claro como se estivesse ativa

        'exact'sem utilizar ele, ao clicar em Inicio ou em Usuário, ambas as tags ficam ativas, ou seja = azul claro

        ao utilizar o active-class="", ele aplicará o css a tudo que estiver no to="/" só que a tag usuário também
        começa com a barra to="/usuario", então o exact especifica que para o active-class="" ficar realmente ativo
        o url que o to="" estiver apontando tem que ser exatamente o que está dentro do to=""

    -->
</template>