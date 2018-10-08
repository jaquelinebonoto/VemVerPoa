<template>
    <div class="colMapa">      
      <!--Google map-->
      <div id="map-container-7" class="z-depth-1-half map-container"></div>
      <br>
      <GmapMap
        :center="centro"
        :zoom="15"
        map-type-id="terrain"
        style="width: 600px; height: 400px"
      >
        <GmapMarker
            :position="centro"
         />
      </GmapMap>
      <!--Buttons-->
      <div class="row text-center">
        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fa fa-map-marker"></i></a>
          <p>Porto Alegre, RS</p>
          <p>Brasil</p>
        </div>
        <div class="col-md-4">
          <a class="btn-floating blue accent-1"><i class="fa fa-envelope"></i></a>
          <p>jaqueline.bonoto@dbccompany.com.br</p>
          <p>douglas.marques@dbccompany.com.br / {{ centro }} </p>
        </div>
      </div>
    </div>
</template>

<script>
import Questao from './Questao.vue'
import TelaJogo from '../screens/TelaJogo.vue'


export default {
  name: "OMapa",
  props: { centro: Object }
};
</script>

