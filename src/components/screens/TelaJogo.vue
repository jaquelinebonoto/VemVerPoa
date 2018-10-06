<template>

  <div class="row">    
    <div class="col">
      <Questao :pergunta="questaoExemplo" :trocar="trocar" ref="questaoRef"/>
      <Button v-bind:onClick="regular_map" :texto="texto" type="submit"/>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuemin="0" aria-valuemax="100">{{ 1 }} de 5</div>
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

export default {
  name: "TelaJogo",
  components: { mapApi, Button, Questao },
  data: () => {
    return {
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
      }
    };
  },
  methods: {
    regular_map() {
      const api = new mapApi(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMdoHBXjM3TNh6_WKG8So-VSvv913Q9F4&callback=initMap/`
      );
      const exemplo1 = new Mapa((LatLng = (40.725118, -73.997699)));
      //mapApi.maps.event.addDomListener(window, 'load', regular_map);
      console.log("iaiai");
      var var_mapoptions = {
        center: location,
        zoom: 14
      };
      /*exemplo1 = new Mapa ( Map = ((document.getElementById("map-container-7"), var_mapoptions))
    exemplo1 = new Mapa ( Marker = ({
        position: var_location,
        map: var_map,
        title: "New York"
        }))*/
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
</style>
