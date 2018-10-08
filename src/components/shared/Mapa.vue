<template>
    <div class="colMapa">      
      <!--Google map-->
      <div id="map-container-7" class="z-depth-1-half map-container"></div>
      <br>
      <GmapMap
        :center="centro"
        :zoom="15"
        map-type-id="terrain"
        style= "width: 600px; height: 400px; border-style: outset"
      >
        <GmapMarker
            :position="centro"
         />
      </GmapMap>
      <!--Buttons-->
 
      
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




