<template>
  <v-app>
    <navegation></navegation>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import navegation from "@/components/navegation";

export default {
  data: () => ({
    stateLogin: false
  }),
  components: { navegation },

};

</script>
