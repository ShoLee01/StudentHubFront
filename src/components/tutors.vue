<template>
  <v-app >
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
              label="Search items"
              color="black"

          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <span class="black--text mt-9">{{ tutors.length }} items</span>

      </v-row>
      <v-row >
        <v-col cols="12" md="2" class="mb-4" v-for="tutor in tutors" :key="tutor.name">
          <v-hover v-slot:default="{ hover }">
            <v-card elevation="10" max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-img class="rounded-circle" v-bind:src="tutor.url" width="150" height="150"></v-img>
              <div class="d-flex flex-column mt-4 justify-start">
                <v-card-text class="black--text ">
                  <strong>Descripcion: </strong> {{ tutor.description }}
                </v-card-text>
                <v-card-text class="black--text ">
                  <strong>Precio por hora:  </strong>   S/{{ tutor.pricePerHour }}.00
                </v-card-text>
              </div>
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black v-card--reveal white--text"
                    style="height: 100%;">
                  <v-btn outlined color="white">Detail</v-btn>
                </div>
              </v-expand-transition>

            </v-card>
          </v-hover>
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import axios from "axios";


export default {
  name: 'tutors',
  data: () => ({
    error:[],
    tutors:[]
  }),
  created() {
    axios.get(`https://aqueous-lowlands-60101.herokuapp.com/api/tutor`)
        .then(response => {
          this.tutors = response.data;
          console.log('data: ');
          console.log(response.data);
        })
        .catch( e => {
          this.error.push(e);
        });
  },
  methods:{
    setTutor(tutor){
      axios.get(`https://aqueous-lowlands-60101.herokuapp.com/api/tutor/${tutor.id}`)
          .then(response => {
            this.tutors = response.data.tutors;
            console.log('data: ');
            console.log(response.data.tutors);
          })
          .catch( e => {
            this.error.push(e);
          });
    }
  }
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>