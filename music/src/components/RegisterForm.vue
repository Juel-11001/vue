<template>
  <div class="error-message" v-if="reg_show_alert" :class="reg_alert_variant">
    {{reg_alert_msg}}
  </div>
  <vee-form  :validation-schema="schema" @submit="registerForm" :initial-values="userData">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field name="name"
                 type="text"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                 placeholder="Enter Name"
      />
      <ErrorMessage name="name" class="text-red-500"/>
    </div>
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
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <vee-field
        type="number"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" name="age"
      />
      <ErrorMessage name="age" class="text-red-500"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field v-slot="{field, errors}" :bails="false" name="password">
        <input type="password"
               class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
               placeholder="Password" v-bind="field"
        />
        <div class="text-red-500" v-for="error in errors" :key="error">{{error}}</div>
      </vee-field>
      <!--<ErrorMessage name="password" class="text-red-500"/>-->
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="confirm_password" name="confirm_password"
      />
      <ErrorMessage name="confirm_password" class="text-red-500"/>
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <vee-field as="select" name="country"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="india">India</option>
      </vee-field>
      <ErrorMessage name="country" class="text-red-500"/>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field name="tos" value="1"
                 type="checkbox"
                 class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label> <br>
      <ErrorMessage name="tos" class="text-red-500"/>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700" :disabled="reg_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import firebase from "@/includes/firebase.js";
export default {
  name:"Register Form",
  data(){
    return {
      schema:{
        name:"required|min:3|max:55|alpha_spaces",
        email:"required|min:3|max:56|email",
        age:"required|min_value:18|max_value:110",
        password:"required|min:4|max:256|exclude:password",
        confirm_password:"confirmed:@password",
        country:"required|country_exclude:india",
        tos:"tos"
      },
      userData:{
        country:'USA'
      },
      reg_in_submission:false,
      reg_show_alert:false,
      reg_alert_variant:"bg-blue-500",
      reg_alert_msg:"Please wait! Your account is being created."
    }
  },
  methods:{
    async registerForm(values){
      this.reg_show_alert=true;
      this.reg_in_submission=true;
      this.reg_alert_variant="bg-blue-500";
      this.reg_alert_msg="Please wait! Your account is being created.";
      let userCred=null;
      try {
       userCred= await firebase.auth().createUserWithEmailAndPassword(
         values.email, values.password
       )
      }catch (error){
        this.reg_in_submission=false;
        this.reg_alert_variant="bg-red-500";
        this.reg_alert_msg="An unexpected error occurred. Please try again later."
        // console.log(error)
        return;
      }
      this.reg_alert_variant="bg-green-500";
      this.reg_alert_msg="Success! Your account has been created."
      console.log(userCred);
    }
  }
}
</script>
