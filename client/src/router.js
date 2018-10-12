import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import SignUp from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import Boards from "@/views/Boards.vue";
import ViewPDF from "@/views/ViewPDF.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { isAuthRequired: true }
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      meta: { isAuthRequired: false }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { isAuthRequired: false }
    },
    {
      path: "/boards",
      name: "boards",
      component: Boards,
      meta: { isAuthRequired: true }
    },
    {
      path: "/viewpdf",
      name: "viewpdf",
      component: ViewPDF,
      meta: { isAuthRequired: true }
    }
  ]
});
