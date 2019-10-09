<template>
    <div class="anuncio">
        {{ presentaciones[indice] }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            presentaciones:[
                'Hamilton - 20:30',
                'Frozen - 10:30',
                'Avengers - 21:30',
                'El rey León - 18:00',
            ],
            indice: 0
        }//return
    },//data
    methods: {
        mostrarAnuncio(){
            this.indice++
            if(this.indice == this.presentaciones.length){
                this.indice = 0
                //quitar el infinito
                this.$destroy()
            }
        }
    },

    mounted() {
        setInterval(this.mostrarAnuncio, 3000)
    },
}
</script>

<style>

.anuncio{
    margin: 10px;
    font-size: 2rem;
    border-top: solid 1px white;
    border-bottom: solid 1px white;
}
    
</style>