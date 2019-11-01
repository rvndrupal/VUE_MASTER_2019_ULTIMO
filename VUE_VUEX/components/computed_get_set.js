 Vue.component('computed_get_set' , {

    data() {
        return{
            cantidad: 0
        }
    },
    computed: {

        cantidadCalculada:{
            get(){
                // return `${this.cantidad}$`;  se quita el signo para pasar el filtro  
                return `${this.cantidad}`; 
            },
            set(newValue){
                this.cantidad=newValue;
            }
        }
    },
    methods: {
    },
    template: `
        <div>
            <h2>Computed con get y set </h2>
            <input v-model="cantidad">
            <p>La cantidad es: {{ cantidadCalculada | currency_filter('$') }}</p>
    
    
        </div>
    `
});