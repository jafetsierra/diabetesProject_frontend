<template>
    <div class="greetings">
        <h3>
            <h2>V-1.0 of the web aplication for Diabetes Diagnosis using the Machine Learning algorithm xgboost.  </h2> 
            <br>
            <br>
            <p>Built and developed by JafetSierra</p>
            <br>
            <p>You can see the entire project in the link given below</p>
            <br>
            <a href="https://github.com/jafetsierra?tab=repositories"> GitHub </a>
            <br>
            <br>
            <p>If you want to check out the trained model, go to the next Google Colab Notebook</p>
            <a href="https://colab.research.google.com/drive/1S5_J49_ZVXLKGtxMREM1E-bDCBEGEDL8#scrollTo=ZzFH3JHTwqA8">Notebook</a>

        </h3>
    </div>
</template>


<script>
export default {
    name: "Home",
    data: function(){
        return {
            username: localStorage.getItem('username') || "none",
            img1: 'src/assets/logo.jpg'
        }
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
</style>