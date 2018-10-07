<template>
  <div class="row mx-auto">
    <div class="col"><img alt="Prefeitura de Porto Alegre" src="../../assets/poa.png" height="200px" width="200px">
    <div class="container">
      <h1>O jogo acabou :( <br>
      Você fez: {{ pontos }} pontos!</h1>
      <a class="btn btn-danger" target="_blank" :href="`http://twitter.com/home?status=Nossa! Acabei de fazer ${pontos} pontos nesse jogo: VemVerPoa!`">Tweet seus pontos!</a>
      </div>
    </div>    
  </div>  
</template>

<script>
import Button from "../shared/Button.vue";
export default {
  name: "TelaFinal",
  components: { Button },
  data: () => {
    return {
      texto: "Compartilhe!",
      pontos: ""
    };
  },
  created() {
    this.pontos = this.$route.params.pontos;
  },
  computed: {},
  methods: {
    compartilha() {}
  }
};
</script>

<style scoped>
.container {
  background-color: #34495e;
  padding: 30px;
  width: 100%;
  border-radius: 5%;
  color: #fff;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 5%;
}
</style>

