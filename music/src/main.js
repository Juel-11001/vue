
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/base.css'
import './assets/main.css'
import veeValidatePlugin from './includes/validation.js'
import {auth} from "./includes/firebase.js"

import App from './App.vue'
import router from './router'
let app;
auth.onAuthStateChanged(()=>{
  if(!app){
    app = createApp(App)
    
    app.use(createPinia())
    app.use(router)
    app.use(veeValidatePlugin)

    app.mount('#app')
  }

})

