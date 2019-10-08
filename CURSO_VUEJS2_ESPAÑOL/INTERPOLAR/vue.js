var app = new Vue({

    el:'#app',

    data: {
        mensaje: 'Hola desde mensaje'
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