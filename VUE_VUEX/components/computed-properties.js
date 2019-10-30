 Vue.component('computed' , {

    data() {
        return{
        
            name: 'rodrigo',
            ap: 'Villanueva',
            am: 'Nieto'

        }
    },
    computed: {
        fullName(){
            return `${this.name} ${this.ap} ${this.am}`
        }
    
},
    template: `
    <div>
        <h2>Componenet computar</h2>

        <p>{{ name }} {{ ap }} {{ am }}</p>

        <h2>De la otra manera</h2>

        {{ fullName }}



    </div>
    `
});