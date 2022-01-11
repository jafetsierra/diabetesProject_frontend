<template>
    <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Age</th>
                            <th scope="col">Bmi</th>
                            <th scope="col">bloodpreassure</th>
                            <th scope="col">DPedigreef</th>
                            <th scope="col">Glucose</th>
                            <th scope="col">Insulin</th>
                            <th scope="col">Pregnancies</th>
                            <th scope="col">SkinTh</th>
                            <th scope="col">Diabetes?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="diag in items" :key="diag.id">
                            <td>{{diag.age}}</td>
                            <td>{{diag.bmi}}</td>
                            <td>{{diag.bloodpreassure}}</td>
                            <td>{{diag.dpedigreefunc}}</td>
                            <td>{{diag.glucose}}</td>
                            <td>{{diag.insulin}}</td>
                            <td>{{diag.pregnancies}}</td>
                            <td>{{diag.tskinthickness}}</td>
                            <td>{{diag.rta}}</td>
                        </tr>
                    </tbody>
            </table>
    </div>
</template>

<script>

import axios from 'axios';
import jwt_decode from "jwt-decode";

export default {
    name: "PredictionList",

    data: function(){
        return {
            items: [],
            
            age                     : 0, 
            bmi                     : 0.0, 
            bloodpreassure           : 0.0, 
            diabetespedigreefunction: 0.0,
            glucose                 : 0.0, 
            insulin                 : 0.0, 
            pregnancies             : 0.0,   
            skinthickness           : 0.0,
            rta                     : false,
            
        }
    },
    methods: {
        getData:  async function(){
            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
            }
            await this.verifyToken();

            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).user_id.toString();

            this.user_id = userId;

            axios.get(`https://diabetes-app-v-1.herokuapp.com/predictions/myPredictions/${userId}/`,{headers: {'Authorization': `Bearer ${token}`}},
                
                )   
                .then((result) => {
                    this.items = result.data;
        
                    this.age                       = result.data[result.data.length-1].age;
                    this.bmi                       = result.data[result.data.length-1].bmi;
                    this.bloodpreassure             = result.data[result.data.length-1].bloodpreassure;
                    this.diabetespedigreefunction  = result.data[result.data.length-1].dpedigreefunc;
                    this.glucose                   = result.data[result.data.length-1].glucose;
                    this.insulin                   = result.data[result.data.length-1].insulin;
                    this.pregnancies               = result.data[result.data.length-1].pregnancies;
                    this.skinthickness             = result.data[result.data.length-1].tskinthickness;
                    this.rta                       = result.data[result.data.length-1].rta;
                })
                .catch((error) => {
                    alert(error)
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
        }

    },
    created: async function () {
        this.getData();
    },
}
</script>

<style>
.my-custom-scrollbar {
position: relative;
height: 70%;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
}
</style>