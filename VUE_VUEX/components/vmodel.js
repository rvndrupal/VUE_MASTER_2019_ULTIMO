 Vue.component('vmodel' , {

    data() {
        return{
            framework: 'Vuejs 2'
        }
    },
    computed: {
    },
    methods: {
    },
    template: `
        <div>
        <h2>Trabajando con v-model</h2>
        <input class="form-control" type="text" v-model="framework" v-focus >
        <p>El framework es: {{ framework }}</p>
    
        </div>
    `
});