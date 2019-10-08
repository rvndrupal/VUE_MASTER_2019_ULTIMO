var app = new Vue({

    el:'#app',

    data: {
        x: 0,
        y: 0
    },

    methods: {
       mostrarC: function(evento){
           this.x= evento.clientX;
           this.y= evento.clientY;
       }

    },
  

})