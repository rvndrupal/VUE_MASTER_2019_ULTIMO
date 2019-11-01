 Vue.component('load-dynamic-component' , {

    data() {
        return{
            componentes:['cmp1','cmp2','cmp3'],
            comActual: 'cmp1'
        }
    },
    computed: {
    },
    methods: {
        changeC(cmp){
            this.comActual=cmp;
        }
    },
    template: `
        <div>
            <h1>Selecciona un componente</h1>
            <button v-for="cmp in componentes" @click="changeC(cmp)">
                Componente {{ cmp }}
            </button>

            <!-- La magia -->
            <component :is="comActual"></component>
    
        </div>
    `
});