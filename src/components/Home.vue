<template>
  <div class="Home">
    <section class="image-main">
      <v-container class=" main-text d-flex justify-left align-left flex-column">
        <div class="text-main">
          <p class="text-p">
            Bienvenidos a<br>
            StudentHub
          </p>
          <v-btn
          @click="comenzar"
          elevation="4"
          small
          x-large
          orange darken-3
          class="orange darken-3"
          >
            COMENZAR
          </v-btn>
        </div>
      </v-container>
    </section>
    <about></about>
  </div>
</template>

<script>
import About from "@/components/about";
export default {
  name: "Home",
  components: {About},
  methods: {
    comenzar() {
      this.$router.push("/signin");
      console.log(this.$store.state.stateLogin);
    }
  }
}
</script>

<style scoped>
.image-main{
  max-width: 100%;
  padding: 0;
  height: 91vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url("../assets/home.png");
  background-position: center;
  background-size: cover;
}
.text-p{
  text-align: left;
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
  color: white;
  margin-bottom: 1.7rem;
}
.text-main{
  width: 100%;
}
.main-text{
  margin: 10%;
}
.orange{
  color: white;
}
</style>