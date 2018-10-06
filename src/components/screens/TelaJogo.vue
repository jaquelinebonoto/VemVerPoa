<template>
  <!-- <div class="map">
    <h3>VemVerPoa!</h3>
		<input id="pac-input" class="controls" type="text" placeholder="Enter a location">
    <div id="type-selector" class="controls">
      <input type="radio" name="type" id="changetype-all" checked="checked"><label for="changetype-all">All</label>
      <input type="radio" name="type" id="changetype-establishment"><label for="changetype-establishment">Establishments</label>
      <input type="radio" name="type" id="changetype-address"><label for="changetype-address">Addresses</label>
    </div>
		<div id="map"></div>
    <div id="map-container" class="z-depth-1" style="height: 500px"></div>
    		<footer>
            <small>Copyright &copy; 2018 - Todos os Direitos Reservados.</small>
            <small>Desenvolvedor Douglas Marques e Jaqueline Paz.</small>
        </footer>
  </div> -->
  <div class="wrapper">
    <div id="quiz">
      <h1>Pergunta</h1>      
      <p class="questoes">  
        {{ questaoExemplo.pergunta }} 
      </p>      
      <div class="respostas">
        <p class="opcao" v-for="opcao in questaoExemplo.opcoes" :key="opcao.id">{{ opcao }}</p>        
      </div>               
      <div class="checkrespostas">
      <Button v-bind:onClick="onSubmit" :texto="textoBotao" type="submit"/>
      </div>
    </div>
  </div>
</template>


<script>
// import mapApi from "../../api/map.js";
import Button from "../shared/Button.vue";

export default {
  name: "TelaJogo",
  components: { Button },
  data: () => {
    return {
      textoBotao: "Enviar resposta",
      questaoExemplo: {
        id: "000",
        pergunta: "Qual a resposta certa?",
        opcoes: [
          "a) Esta é a resposta certa",
          "b) A opção anterior é a certa",
          "c) A primeira opção é a certa"
        ],
        resposta: "0",
        autor: "VemVer Inc"
      }
    };
  },
  methods: {
    onSubmit() {
      this.textoBotao = "Aguarde...";
      setTimeout(() => {
        this.$router.push({ name: "TelaFinal" });
      }, Math.floor(Math.random() * 5000));
    }
  }
};
</script>

<style>
/* .map {
  width: 100%;
}

#map { 
    width: 100%;
    height: 400px;
    background-color: grey;
  }

  .controls {
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  #pac-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    margin-left: 12px;
    padding: 0 11px 0 13px;
    text-overflow: ellipsis;
    width: 300px;
  }

  #pac-input:focus {
    border-color: #4d90fe;
  }

  .pac-container {
    font-family: Roboto;
  }

  #type-selector {
    color: #fff;
    background-color: #4d90fe;
    padding: 5px 11px 0px 11px;
  }

  #type-selector label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
  }*/

.wrapper {
  width: 430px;
  margin: 0 auto;
  height: 100%;
  padding-top: 0px;
}

#quiz {
  background-color: #34495e; /*#82d6ff é a cor escolhida no layout, mas ficou muito claro*/
  padding-bottom: 60px;
  width: 100%;
  border-radius: 2%;
  color: #fff;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

#quiz > h1 {
  text-align: center;
  padding-top: 25px;
  font-size: 20px;
}

.questoes {
  font-size: 28px;
  font-weight: 700;
  font-style: italic;
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

.correct,
.false {
  background-color: #109d59;
  width: 60px;
  height: 30px;
  line-height: 30px;
  padding-left: 4px;
  float: left;
  margin-left: 2px;
  margin-top: 2px;
}

.false {
  background-color: #dc4437;
}

.botao {
  position: relative;
  margin: 0 10vh;
}
</style>
