 Vue.component('login-form' , {

    data() {
        return{
            logged:false,
            user:{
                email:'',
                password:''
            }
        }
    },
    computed: {
    },
    methods: {
        login(){
            this.logged= this.user.email === "rod@gmail.com" && this.user.password === "123";
        }
    },
    template: `
        <div>
            <h2>Fromulario de Login</h2>
            <p v-if="logged" style="background: green; color: #ffff">
                Has Iniciado la Sesión con los datos: {{ user }}
            </p>
            <p v-else style="background: red; color: #ffff">
                Faltan los datos para validar el Formulario
            </p>

            <form @submit.prevent="login">
                <input id="email" class="form-control" type="email" name="email" v-model="user.email">
                <input id="password" class="form-control" type="password" name="password" v-model="user.password">
                <button type="submit" class="btn btn-primary">Inicando sesión</button>
            </form>
    
    
        </div>
    `
});