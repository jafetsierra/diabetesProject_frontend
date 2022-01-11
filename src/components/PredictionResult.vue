<template>
    <div class="greetings">
        <h3>
            <h2>The prediction's result is: </h2> 
            <br>
            <br>
            <p>{{message}}</p>
            <br>
            <ul class="nav nav-pills" id="uno">
                <li class="nav-item"><button type="button" class="btn btn-outline-success" v-on:click="loadPrediction">Make a new diagnosis</button></li>
                <li class="nav-item"><button type="button" class="btn btn-outline-primary" v-on:click="loadPredictions">See my diagnostics</button></li>
            </ul>
            
        </h3>
    </div>
</template>


<script>
export default {
    name: "PredictionResult",
    data: function(){
        return {
            result: localStorage.getItem('Result'),
            message: "",
        }
    },
    methods: {
        postResult: function(rta){
            console.log(typeof rta);
            if (rta=='true') {
                this.message = "You may have Diabetes, you should go for a medical checkup"
            }else{
                this.message = "Congratulations! You don't have Diabetes"
            }
            
        },
        loadPrediction: function() {
            this.$router.push({ name: "prediction" });
        },
        loadPredictions: function() {
        this.$router.push({ name: "predictionlist" });
        }
    },
    created: async function(){
        this.postResult(this.result);
    }
}
</script>

<style>
.greetings{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.greetings h1{
    font-size: 50px;
    color: #283747;
}
.greetings span{
    color: crimson;
    font-weight: bold;
}
#uno{
    text-align: center;
    justify-content: center;
}
</style>