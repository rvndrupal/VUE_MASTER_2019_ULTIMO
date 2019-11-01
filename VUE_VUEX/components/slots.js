 Vue.component('slots' , {

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
            <h2>Slots ejemplo del Layout</h2>
            <div>
                <header>
                    <slot name="header"></slot>
                </header>
                <main>
                    <slot name="main"></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>

    
        </div>
    `
});