<template>
<div>
  <v-app-bar
  app
  grey lighen-2
  class="px-15"
  >
<v-toolbar-title>
  <v-img src="@/assets/logo.svg" max-width="120px"/>
</v-toolbar-title>
<v-spacer/>
    <div>
      <v-btn text plain to="/home">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn v-show="this.whatlogin" id="student" text plain to="/tutors">
        <span class="mr-2">Tutors</span>
      </v-btn>
      <v-btn v-show="!this.whatlogin" text plain to="/signin">
        <span class="mr-2">Log in</span>
      </v-btn>
      <v-btn v-show="!this.whatlogin" text plain to="/sign_up">
        <span class="mr-2">Sign up</span>
      </v-btn>
      <v-btn v-show="this.whatlogin" text plain to="/profile">
        <span class="mr-2">Profile</span>
      </v-btn>
      <v-btn  @click="LogOut" v-show="this.whatlogin">
        <span class="mr-2">Log out</span>
      </v-btn>
    </div>
  </v-app-bar>
</div>
</template>

<script>
import FuntionMixin from "../share/share-all"
export default {
  name: "navegation",
  mixins:[FuntionMixin],
  data: () => ({
    stateLogin: false
  }),
  methods:{
    LogOut(){
      this.$store.state.stateLogin = false;
      this.$router.push("/signin");
    }
  }
  ,
  computed :{
    whatlogin(){
      return this.$store.state.stateLogin == true;
    }
  }
}
</script>

<style>

</style>