<template>
  <button class="btn btn-success">{{ texto }}</button>
</template>


<script>
export default {
  name: "Button",
  props: {
    texto: String
  }
};
</script>
