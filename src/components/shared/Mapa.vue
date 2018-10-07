<template>
    <div class="colMapa">
      <!--Google map-->
      <div id="map-container-7" class="z-depth-1-half map-container"></div>
      <br>
      <GmapMap
        :center="pergunta.centro"
        :zoom="7"
        map-type-id="terrain"
        style="width: 600px; height: 400px"
      >
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
          <p>douglas.marques@dbccompany.com.br</p>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "OMapa",
  props: { pergunta: Object },
  data: () => {
    return {
      centro: "pergunta.centro"
    };
  },
  methods: {}
};
</script>

