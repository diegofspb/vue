<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ usuarioNome }}</strong></p>
        <!-- <button @click="reiniciarNome">Voltar nome</button> -->
    </div>
</template>

<!-- 
    ELEMENTO ou TAG em html: 
        é todo código que está entre os sinais <>, exemplo <img src> <p> <div> etc...
    ATRIBUTOS em HTML: 
        é a soma de chave valor, exemplo <img src="texto">, neste exemplo a chave é src e o valor é o texto
        então nem todo elemento/tag possui atributo, como exemplo <p>
        Atributos são informações adicionais associadas a um elemento HTML
        são usadas para configurar características ou comportamentos do elemento/tag.
    PROPRIEDADES em html:
        é o nome da chave, no exemplo acima seria apenas o 'src'
-->

<script>
// as propriedades ('props') é a forma mais direto e fácil de haver comunicação em Componente Pai -> Componente Filho
    export default {
        
        props: {
            usuarioNome: {
                type: String,
                default: 'Antonio'
            }
        },
    }
</script> 

<!-- 

props é um objeto que define as propriedades (ou atributos) que o componente pode receber de seu componente pai. 
note que depois de props existe uma lista [], assim o que tiver dentro dela será as propriedades/atributos que poderão ser recebidos/comunicados 
   

            USANDO O 'props' para VALIDAR os dados de entrada:

As "props" (abreviação de "properties") no Vue.js são mecanismos que permitem que os componentes pais transmitam dados para os componentes filhos. Você pode passar dados personalizados de um componente pai para um filho através das "props". As "props" podem ser usadas para tornar os componentes mais flexíveis e reutilizáveis.

A sintaxe que você mencionou com chaves (`{}`) em vez de colchetes (`[]`) é uma forma alternativa de definir "props" quando você precisa especificar mais detalhes sobre cada propriedade, como o tipo esperado e se a propriedade é obrigatória ou não. Aqui está como você pode definir "props" usando ambas as notações:

Usando colchetes (notação abreviada):

```javascript
props: ['nome']
```

Usando chaves (notação detalhada):

```javascript
props: {
  nome: String // Aqui você pode especificar o tipo de dado esperado
}
```

A notação detalhada permite que você forneça informações adicionais sobre cada propriedade, como:

1. **Tipo de Dado:** Você pode especificar o tipo de dado esperado para a propriedade. Isso ajuda a garantir que os dados passados sejam do tipo correto.

```javascript
props: {
  nome: String, // Espera uma string
  idade: Number, // Espera um número
}
```

2. **Valor Padrão:** Você pode definir um valor padrão para uma propriedade se ela não for fornecida pelo componente pai. Isso pode ser útil quando você deseja fornecer um valor padrão para uma propriedade, caso ela não seja especificada.

```javascript
props: {
  nome: {
    type: String,
    default: 'John' // Valor padrão é 'John'
  }
}
```

3. **Obrigatoriedade:** Você pode indicar se uma propriedade é obrigatória ou não, o que significa que o componente pai deve sempre fornecer essa propriedade. Se o componente pai não fornecer uma propriedade obrigatória, o Vue.js emitirá um aviso.

```javascript
props: {
  nome: {
    type: String,
    required: true // A propriedade 'nome' é obrigatória
  }
}
```

Ambas as notações, seja usando colchetes ou chaves, são válidas, e a escolha entre elas depende de quanto detalhe você deseja especificar para suas "props". A notação detalhada é mais expressiva e oferece mais controle sobre as propriedades, enquanto a notação abreviada é mais concisa e é frequentemente usada quando você não precisa de informações adicionais sobre as "props".
    
-->

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
