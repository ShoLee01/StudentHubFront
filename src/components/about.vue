<template>
<div class="About">
  <v-container class="about d-flex justify-left align-left flex-row">
    <div class="text">
      <div>
        <p class="vold">Nosotros</p>
        <p class="text-p">Somos el grupo StudentHub que surge con la finalidad de<br>
          conectar a los estudiantes como a los tutores a través<br>
          de la plataforma de manera fácil y intuitiva.
        </p>
      </div>
    </div>
    <div class="img">
      <div class="img-about"></div>
    </div>
  </v-container>
  <itemlist></itemlist>
</div>
</template>

<script>


import Itemlist from "@/components/itemlist";
export default {
  name: "about",
  components: {Itemlist}
}
</script>

<style scoped>
.img-about{
  background-image: url("../assets/teach.jpg");
  width: 40vw;
  height: 300px;
  background-position: center;
  background-size: cover;
}
.text{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about{
  height: 70vh;
}
.text-p{
  text-align: left;
  font-size: 1.3rem;
  font-weight: 300;
}
.vold{
  text-align: left;
  font-size: 1.8rem;
  font-weight: 600;
}
.About{
  max-width: 100%;
}
</style>