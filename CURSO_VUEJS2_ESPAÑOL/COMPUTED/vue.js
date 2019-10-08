var app = new Vue({

    el:'#app',

    data: {
     primero: 0,
     segundo: 0,
     tercero: 0,
     cuarto: 0,
    },
   computed:{

        suma: function(){
            return this.primero+this.segundo+this.tercero+this.cuarto;
        }
   }
   

})