<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <img alt="Vue logo" src="./assets/logo.png">
        <router-view>]</router-view>
      </div>      
    </div>    
  </div>
</template>

<script>
import Login from "./components/screens/Login.vue";

export default {
  name: "app",
  components: {
    Login
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
