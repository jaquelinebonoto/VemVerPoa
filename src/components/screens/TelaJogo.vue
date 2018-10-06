<template>

  <div class="row">    
    <div class="col">
      <div id="quiz" :class="classe">
        <Questao :pergunta="questaoExemplo" ref="questaoRef"/>
        <Button v-bind:onClick="onSubmit" :texto="textoBotao" type="submit"/> 
        <Button v-bind:onClick="initialize" :texto="texto" type="submit"/>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuemin="0" aria-valuemax="100">{{ 1 }} de 5</div>
        </div>
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
import Questao from "../shared/Questao.vue";
import Mapa from '../../models/mapaLocal.js'


export default {
  name: "TelaJogo",
  components: { mapApi, Button, Questao },
  data: () => {
    return {
      classe: "",
      textoBotao: "Enviar resposta",
      texto: "Ver mapa",
      questaoExemplo: {
        id: "1",
        pergunta:
          "Patrimônio Histórico e Cultural da cidade, já passou por 4 incêndios, mas continua a desempenhar seu papel de centro de compras e observatório de manifestações culturais. Inaugurado em 1869.",
        opcoes: [
          "a) Mercado público",
          "b) Hipo Fábricas",
          "c) CentroPop (camelódromo)"
        ],
        resposta: "0",
        autor: "VemVer Inc"
      },
      questaoExemplo2: {
        id: "2",
        pergunta:
          "Conhecida como “A Rua Mais Bonita do Mundo”, toda sua extensão é coberta por imensas árvores. Possui serviço exclusivo de arborização e foi decretada Patrimônio Histórico, Cultural, Ecológico e Ambiental da cidade em 2006. Fica localizada entre os bairros Floresta e Independência.",
        opcoes: [
          "a) Rua Gonçalo de Carvalho",
          "b) Rua Sofia Veloso",
          "c) Avenida Osvaldo Aranha"
        ],
        resposta: "0",
        autor: "VemVer Inc"
      }
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
        this.questaoExemplo = this.questaoExemplo2;
      }
      if (this.classe !== "") return;
      if (this.$refs.questaoRef.escolha === "") return;
      this.textoBotao = "Aguarde...";
      setTimeout(() => {
        if (
          this.$refs.questaoRef.escolha ==
          this.$refs.questaoRef.pergunta.resposta
        )
          this.classe = "correto";
        else this.classe = "errado";
        this.textoBotao = "Próxima pergunta";
      }, Math.floor(Math.random() * 5000));
    },
    

      initialize() {
      const api = new mapApi(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMdoHBXjM3TNh6_WKG8So-VSvv913Q9F4&callback=initMap/`
      );
      console.log("iaiai");
      var directionsDisplay,
          directionsService,
          map;
        var directionsService = new api.maps.DirectionsService();
        directionsDisplay = new api.maps.DirectionsRenderer();
        var chicago = new api.maps.LatLng(41.850033, -87.6500523);
        var mapOptions = { zoom:7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: chicago }
        map = new api.maps.Map(document.getElementById("map-container-7"), mapOptions);
        directionsDisplay.setMap(map);
      }
    }
  
};
</script>

<style scoped>
#row {
  width: 100%;
  height: 100%;
  display: flex;
}

.progress {
  width: 75%;
  margin: 5%;
}

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
