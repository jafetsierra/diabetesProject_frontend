<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <img src="https://www.researchgate.net/profile/Li-Mingtao-2/publication/335483097/figure/fig3/AS:934217085100032@1599746118459/A-general-architecture-of-XGBoost.ppm" class="img-fluid" id="about-img">
        <p>A hybrid ensemble method for pulsar candidate classification - Scientific Figure on ResearchGate. Available from: https://www.researchgate.net/figure/A-general-architecture-of-XGBoost_fig3_335483097 [accessed 16 Jan, 2022]</p>
      </div>
      <div class="col-md-7">
        <h1 class="font-weight-light">About this project</h1>
        <div class="p-3 mb-2 bg-dark text-white"></div>
        <p class="mt-4">
          This project was made with the main objective of build an easy and free application capable of predict when a person has Diabetes or not, 
          based on their age, body mass index, as well as bloodpreassure, number of pregnancies and other important variables. 
        </p>
      </div>
    </div>
    <div class="p-3 mb-2 bg-dark text-white"></div>
    <div class="row ">
      <h3>How this project was made</h3>
      <p>
        The project was build up in django as a backend API, with XGBoost algorithm as classifier and vue.js as a frontend interface.

        I used the "Pima Indians Diabetes Dataset" that is available at Kaggle Datasets. the link to it is given below. 
      </p>
      <br>
      <p>
        <a href="https://www.kaggle.com/uciml/pima-indians-diabetes-database">Pima Indians Diabetes Database</a>
      </p>
      <p>
        The next functionality to be added is that the algorithm predict the type of Diabetes. This in case that the initial prediction is positive. 
      </p>
    </div>
    <Cards/>
    <br>
    <Footer/>
  </div>
  
</template>

<script>
import Cards from '../components/Cards.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Cards,
    Footer
  }
}
</script>

<style scoped>
#about-img{
  padding: 3% 1% 1% 1%;
}
.row{
  text-align: center;
}

</style>