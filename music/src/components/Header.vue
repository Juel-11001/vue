<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link to="/about" class="text-white font-bold uppercase text-2xl mr-4"
      >Music</router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userStore.userLogin">
            <a class="px-2 text-white" href="#" @click.prevent="appAuthModal">Login / Register</a>
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="userStore.logout">logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapStores} from "pinia"
import useModalStore from "@/stores/modal.js"
import useUserStore from "@/stores/user.js"

export default {
  name:"Header",
  computed:{
    ...mapStores(useModalStore, useUserStore)
  },
  methods:{
    appAuthModal(){
      this.modalStore.isOpen=!this.modalStore.isOpen;
      // console.log(this.modalStore.isOpen);
    }
  }
}
</script>
