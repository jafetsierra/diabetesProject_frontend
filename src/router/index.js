import { createRouter, createWebHashHistory } from 'vue-router'
import Home from    '../views/Home.vue'
import SignUp from  '../views/SignUp.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prediction',
    name: 'Prediction',
    component: () => import(/* webpackChunkName: "prediction" */    '../views/Prediction.vue')
  },
  {
    path: '/listpredictions',
    name: 'ListPredictions',
    component: () => import(/* webpackChunkName: "predictions" */   '../views/ListPredictions.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "login" */         '../views/LogIn.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
