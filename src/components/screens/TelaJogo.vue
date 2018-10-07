<template>
<div>
  <Header :pontos="pontos" style="width: 99.099vw"/> 
    <div class="row">    
    <div class="colPergunta">
      <div id="quiz" :class="classe">
        <Questao :pergunta="questao" ref="questaoRef"/>
        <Button v-bind:onClick="onSubmit" :texto="textoBotao" type="submit"/> <br>
        <Button v-bind:onClick="initialize" :texto="texto" type="submit"/>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{width: `${progresso}%`}" aria-valuemin="0" aria-valuemax="100">{{ questao.id }} de 5</div>
        </div>
    </div>
    </div>
    <!--Grid column-->
    <OMapa />
</div>
</div>

</template>


<script >
import mapApi from "../../api/map.js";
import Button from "../shared/Button.vue";
import Questao from "../shared/Questao.vue";
import Mapa from "../../models/mapaLocal.js";
import Header from "../shared/Header.vue";
import OMapa from "../shared/Mapa.vue";

export default {
  name: "TelaJogo",
  components: { Button, Questao, Header, OMapa },
  data: () => {
    return {
      pontos: 0,
      progresso: 20,
      numPergunta: 0,
      questoes: [],
      questao: {},
      classe: "",
      textoBotao: "Enviar resposta",
      texto: "Ver mapa",
      centro: ""
    };
  },
  methods: {
    reset() {
      this.classe = "";
      this.textoBotao = "Enviar resposta";
      this.$refs.questaoRef.escolha = "";
    },
    onSubmit() {
      if (this.textoBotao === "Próxima pergunta") {
        this.reset();
        this.progresso += 20;
        this.questao = this.buscarPergunta();
      }
      if (this.classe !== "") return;
      if (this.$refs.questaoRef.escolha === "") return;
      this.textoBotao = "Aguarde...";
      setTimeout(() => {
        if (
          this.$refs.questaoRef.escolha ==
          this.$refs.questaoRef.pergunta.resposta
        ) {
          this.classe = "correto";
          console.log("Correto")
          this.aumentaPontos();
        } else this.classe = "errado";
                  console.log("Errado")
        this.textoBotao = "Próxima pergunta";
      }, 2000);
    },
    buscarPergunta() {
      if (this.questoes[this.numPergunta + 1] === undefined) {
        let pontos = this.pontos;
        this.$router.push({ name: "TelaFinal", params: { pontos } });
      } else {
        this.numPergunta++;
        return this.questoes[this.numPergunta];
      }
    },
    aumentaPontos() {
      this.pontos += 100;
    },
     initialize() {     
      if (this.$refs.questaoRef.escolha === "") {
        this.pergunta.centro = "{lat:-30.1087957, lng:-51.3172272}"
        //mapa na posição inicial 
        console.log("botão apertado sem escolha");
      } 
            
      if (this.$refs.questaoRef.escolha !== "") {
        this.centro = this.questoes.pergunta.centro
        console.log("escolha preenchida");
        //colocar as posições dos locais no json
        //fazer com que o mapa seja apresentado de acordo com a resposta correta
      }

      
    }
  },
  created() {
    fetch(`http://localhost:3000/perguntas/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(j => j.json())
      .then(p => {
        this.questoes = p;
        this.questao = this.questoes[0];
      });
  }
};
</script>

<style scoped>
#row {
  width: 100%;
  height: 100%;
  display: flex;
}

.colPergunta {
  width: 40%;
  height: 100%;
  display: inline-flex;

}

.colMapa {
  width: 60%;
  height: 100%;

}
.progress {
  width: 90%;
  margin: 5%;
}

#quiz {
  background-color: #34495e;
  padding-bottom: 60px;
  width: 70%;
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
