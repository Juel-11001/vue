<template>
  <div class="error-message" v-if="login_show_alert" :class="login_alert_variant">
    {{login_alert_msg}}
  </div>
  <vee-form  :validation-schema="LoginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email" name="email"
      />
      <ErrorMessage name="email" class="text-red-500"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password" name="password"
      />
      <ErrorMessage name="password" class="text-red-500"/>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700" :disabled="login_submission">
      Submit
    </button>
  </vee-form>
</template>

<script>
import {mapActions} from "pinia";
import useUserStore from "@/stores/user.js"

export default {
  name:"Login Form",
  data (){
    return {
      LoginSchema:{
       email:"required|email",
       password:"required|min:4|max:56"
     },
      login_submission:false,
      login_show_alert:false,
      login_alert_variant:"bg-blue-500",
      login_alert_msg:"Please wait! Your account is being created."
    }
  },
  methods:{
    ...mapActions(useUserStore, ["authenticate"]),
    async login(values){
      this.login_submission=true;
      this.login_show_alert=true;
      this.login_alert_variant="bg-blue-500";
      this.login_alert_msg="Please wait! we are login ."
      try {
        await this.authenticate(values);
      }catch (error){
        this.login_submission=false
        this.login_alert_variant="bg-red-500";
        this.login_alert_msg="Invalid login details!";
        console.log(error)
      }


      this.login_alert_variant="bg-green-500";
      this.login_alert_msg="Success! You are log in.";
      window.location.reload();
      // console.log(values)
    }
  }
}
</script>
