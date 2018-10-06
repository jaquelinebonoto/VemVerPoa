<template>

  <div class="row">
    <div class="col">
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
        <Button v-bind:onClick="regular_map" :texto="texto" type="submit"/>
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuemin="0" aria-valuemax="100">{{ questaoExemplo.id }} de 5</div>
      </div>
    </div>


    <!--Grid column-->
    <div class="col">

      <!--Google map-->
      <div id="map-container-7" class="z-depth-1-half map-container"></div>

      <br>
      <!--Buttons-->
      <div class="row text-center">
        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fa fa-map-marker"></i></a>
          <p>San Francisco, CA 94126</p>
          <p>United States</p>
        </div>

        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fa fa-phone"></i></a>
          <p>+ 01 234 567 89</p>
          <p>Mon - Fri, 8:00-22:00</p>
        </div>

        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fa fa-envelope"></i></a>
          <p>info@gmail.com</p>
          <p>sale@gmail.com</p>
        </div>
      </div>

    </div>
</div>


</template>


<script >
import mapApi from "../../api/map.js";
import Button from "../shared/Button.vue";

export default {
  name: "TelaJogo",
  components: { Button },
  data: () => {
    return {
      textoBotao: "Enviar resposta",
      texto: "Ver mapa",
      questaoExemplo: {
        id: "1",
        pergunta: "Patrimônio Histórico e Cultural da cidade, já passou por 4 incêndios, mas continua a desempenhar seu papel de centro de compras e observatório de manifestações culturais. Inaugurado em 1869.",
        opcoes: [
          "a) Mercado público",
          "b) Hipo Fábricas",
          "c) CentroPop (camelódromo)"
        ],
        resposta: "0",
        autor: "VemVer Inc",
        
      }
    };
  },
  methods: {
    onSubmit() {
      this.textoBotao = "Aguarde...";
      setTimeout(() => {
        this.$router.push({ name: "TelaFinal" });
      }, Math.floor(Math.random() * 5000))
  },
  regular_map() {
      
      const google = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMdoHBXjM3TNh6_WKG8So-VSvv913Q9F4&callback=initMap/`
      //mapApi.maps.event.addDomListener(window, 'load', regular_map);
      console.log("iaiai")
        var var_location = new google.maps.LatLng(40.725118, -73.997699);

        var var_mapoptions = {
        center: var_location,
        zoom: 14
        };

        var var_map = new google.maps.Map(document.getElementById("map-container-7"),
        var_mapoptions);

        var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
        });
        }
      
    }
}
</script>

<style>

#row {
  width: 100%;
  height: 100%;
  display: flex;
}


#quiz {
  background-color: #34495e; /*#82d6ff é a cor escolhida no layout, mas ficou muito claro*/
  padding-bottom: 60px;
  width: 75%;
  border-radius: 2%;
  color: #fff;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 5%;
}
.progress {
  width: 75%;
  margin: 5%;
}

#quiz > h1 {
  text-align: center;
  padding-top: 25px;
  font-size: 20px;
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
