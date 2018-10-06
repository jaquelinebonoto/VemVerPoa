<template>
      <div id="quiz" :class="classe">
         <h1>Pergunta</h1>      
        <p class="questoes">  
          {{ pergunta.pergunta }} 
        </p>      
        <div class="respostas">
          <p class="opcao" v-for="opcao in pergunta.opcoes" :key="pergunta.opcoes.indexOf(opcao)" @click="escolha = pergunta.opcoes.indexOf(opcao)">{{ opcao }} </p>        
        </div>               
        <div>
          <Button v-bind:onClick="onSubmit" :texto="textoBotao" type="submit"/>          
        </div>        
    </div> 
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Questao",
  components: { Button },
  props: { pergunta: Object },
  data: () => {
    return {
      classe: "",
      escolha: "",
      textoBotao: "Enviar resposta"
    };
  },
  methods: {
    onSubmit() {
      if (this.textoBotao === "Próxima pergunta")
        console.log("chamar próxima pergunta");
      if (this.classe !== "") return;
      if (this.escolha === "") return;
      this.textoBotao = "Aguarde...";
      setTimeout(() => {
        if (this.escolha == this.pergunta.resposta) this.classe = "correto";
        else this.classe = "errado";
        this.textoBotao = "Próxima pergunta";
      }, Math.floor(Math.random() * 5000));
    }
  }
};
</script>

<style scoped>
#quiz {
  background-color: #34495e; /*#82d6ff é a cor escolhida no layout, mas ficou muito claro*/
  padding-bottom: 60px;
  width: 30vw;
  border-radius: 5%;
  color: #fff;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 5%;
}

#quiz > h1 {
  text-align: center;
  padding-top: 25px;
  font-size: 2rem;
}
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

.correto {
  background-color: #109d59 !important;
}

.errado {
  background-color: #dc4437 !important;
}

.btn {
  display: block;
  margin: 0 auto;
}
</style>
