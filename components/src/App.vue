<template>
  <p>Hello Form App</p>
  <h1>Dynamic component value</h1>
  <select name="" id="drop-down" v-model="componentName">
    <option value="Home">Home Page</option>
    <option value="About">About Page</option>
  </select>
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
  <Greeting :age="age"></Greeting>
  <p>{{ doubleAge }}</p>
  <user :age="age" @ageUpdated="ageCustomUp" :ageUpdateFn="ageUpdatefn"></user>

  <!-- <button @click="age++" type="button">Update Age</button> -->
   <br>
  <h1>Component</h1>
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
  <br>
  <h1>Transition animation</h1>
  <div>
    <button type="button" @click="flag=!flag">Toggle</button>
    <transition name="fade" mode="out-in">
      <h1 v-if="flag" key="main">Hi there </h1>
      <h2 v-else key="second">Another transition</h2>
    </transition>
  </div>
  <div>
      <button type="button" @click="flag_2=!flag_2">Toggle</button>
    <transition name="zoom" type="animation" appear>
      <h2  class="animation" v-if="flag_2">Hello another transition</h2>
    </transition>
  </div>

</template>

<script>
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'
import FormComponent from '@/components/Form.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'

import { computed } from 'vue';
export default{
  name: 'appComponent',
  components: {
    Greeting,
    User,
    Home,
    About,
    FormComponent,
  },
  data(){
    return {
      age:20,
      componentName:"Home",
      flag:false,
      flag_2:true,
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
.fade-enter-from{
  opacity: 0;
}
  .fade-enter-active{
    transition: all 3s linear;
  }
  .fade-leave-to{
    transition: all 3s linear;
    opacity: 0;
  }
  .zoom-enter-active{
    animation: zoom-in 1s linear forwards;
    transition: all 2s linear;
  }
  .zoom-leave-active{
    animation: zoom-out 1s linear forwards;
    transition: all 2s linear;
  }
  .zoom-enter-from{
    opacity: 0;
  }
  .zoom-leave-to{
    opacity: 0;
  }
  .animation{
    width: 400px;
    height: 200px;
    padding: 10px;
    /*align-content: center;*/
    /*text-align: center;*/
  }
  @keyframes zoom-in {
    from{
      transform: scale(0,0);
    }
    to{
      transform: scale(1,1);
    }
  }
@keyframes zoom-out {
    from{
      transform: scale(1,1);
    }
    to{
      transform: scale(0,0);
    }
  }
</style>
