<template>
    <div class="seccion">
        <div class="atributo">
            <span>{{ nombreCompleto }}</span>
        </div>
        <div class="atributo">
            <span> <img :src="foto"> </span>
        </div>
        <div class="atributo">
            <span> <a :href="biografia" target="_blank">Biografia</a></span>
        </div>
        <div class="atributo">
            <span>Edad: {{ edad }}</span>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            nombres: 'Isaac',
            apellidos: 'Newton',
            fechaNacimiento: new Date(1994, 9 ,27),
            foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg/220px-Sir_Isaac_Newton_%281643-1727%29.jpg',
            biografia: 'https://es.wikipedia.org/wiki/Isaac_Newton'
        }
    },
    computed: {

        nombreCompleto(){
            return `${this.nombres} ${this.apellidos}` 
        }, 
        edad(){
            return this.calcularEdad(this.fechaNacimiento)
        }
    },
    methods:{
        calcularEdad(fecha){
            let fechaActual= new Date()
            let diferencia= fechaActual - fecha
            return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25))
        }
    }

    
}
</script>

<style>


    
</style>