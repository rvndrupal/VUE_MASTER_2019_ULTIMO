var app = new Vue({

    el:'#app',

    data: {
        mensaje: 'Hola desde mensaje',
        src:'https://vuejs.org/images/logo.png'
    },
    methods:{
        // mostrarM: function(){
        //     return 'Mostrar nuevo mensaje desde función'
        // }
        mostrarM: function(){
            return this.mensaje;
        }
    }
   

})