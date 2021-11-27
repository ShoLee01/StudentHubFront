<template>
  <div class="login-page">
    <div class="login">
      <div class="login-container auth-container d-flex flex-row-reverse">
        <div class="login-form-column d-flex justify-center align-center">
          <form class="login-form" v-on:submit.prevent="authLoginAppUser">
            <h3 class="title-login mb-6">Sign In</h3>

            <div class="form-wrapper">
              <v-text-field
                  label="Email"
                  filled
                  type="text" name="email" id="email" v-model="email" placeholder="Enter your Email" required
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
            <v-btn  color="primary"
                    @click="inicio"
                    elevation="2"
                    small
                    x-large type="submit" >LOG IN<span class="fa fa-spin fa-spinner"></span></v-btn>
            </div>

          </form>
        </div>

        <div class="login-image-column">
          <div class="d-flex justify-center align-center">
            <v-img   max-height= 80%
                     max-width=80%
                     src="../assets/sign_in.svg" alt=""></v-img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import profile from "@/components/profile";
import Vue from "vue";
import navegation from "@/components/navegation";

export default {
  name: "signin",

  data: () => ({
    user:[],
    password: "",
    email: "",
    valor: false
  }),
   component:{
    profile,
     navegation
  },
  methods:{
    inicio(){
      axios.get(`https://aqueous-lowlands-60101.herokuapp.com/api/user`)
          .then(response => {
            this.user = response.data;
            console.log('data: ');
            for (let i=0; i<this.user.length;i++) {
              console.log(this.user[i].name);
              if(this.user[i].password === this.password && this.user[i].email === this.email){
                alert("Inicio correctamente")
                this.valor =true;
                this.$router.push("/home");
                Vue.prototype.$dataAll = this.user[i];
                this.$store.state.stateLogin= true;
              }
              if(this.user.length-1 == i && this.valor == false ){
                alert("Usuario o contraseña son incorrectas");
              }
            }
          })
          .catch( e => {
            this.error.push(e);
          });
    }
  }
}
</script>

<style>
.form-control{
  border: 1px solid black;
  border-radius: 3px ;
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
  height: 90%;
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