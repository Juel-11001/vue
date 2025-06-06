// vm = vue model

const vm = Vue.createApp({
    data(){
        return {
            firstName:'john',
            lastName:'doe',
            google_url:'https://google.com',
            raw_url:'<a href="https://google.com" target="_blank" class="text-blue-500 hover:text-blue-600 font-medium underline coursor-pointer transition-colors" >Google</a>',
            age:30
        }
    },
    methods: {
        fullName(){
            const lastname=this.lastName
            const finalname=lastname.charAt(0).toUpperCase()+lastname.slice(1)
            return `${this.firstName} ${finalname}`
            // return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            this.age++
        },
        decrement(){
            this.age--
        },
        lastNameUpdate(e){
            this.lastName=e.target.value
        }
    },

}).mount('#app')

// setTimeout(()=>{
//     vm.firstName="Jhon",
//     vm.lastName="Wick"
// },2000)

// Vue.createApp({
//     data(){
//         return {
//             firstName:"jewel",
//             lastName:"rana"
//         }
//     }
// }).mount('#second_app')