<template>
  <div>

    <div >
      <h1>Bienvenido {{name}}</h1>
    </div>
  </div>

</template>

<script>


export default {
  name: "profile",
  data: () => ({
    name:""
  }),
  created() {
    console.log(this.$appName);
    console.log(this.$dataAll);
    this.name=this.$dataAll.name;
  }
}

</script>

<style scoped>

</style>