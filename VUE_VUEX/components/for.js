 Vue.component('for' , {

    data() {
        return{
            frameworks:[
                { id: 1, name: 'Vuejs'},
                { id: 2, name: 'React'},
                { id: 3, name: 'Angular'},

            ],
        }
    },
    computed: {
    },
    methods: {
    },
    template: `
        <div>
            <h2>Lista de Frameworks</h2>

            <ul>
                <li v-for="(fre , index) in frameworks" :key="fre.id">
                    {{ index+1 }}-{{ fre.name }}
                </li>
            </ul>
    
    
        </div>
    `
});