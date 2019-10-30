 Vue.component('emit' , {

    data() {
        return{
            marca:' Toyota',
            modelo: 'modelo clasico'
        }
    },
    computed: {
    },
    methods: {
    },
    template: `
        <div>
            <h2>Emitiendo eventos al padre es decir al Root</h2>
            <p @click="$emit('pasar_evento',  modelo)">Pulsa para pasar la marca del carro</p>
    
    
        </div>
    `
});