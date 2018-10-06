<template>
  <section>
    <img alt="Prefeitura de Porto Alegre" src="../../assets/poa.png" height="200px" width="200px"><br>
    <h1>Fim! Você fez: {{ pontos }} pontos!</h1>
  </section>  
</template>

<script>
export default {
  name: "TelaFinal",
  components: {},
  data: () => {
    pontos: "";
    return {};
  },
  created() {
    this.pontos = this.$route.params.pontos;
  },
  computed: {},
  methods: {}
};
</script>
