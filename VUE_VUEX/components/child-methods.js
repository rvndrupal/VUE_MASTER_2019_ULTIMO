 Vue.component('child-data' , {

    data() {
        return{
            cmpName:'Información del hijo child-data'
        }
    },
    computed: {
    },
    methods: {
        showCmp(){
            console.log("Lammada al metodo ",this.cmpName)
        }
    },
    template: `
        <div>
            <h2>Acceso a los datos de este hijo dese el padre.</h2>
    
        </div>
    `
});