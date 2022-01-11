<template>
    <div class="make_p">
        <div class="container_make_p">
        <h2>Make a Diagnosis</h2>
            <form v-on:submit.prevent="submit"> 
        
            <input type="number" v-model="form.prediction_data.age" placeholder="Age (years)">
            <br>
            <input type="number" v-model="form.prediction_data.bmi" placeholder="Bmi (body mass index - kg/m^2)">
            <br>
            <input type="number" v-model="form.prediction_data.bloodpreassure" placeholder="Bloodpressure (Diastolic blood pressure - mm Hg)">
            <br>
            <input type="number" v-model="form.prediction_data.glucose" placeholder="Glucose (plasma glucose concentration)">
            <br>
            <input type="number" v-model="form.prediction_data.dpedigreefunc" placeholder="Diabetes P. function (based on family history, type 1 if there's 0 cases)">
            <br>
            <input type="number" v-model="form.prediction_data.insulin" placeholder="Insulin (2 hour serum insulin - mu U/ml)">
            <br>
            <input type="number" v-model="form.prediction_data.pregnancies" placeholder="Pregnancies (integer number)">
            <br>
            <input type="number" v-model="form.prediction_data.tskinthickness" placeholder="Skinthickness (triceps skin flod - mm)">
            <br>

            <button type="submit">Diagnosis</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import jwt_decode from "jwt-decode";

export default {
    name: "Prediction",

    data: function(){
        return {
            form: {
                prediction_data: {
                    age                     : "", 
                    bmi                     : "", 
                    bloodpreassure          : "", 
                    glucose                 : "",
                    dpedigreefunc           : "",
                    insulin                 : "", 
                    pregnancies             : "",   
                    tskinthickness          : "",
                    user                    : ""        
                }   
            },
        };
    },
    methods: {
        submit: function(){
            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
            }
            this.verifyToken();
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).user_id.toString();
            this.form.prediction_data.user = userId;
            return axios.post(`https://diabetes-app-v-1.herokuapp.com/prediction/create/${userId}/`,this.form,{headers: {'Authorization': `Bearer ${token}`}})   
                .then((response) => {
                    let resultPrediction = response.data.rta;
                    localStorage.setItem("Result", resultPrediction);
                    this.$emit('completedPrediction');
                })
                .catch((error) => {
                    alert(error.data);
                });
        },
        verifyToken: function () {
            return axios.post("https://diabetes-app-v-1.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}
            )
            .then((result) => {
                localStorage.setItem("token_access", result.data.access);
            })
            .catch(() => {
                this.$emit('logOut');
            });
        },
    }
}
</script>

<style>

.make_p{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_make_p {
    border:   solid #283747;
    border-radius: 25px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.make_p h2{
    color: #283747;
}
.make_p form{
    width: 90%;
}
.make_p input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}
.make_p button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
}
.make_p button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>