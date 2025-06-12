let vm = Vue.createApp({
  //  template: ``
  data (){
    return {
      message : "hello world"
    }
  }
})

// vm.component('hello', {
//   template: `<h1>{{ message }}</h1>`,
//   data() {
//     return {
//       message: 'Hello World!'
//     }
//   }
// })

vm.mount('#app')

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount("#app2")

// let vm2=Vue.createApp({
//   data(){
//     return {
//       message:"hello form second app"
//     }
//   },
//   template:`<h1>{{message}}</h1>`
// })

// let vm3=Vue.createApp({
//   data(){
//     return {
//       message:"hello form second app"
//     }
//   },
//   render() {
//     return Vue.h('h1',"hello form second app 3")
//   },
// })

// vm2.mount('#second_app');
// vm3.mount('#second_app3');

let vm4=Vue.createApp({

})
vm4.component('hell',{
  template:`<h1>{{message}}</h1>`,
  data(){
    return {
      message:"Hello form vue component"
    }
  }
})
vm4.mount('#component_vue')