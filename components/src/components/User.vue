<template>
  <div>
    <p>The user is {{ age }} years old</p>
    <button @click="changeAge" type="button">Update Age</button> <br><br>
    <button @click="ageUpdateFn(10)" type="button">Update Age Fn</button>
  </div>
</template>

<script>
 export default {
    name: 'User',
    props: {
        age:{
            type: Number,
            // required: true,
            // default: 30
            validator(value){
                return value <= 100
            }
        },
         ageUpdateFn:Function
    },
    methods:{
        changeAge(){
            this.$emit('ageUpdated',3)
        },
    },
   
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