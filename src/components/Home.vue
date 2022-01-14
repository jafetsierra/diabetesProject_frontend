<template>
    <div class="header">
        <h2>V-1.0 of the web aplication for Diabetes Diagnosis using the Machine Learning algorithm xgboost.  </h2> 
    </div>
    <div class="greetings">
        <div class="card" style="width: 18rem;">
        <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2020/03/featured_image-2.jpg" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">Google Colab</h5>
                <p class="card-text">If you want to check out the trained model, go to the next Google Colab Notebook</p>
                <a href="https://colab.research.google.com/drive/1S5_J49_ZVXLKGtxMREM1E-bDCBEGEDL8#scrollTo=ZzFH3JHTwqA8" class="btn btn-primary">Notebook</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="https://i0.wp.com/garywoodfine.com/wp-content/uploads/2021/06/github.png?resize=930%2C470&ssl=1" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">GitHub</h5>
                <p class="card-text">You can see the entire Diabetes project in my repository given below</p>
                <a href="https://github.com/jafetsierra?tab=repositories" class="btn btn-primary">Repository</a>
            </div>
        </div>
    
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
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.greetings h1{
    font-size: 50px;
    color: #283747;
}
.greetings span{
    color: crimson;
    font-weight: bold;
}
.header h2{
    align-content: center;
    text-align: center;
}
</style>