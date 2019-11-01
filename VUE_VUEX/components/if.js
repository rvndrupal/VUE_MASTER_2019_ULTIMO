 Vue.component('if' , {

    data() {
        return{
            age: 10
        }
    },
    computed: {
    },
    methods: {
    },
    template: `
        <div>
            <h1>Condicionales con if</h1>

            <input id="age" class="form-control" type="age" name="age" v-model="age">

            <p v-if="age < 18">Menor de Edad</p>
            <p v-else-if="age >= 18 && age < 65">Mayor de 18 y menor de 65</p>
            <p v-else>Estas jubilado</p>
    
    
        </div>
    `
});