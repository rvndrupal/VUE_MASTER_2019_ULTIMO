 Vue.component('vmodel-checkbox' , {

    data() {
        return{
            frem:[]
        }
    },
    computed: {
    },
    methods: {
    },
    template: `
        <div>
            <h2>Selecciona un Framework</h2>
            <input class="form-control" type="checkbox" value="Vuejs2" v-model="frem">
            <label for="vuejs2">Vuejs2</label>
            <input class="form-control" type="checkbox" value="Angular" v-model="frem">
            <label for="angular">Angular</label>
            <input class="form-control" type="checkbox" value="React" v-model="frem">
            <label for="react">React</label>

            <p>Los frameworks son: {{ frem }}</p>
          
    
        </div>
    `
});