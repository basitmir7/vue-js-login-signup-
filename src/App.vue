<template>
  <div id="app">
    <Nav />

     
    <router-view />    
    
      
  

  </div>
 
</template>
<script>

import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    Login,
    Signup
    
  }
}
</script>

<style>

#app {text-align: center;
width: 100%;

}


</style>
