import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequired) {
    store
      .dispatch("auth/authenticate", { storage: window.localStorage })
      .then(() => {
        next();
      })
      .catch(error => {
        console.log("Authentication error", error);
        next("/login");
      });
    next();
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
