import Vue from "vue";
import Vuex from "vuex";

import feathersVuex from "feathers-vuex";
import feathersClient from "../feathers-client";
const { service, auth, FeathersVuex } = feathersVuex(feathersClient, {
  idField: "_id"
});
Vue.use(Vuex);
Vue.use(FeathersVuex);

export default new Vuex.Store({
  plugins: [
    auth({
      userService: "users"
    }),
    service("users", {
      debug: true,
      instanceDefaults: {
        user_name: "",
        display_name: "",
        password: "",
        imageUrl: ""
      }
    })
  ],
  state: {},
  mutations: {},
  actions: {}
});
