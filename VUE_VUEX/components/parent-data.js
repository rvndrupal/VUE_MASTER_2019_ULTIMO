 Vue.component('parent-data' , {

    data() {
        return{
            
        }
    },
    computed: {
    },
    methods: {
    },
    template: `
        <div>
            <h2>Tomando los datos del componete padre</h2>
            {{ $parent.appName }}
    
        </div>
    `
});