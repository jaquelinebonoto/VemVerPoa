<template>
  <div id="app" class="container-fluid">
    <div class="row">
        <router-view></router-view>
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
@import url('https://fonts.googleapis.com/css?family=Roboto');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
