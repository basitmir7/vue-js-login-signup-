<template>
    <div class="container2">
<div class="register-page">
	<form class="register-form" @submit.prevent="handleSubmit">
       <div class="username-field">
		  <label>USERNAME</label>
		  <input type="text" v-model="user_name" >
	   </div>
	   <div class="password-field">
		  <label>PASSWORD</label>
          <input type="password" v-model="password">
	   </div>
       <div class="passwordconfirm-field">
		  <label>PASSWORD CONFIRM</label>
          <input type="password" v-model="password_confirm" >
	   </div>
       <div class="email-field">
		  <label>EMAIL</label>
          <input type="email" v-model="email" >
	   </div>
       <div class="login-btn">
		  <button  > REGISTER </button>
	   </div>
        
          <p class="message"> Already have an account ? <router-link to="/Login"> Login </router-link> </p>
	   
	   
    </form>
</div>
</div>
</template>

<script>
export default {
    name: 'Signup',
    data() {
        return{
                user_name : '',
				password : '',
				password_confirm :'', 
				email : '',
        }
        
    },
    methods:{
        handleSubmit()   {
			const data =   {
				user_name : this.user_name,
				password : this.password,
				password_confirm : this.password_confirm,
				email : this.email

			               }
		
			
		console.log(data);
		}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
*{
    font-family: "Quicksand";
}
.register-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
form input {
  font-family: "Quicksand";
  outline: 0;
  background: #f0efef;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  
  
}

form button {
  font-family: "Quicksand";
  text-transform: uppercase;
  outline: 0;
  background: #080808;
  width: 50%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 40px ;
}
form button:hover,.form button:active,.form button:focus {
  background: #272927;
}
form .message {
  margin: 15px 0 0;
  color: #0f0e0e;
  font-size: 12px;
}
form .message a {
  color: #02008b;
  text-decoration: none;
}
input:focus{
    outline: none;
    box-shadow: 0px 0px 5px #535455;
    border-color: #535455;
}
input:hover {
    border: 1px solid #999;
    border-radius: 40px;
}
</style>