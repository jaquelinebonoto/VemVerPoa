<template>
  <section>
    <h1>VemVerPoa!</h1>
    <Button v-bind:texto="textoBotao" v-bind:onClick="jogar" type="submit"/>
  </section>
</template>

<script>
import Button from "../shared/Button.vue";

export default {
  name: "Home",
  components: {
    Button
  },
  data: () => {
    return {
      textoBotao: "Jogar!"
    };
  },
  methods: {
    jogar() {
      this.textoBotao = "Carregando...";
      setTimeout(() => {
        this.$router.push({ name: "TelaJogo" });
      }, Math.floor(Math.random() * 5000));
    }
  },
  created() {
    this.$route;
  },
  computed: {}
};
</script>
