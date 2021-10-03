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
    <v-app-bar-nav-icon
    @click.stop="drawer =!drawer"
    class="mr-4"
    v-if="isXs"
    ></v-app-bar-nav-icon>
    <div v-else>
      <v-btn text plain to="/home">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text plain to="/plans">
        <span class="mr-2">PLans</span>
      </v-btn>
      <v-btn text plain to="/sing_in">
        <span class="mr-2">Sing in</span>
      </v-btn>
      <v-btn text plain to="/profile">
        <span class="mr-2">Profile</span>
      </v-btn>
    </div>
  </v-app-bar>
</div>
</template>

<script>
export default {
  name: "navegation"
}
</script>

<style scoped>

</style>