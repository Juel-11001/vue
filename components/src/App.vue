<template>
  <p>Hello Form App</p>
  <Greeting :age="age"></Greeting>
  <p>{{ doubleAge }}</p>
  <user :age="age" @ageUpdated="ageCustomUp" :ageUpdateFn="ageUpdatefn"></user>

  <!-- <button @click="age++" type="button">Update Age</button> -->
   <br>
  <FormComponent>
    <template v-slot:form-header>
      <p>if you want to some help</p>
    </template>
    <template v-slot:fields>
      <label for="">Name: </label>
      <input type="text" name="" id="">
      <br> <br>
      <label for="">Email: </label>
      <input type="email" name="" id="">
       <br> <br>
      <label for="">Password: </label>
      <input type="password" name="" id="">
    </template>
    
    <template v-slot:button>
       <br>
      <button type="submit">Submit</button>
    </template>
  </FormComponent>
</template>

<script>
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'
import FormComponent from '@/components/Form.vue'
import { computed } from 'vue';
export default{
  name: 'appComponent',
  components: {
    Greeting,
    User,
    FormComponent
  },
  data(){
    return {
      age:20
    }
  },
  methods:{
    ageCustomUp(num){
      this.age+=num
    },
    ageUpdatefn(num){
      this.age+=num
    }
  },
  computed:{
    doubleAge(){
      return this.age*2
    }
  }
}
</script>
<style scoped>
button{
  background-color: rgb(51, 51, 224);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
}
button:hover{
  cursor: pointer;
  opacity: 0.9;
}
</style>
