<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <img alt="Prefeitura de Porto Alegre" src="./assets/poa.png" height="200px" width="200px">
        <router-view></router-view>
      </div>      
    </div>    
  </div>
</template>

<script>
import Home from "./components/screens/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
