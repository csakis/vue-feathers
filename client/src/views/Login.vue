<template>
    <v-layout column align-center>
        <v-form v-if="!loading" v-model="valid" @submit.prevent="login" @keydown.prevent.enter>
            <v-text-field
                v-model="user.user_name"
                :rules="notEmptyRules"
                label="User name"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.password"
                :rules="notEmptyRules"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <v-btn type="submit" :disabled="!valid">Login</v-btn>
        </v-form>
        <v-progress-circular v-else indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
    </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      user: {
        user_name: "",
        password: ""
      },
      valid: false,
      notEmptyRules: [v => !!v || "Field is required"]
    };
  },
  computed: {
    ...mapState("auth", { loading: "isAuthenticatePending" })
  },
  methods: {
    ...mapActions("auth", { authenticate: "authenticate" }),
    login() {
      if (this.valid) {
        this.authenticate({
          strategy: "local",
          ...this.user
        })
        .then(x=>{
            this.$router.push('/boards')
        })
        .catch(e=> {
            console.log('e: ', e)
        })
      }
    }
  }
};
</script>

<style scoped>
</style>