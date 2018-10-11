<template>
  <v-container fluid>
    <v-layout column align-center>
      <v-form v-if="!loading" v-model="valid" @submit.prevent="signUp" @keydown.prevent.enter>
        <v-text-field v-model="user.user_name" :rules="notEmptyRules" label="User name" required></v-text-field>
        <v-text-field
          v-model="user.display_name"
          :rules="notEmptyRules"
          label="Display Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :rules="notEmptyRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.confirmPassword"
          :rules="confirmPasswordRules"
          type="password"
          label="Confirm password"
          required
        ></v-text-field>
        <v-text-field v-model="user.imageUrl" :rules="notEmptyRules" label="Image Url" required></v-text-field>
        <v-btn type="submit" :disabled="!valid">Submit</v-btn>
      </v-form>
      <v-progress-circular v-else indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "signUp",
  data() {
    return {
      user: {
        user_name: "",
        display_name: "",
        password: "",
        confirmPassword: "",
        displayName: "",
        imageUrl: ""
      },
      valid: false,
      notEmptyRules: [v => !!v || "Field is required"],
      confirmPasswordRules: [
        cp => cp === this.user.password || "Passwords need to match"
      ]
    };
  },
  computed: {
    ...mapState("users", { loading: "isCreatePending" })
  },
  methods: {
    //  ...mapActions("auth", ['authenticate']),
    signUp() {
      if (this.valid) {
        const { User } = this.$FeathersVuex;
        const newUser = new User(this.user);
        newUser
          .save()
          //AUTHENTICATION IS BUGGY RIGHT NOW
          // .then(() => {
          //
          //   this.authenticate({
          //     strategy:'local',
          //     ...this.user})})
          .then(() => {
            this.$router.push("/login");
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>