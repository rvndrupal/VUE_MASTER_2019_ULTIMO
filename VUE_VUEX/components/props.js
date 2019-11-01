 Vue.component('props' , {

    data() {
        return{
        
        }
    },
    computed: {
    },
    methods: {
    },
    props:{
        nombre:{
            type: String,
            required:true
        },
        ap:{
            type:String,
            required:true
        },
        edad:{
            type:Number,
            required:true,
            validator: value =>{
                if(value < 18){
                    console.warn("No eres mayor de 18");                  
                    return false;
                }                
                return true;
            }
        }
    },
    template: `
        <div>
            <h2>Props con VueJs 2</h2>
            <p>{{ nombre }} {{ ap }} {{ edad }}</p>
    
    
        </div>
    `
});