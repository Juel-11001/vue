import {defineStore} from "pinia";
import {auth, usersCollection} from "@/includes/firebase.js";
export default defineStore("user", {
  state:()=>({
    userLogin:false,
  }),
  actions:{
      async register(values) {
        // let userCred;
        try {
          // Register user
         const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password);

          // Save user info to Firestore
          await usersCollection.doc(userCred.user.uid).set({
            name: values.name,
            email: values.email,
            age: values.age,
            country: values.country,
          });
         await userCred.user.updateProfile({
            displayName:values.name,
          })
          this.userLogin = true;
        } catch (error) {
          console.error("Registration failed:", error);
          throw error;
        }
      },
    async authenticate(values){
        await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLogin=true;
    }

  }
})
