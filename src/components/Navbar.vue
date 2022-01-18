<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Diabetes A.I.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button class="btn btn-outline-secondary" type="button" @click="loadHome">Home</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-outline-info" type="button" v-if="is_auth" @click="loadPrediction">Prediction</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-outline-info" type="button" v-if="is_auth" @click="loadListPredictions">My Predictions</button>
                    </li>
                </ul>
            <form class="d-flex">
                <button class="btn btn-outline-danger"  type="button" v-if="is_auth" @click="logOut">LogOut</button>
                <button class="btn btn-outline-success" type="button" v-if="!is_auth" @click="loadLogIn">LogIn</button>
                <button class="btn btn-outline-primary" type="button" v-if="!is_auth" @click="loadSignUp"> SignUp</button>
                
            </form>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'Navbar',
    data: function(){
        return{
            is_auth: false
        }
    },
    methods: {
        loadHome: function (){
            this.$router.push({name: "Home"});
        },
        loadPrediction: function () {
            this.$router.push({name: "Prediction"});
        },
        loadListPredictions: function () {
            this.$router.push({name: "ListPredictions"});
        },
        loadSignUp: function () {
            this.$router.push({name: "SignUp"});
        },
        loadLogIn: function () {
            this.$router.push({name: "LogIn"});
        },
        logOut: function (){
            localStorage.clear();
            alert("Sesion closed!");
            this.verifyAuth();
        },
        verifyAuth: function () {
            this.is_auth = localStorage.getItem("isAuth") || false;
            if (this.is_auth == true)
                this.$router.push({name: "Home"});
            else
                this.$router.push({name: "LogIn"});
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
    },
    created: function (){
        this.verifyAuth()
    }
}
</script>

<style scoped>
.nav-item button{
    width: 100%;
}
.d-flex button {
    width: 100%;
}
</style>

