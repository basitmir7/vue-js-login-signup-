<template>
        <nav class="navbar"> 
      
        <router-link  to="/" class="navbar-brand" > <h1 > KASHMIR CRADLE</h1>  </router-link>  

        <div class="navbar-collapse">
          <ul style="list-style-type:none; text-decoration:none" class="navbar-nav ">
            <li class="nav-item">
              <router-link  to="/Login"  > SIGN IN </router-link>  </li>
             <li class="nav-item"> <router-link to="" > PROFILE  </router-link>   </li>
             <li class="nav-item"> <router-link to="">  ABOUT  </router-link>  </li>
             <li class="nav-item"> <router-link to=""> CART </router-link>   </li>
          </ul>
        </div>


      
    </nav>
</template>
<script>
export default {
   name: 'Nav'
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  font-family: "Quicksand";
  color: #333;
}
.navbar {
  padding: 10px;
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #ece8e8e5;

    
}
.navbar h1 {
  color: #0c0b0b;
}

.navbar a {
  margin-left: 16px;
  text-decoration: none;
  padding: 5px;
 
}
.navbar div{
 
  margin-left: auto;
  
}
.navbar ul li{
  overflow: hidden;
  display:inline-flex;
  
}
.navbar a:hover {
  color:rgb(150, 150, 150);
}



</style>