<template>
  <div class="itemlist">
    <v-container class="Line-item d-flex justify-center align-center flex-column">
      <p class="title-text">Enseña con nosotros</p>
      <p class="title-text-p">No pierdas esta oportunidad para compartir tu sabiduria con los demás, únete hoy a StudentHub donde  </p>
      <v-btn
          elevation="4"
          small
          x-large
          orange darken-3
          class="orange darken-3"
      >
        Más información
      </v-btn>
    </v-container>
    <feature></feature>
  </div>
</template>

<script>
import Feature from "@/components/feature";
export default {
  name: "itemlist",
  components: {Feature}
}
</script>

<style scoped>
.itemlist{
  height: 20vh;
  max-width: 100%;
  margin: 0;
}
.Line-item{
  max-width: 100%;
  background-color: #4883BF;
  margin: 0;
  padding: 6em;
}
.title-text{
  text-align: left;
  font-size: 3rem;
  font-weight: 600;
  color: white;
}
.title-text-p{
  text-align: left;
  font-size: 2rem;
  font-weight: 300;
  color: white;
}
.orange{
  color: white;
}
</style>