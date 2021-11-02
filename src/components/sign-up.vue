<template>
  <div class="login-page">
    <div class="login">
      <div class="login-container auth-container d-flex flex-row-reverse">
        <div class="login-form-column d-flex justify-center align-center">
          <form class="login-form" v-on:submit.prevent="authLoginAppUser">
            <h3 class="title-login mb-6">Sign Up</h3>

            <div class="form-wrapper">
              <v-text-field
                  label="Full name"
                  filled
                  type="text" name="text" id="label" v-model="name" placeholder="Enter your Name"  required
              ></v-text-field>
            </div>

            <div class="form-wrapper">
              <v-text-field
                  label="Email"
                  filled
                  type="text" name="email" id="email" v-model="email" placeholder="Enter your Email"  required
              ></v-text-field>
            </div>

            <div class="form-wrapper">
              <v-text-field
                  label="Password"
                  filled
                  type="password" name="password" id="password" v-model="password" placeholder="******"  required
              ></v-text-field>
            </div>

            <div class="d-flex justify-center align-center">
              <v-btn  id="register"
                      @click="register"
                      color="primary"
                      elevation="2"
                      small
                      x-large type="submit" class="">REGISTER<span v-if="showSpinner" class="fa fa-spin fa-spinner"></span></v-btn>
            </div>

          </form>
        </div>

        <div class="login-image-column">
          <div class="login-image-up d-flex justify-center align-center">
            <v-img   max-height= 50%
                     max-width=50%
                     src="../assets/sign_up.svg" alt=""></v-img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sign-in",
  data(){
    return{
      verInicio: false,
      name: "",
      password: "",
      email: ""
    };
  },
  methods:{
    register(){
      axios.post(`https://aqueous-lowlands-60101.herokuapp.com/api/user`,{
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response.data);
      }).catch( err => {
        console.log(err);
      });
      this.$router.push("/home");
    },
  }
}
</script>

<style>

.form-control{
  border: 1px solid black;
  border-radius: 3px ;
}
.login-image-up{
}
.title{
  text-align: left;
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  color: black
}
.title-login{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0;
  color: black
}
.login-form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 60%;
  padding: 20px;
  border: 2px solid black;
  border-radius: 19px;
}
.login-page {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form-column{
  width: 50%;
}
.login-image-column{
  width: 50%;
}
.login{
  width: 100%;

}
.login-page{
  width: 100%;
}
</style>