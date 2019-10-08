var app = new Vue({

    el:'#app',

    data: {
        resultado: 0
    },

    methods: {
        sumar: function(){
            this.resultado+=1;
        },
        restar: function(){
            this.resultado-=1;
        }

    },
  

})