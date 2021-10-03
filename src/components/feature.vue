<template>
  <div class="Feature">
    <v-container class="main">
      <v-col cols="2" class="main  d-flex flex-row justify-center align-center  ma-auto">
        <v-row class="ma-0 pa-0">
          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">

              <p class="text-h4 text--primary">
                Ahorra tiempo
              </p>
              <div class="img1 "></div>
              <div class="text--primary">
                Ya no pierdas tiempo buscando información <br>
                en internet, StudentHub esta al alcance de <br>
                tus manos.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>

        <v-row class="ma-0 pa-0">

          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">

              <p class="text-h4 text--primary">
                Desarrollo de <br>habilidades
              </p>
              <div class="img2"></div>
              <div class="text--primary">
                Incribete en las tutorias de tus cursos<br>
                preferidos, aprendiando cada vez más.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>

        <v-row class="ma-0 pa-0">

          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">

              <p class="text-h4 text--primary">
                Aprende en <br>comunidad
              </p>
              <div class="img3"></div>
              <div class="text--primary">
                Aprender solo siempre fue difícil, consulta<br>
                en nuestros foros aprendiendo en comunidad<br>
                para aprender ya no sea una dificuladad.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>
      </v-col>
      <v-col cols="2" class="main  d-flex flex-row justify-center align-center  ma-auto">
        <v-row class="ma-0 pa-0">
          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">

              <p class="text-h4 text--primary">
                Nuevas formas de <br>interacción
              </p>
              <div class="img4"></div>
              <div class="text--primary">
                En StudentHub aprender es algo sencillo,<br>
                con nuestras tutorias supera cualquier<br>
                limite es algo posible.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>

        <v-row class="ma-0 pa-0">

          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">

              <p class="text-h4 text--primary">
                Descarga contenido
              </p>
              <div class="img5"></div>
              <div class="text--primary">
                Descarga contenido compartido, encuentra apuntes<br>
                de alumnos anterios para entender un tema con mayor<br>
                facilidad.

              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>

        <v-row class="ma-0 pa-0">

          <v-card
              class="mx-auto"
              max-width="500">
            <v-card-text class="d-flex flex-column justify-center align-center">

              <p class="text-h4 text--primary">
                Contenido educativo
              </p>
              <div class="img6"></div>
              <div class="text--primary">
                En studentHub ofrecemos el mejor contenido educativo<br>
                para que aprender ya no se aun obstáculo si no una<br>
                oportunidad.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="black accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>
      </v-col>
    </v-container>
    <px-header></px-header>
  </div>
</template>

<script>

import PxHeader from "@/components/px-header";
export default {
  name: "feature",
  components: {PxHeader}
}
</script>


<style scoped>
#about {
  background-color: #f4f7f5;
}

.main{

  max-width: 100%;

}
.img1{
  background-image: url("../assets/icon1.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.img2{
  background-image: url("../assets/icon2.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.img3{
  background-image: url("../assets/icon3.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.img4{
  background-image: url("../assets/icon4.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.img5{
  background-image: url("../assets/icon5.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.img6{
  background-image: url("../assets/icon6.svg");
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
.text--primary{
  margin-top: 15px;
}
.text-h4{
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;

}
.main{
  padding: 2.5em;
}
</style>