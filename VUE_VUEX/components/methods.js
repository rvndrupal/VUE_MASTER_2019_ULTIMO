   Vue.component('methods' , {
  
      data() {
          return{
          name:'rodrigo',
          ap:'villanueva'
          }
      },
      computed: {
          fullname(){
              return `${this.name} ${this.ap}`
          }
      },
      methods: {
          hola(){
              alert(this.fullname);
          }
      },
      template: `
          <div>
            <h2>Ejecutar los metodos</h2>
            <p @click="hola">Pulsa aqui para ejecutar el evento</p>
      
          </div>
      `
  });