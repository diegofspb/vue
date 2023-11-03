new Vue({
    el: '#desafio',
    data:{
        nome: 'Diego',
        idade: '38',
        urlImagem : 'https://media.istockphoto.com/id/887313506/pt/foto/anxious-teenage-student-sitting-examination-in-school-hall.webp?s=2048x2048&w=is&k=20&c=UpTV6AMPdYPD_z66owPr78kznX2zgJNriBH90KdRUyc='
    },
    methods:{
        idadeMultiplicar(){
            return this.idade *3
        },
        numeroAleatorio(){
            return Math.random()
        }
    }
})