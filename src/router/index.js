import Vue from'vue' 
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'




const routes = [
  {
    path:'/',
    component: Home
   },
   {
     path:'/Login',
     component: Login
   },
   {
     path:'/Signup',
     component: Signup
   }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
