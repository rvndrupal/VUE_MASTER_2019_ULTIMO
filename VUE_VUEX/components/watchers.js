 Vue.component('watchers' , {

    data() {
        return{
            user: null,
            olduser: null
        }
    },
    computed: {
    },

    // mounted() {
    //     this.randomUser()
    // },
    methods: {
        async randomUser(){
            try {
                const data=await fetch('https://randomuser.me/api/');
                const json=await data.json();
                const user=json.results[0];

                console.log(user);

                this.user=`${user.name.title} ${user.name.first} ${user.name.last}`
                
            } catch (error) {
                console.log("Algo esta mal");
            }
        }
    },

    watch: {
        user(newVal, oldVal){
            this.user=newVal;
            this.olduser=oldVal;
        }
    },

    template: `
        <div>
            <button type="button" @click="randomUser" class="btn btn-primary">Cargar nuevo Usuario</button>
            <h2>Watchers con VueJs</h2>
            <p>Nuevo usuario: {{ user }}</p>
            <p>Usuario anterior: {{ olduser }}</p>
    
    
        </div>
    `
});