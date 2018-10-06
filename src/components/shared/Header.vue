<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" @click="home">#VemVerPoa</a>
    <a class="nav-link">Pontuação: {{ pontos }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: { pontos: Number },
  methods: {
    home() {
      setTimeout(() => {
        this.$router.push({ name: "Home" });
      }, Math.floor(Math.random() * 5000));
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-top: 0px;
  background-color: #34495e !important;
  color: #fff;
}

.nav-link {
  font-size: 2rem;
  margin: 0 auto;
}

.navbar-brand:hover {
  cursor: pointer;
}
</style>
