<template>
      <div>
         <h1>Pergunta</h1>      
        <p class="questoes">  
          {{ pergunta.pergunta }} 
        </p>      
        <div class="respostas" v-for="opcao in pergunta.opcoes" :key="pergunta.opcoes.indexOf(opcao)" >
          <input type="radio" class="opcao" @click="escolha = pergunta.opcoes.indexOf(opcao)"  /> 
          <label :for="pergunta.opcoes.indexOf(opcao)"> {{opcao}}</label>     
          <br>
        </div>                 
    </div> 
</template>

<script>
export default {
  name: "Questao",
  props: { pergunta: Object },
  data: () => {
    return {
      escolha: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
.questoes {
  font-size: 17px;
  font-weight: 700;
  font-style: bold;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 20px;
}

.respostas p {
  text-align: left;
  padding: 10px 0 0 0;
  font-size: 16px;
}

.respostas p:hover {
  cursor: pointer;
  color: #fbcb43;
}

.respostas {
  padding: 0px 0 10px 0px;
}

.respostas p {
  width: 50%;
  margin: 0 auto;
  padding-bottom: 15px;
  border-top: 1px solid grey;
}

.respostas p:first-child {
  border: none;
}
</style>
