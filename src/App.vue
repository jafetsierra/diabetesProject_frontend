<template>
  <div id="app" class="app">
    <div class="header">
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-2 mb-3 border-bottom">
          <a href="/" class="d-flex align-items-center mb-1 mb-md-0 me-md-auto text-dark text-decoration-none">
            <a class="navbar-brand" href="#">
              <img src="./assets/diabetesLogo.png" alt="" width="90" height="70" class="d-inline-block align-text-center">

            </a>
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item"><button type="button" class="btn btn-primary btn-lg" v-if="is_auth" v-on:click="loadHome">Home</button></li>
            <li class="nav-item"><button type="button" class="btn btn-success btn-lg" v-if="is_auth" v-on:click="loadPrediction">Make a Diagnosis</button></li>
            <li class="nav-item"><button type="button" class="btn btn-secondary btn-lg" v-if="is_auth" v-on:click="loadPredictions">My Diagnostics</button></li>
            <li class="nav-item"><button type="button" class="btn btn-danger btn-lg" v-if="is_auth" v-on:click="logOut">LogOut</button></li>
            <li class="nav-item"><button type="button" class="btn btn-primary btn-lg" v-if="!is_auth" v-on:click="loadLogIn">LogIn</button></li>
            <li class="nav-item"><button type="button" class="btn btn-success btn-lg" v-if="!is_auth" v-on:click="loadSignUp">SignUp</button></li>
          </ul>
        </header>
      </div>
    </div>
    <div class="main-component">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view
          v-on:completedLogIn="completedLogIn"
          v-on:completedSignUp="completedSignUp"
          v-on:logOut="logOut"
          v-on:completedPrediction="completedPrediction"
          >
        </router-view>
      </transition>
    </div>

    <div class="footer">
      <h2>Machine Learning algorithms for Diabetes Diagnosis</h2>
      <h3>Build and developed by Jafet Sierra</h3>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",

  data: function(){
    return{
      is_auth: false
    }
  },
  components: {
  },
  methods:{
    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },
    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function(data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    loadHome: function() {
      this.$router.push({ name: "home" });
    },
    loadPrediction: function() {
      this.$router.push({ name: "prediction" });
    },
    completedPrediction: function() {
      this.$router.push({ name: "predictionResult" });
    },
    loadPredictions: function() {
      this.$router.push({ name: "predictionlist" });
    },
    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    }
  },
  created: function(){
    this.verifyAuth()
  }
}
</script> 

<style>
body{
  margin: 0 0 0 0;
}
.app{
  background-color:#1158a3;
}
.header{
  align-items: center;
  padding: 0;
  margin-bottom:0px;
  background-color:rgb(218, 224, 255);
}
.header h1{
width: 20%;
text-align: center;
}
.header nav {
  align-items: center;
  padding-top: 50%;
  
}
.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #1158a3;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer h3{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>