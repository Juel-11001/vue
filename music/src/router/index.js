import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Manage from '@/views/Manage.vue'
import Error404 from '@/views/Errors/404.vue'
const routes=[
  {
    name:'home',
    path:'/',
    component:Home
  },
  {
    name:'about',
    path:'/about',
    component:About
  },
  {
    name:'manage',
    path: '/manage-music',
    component: Manage,
    beforeEnter:(to, from, next)=> {
      console.log("manage route guard!");
      next();
    }
  },
  // {
  //   path: '/manage-music',
  //   redirect:{name:'manage'}
  // },
  {
    path:'/:catchAll(.*)*',
    component: Error404
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass:"text-yellow-500"
})

router.beforeEach((to, from, next)=>{
  console.log("global guard");
  // console.log(to, from);
  next();
});

export default router
