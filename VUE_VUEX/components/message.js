Vue.component('message',{

	data(){
		return{
			message:'Hola desde el componente'
		}
	},


	template: `

		<div>
			<h2>Hola desde el componente</h2>
			<p> {{ message }} </p>

		</div>


	` 

});