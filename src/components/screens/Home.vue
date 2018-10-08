<template>
  <div class="row mx-auto">
    <div class="col"><img alt="Prefeitura de Porto Alegre" src="../../assets/poa.png" height="250px" width="250px"><br>
    <Button id="btnCapa" v-bind:texto="textoBotao" v-bind:onClick="jogar" type="submit"/></div>    
  </div>
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

<style>

.row {
  background-image: url("../../assets/fundo.png");
  background-image: no-repeat;
}
#btnCapa{
  width: 82%;
}
</style>

