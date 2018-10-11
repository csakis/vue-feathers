<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>Trello</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!user">
        <v-btn flat :to="{name: 'signup'}">Sign Up</v-btn>
        <v-btn flat :to="{name: 'login'}">Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="user">
        <v-btn @click="logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2018 made with 💕</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapActions("auth", { authLogout: "logout" }),
    logout() {
      this.authLogout().then(() => {
        this.$router.push("/login");
      });
    }
  },
  computed: {
    ...mapState("auth", { user: "accessToken" })
  }
};
</script>
