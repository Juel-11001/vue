<template>
  <div v-if="age > 25">
    <p>{{ msg }}</p>
  </div>
  <div v-else>
    <p>Your age must be getter than 25 years to vote or see a message</p>
  </div>
</template>

<script>
 export default {
    name: 'Greeting',
    props: ['age'],
     data(){
        return {
            msg:"Hello World form Getting component"
        }
     }
 }
</script>
<style scoped>
p{
    color:brown
}
</style>