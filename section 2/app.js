// vm = vue model

const vm = Vue.createApp({
    data(){
        return {
            firstName:'john',
            lastName:'doe',
            google_url:'https://google.com',
            raw_url:'<a href="https://google.com" target="_blank" class="text-blue-500 hover:text-blue-600 font-medium underline coursor-pointer transition-colors" >Google</a>',
            age:30,
            middleName:"",
            isPurple:false,
            selectedColor:"",
            size:250
        }
    },
    methods: {
        // fullName(){
        //     console.log("method property call!");
            
        //     const lastname=this.lastName
        //     const finalname=lastname.charAt(0).toUpperCase()+lastname.slice(1)
        //     return `${this.firstName} ${this.middleName} ${finalname}`
        //     // return `${this.firstName} ${this.lastName.toUpperCase()}`
        // },
        increment(){
            this.age++
        },
        decrement(){
            this.age--
        },
        lastNameUpdate(mes,event){
            // event.preventDefault();
            // console.log(mes);
            this.lastName=event.target.value
        },
        middleNameUpdate(event){
            this.middleName=event.target.value
        }
    },
    computed:{
        fullNameWithComputed(){
            console.log("computed property call!");
            
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
        circle_class(){
            return {
                purple: this.isPurple
            }
        }
    },
    watch:{
        age(newValue,oldValue){
            setTimeout(()=>{
                this.age=30;
            }, 4000)
        }
    }

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