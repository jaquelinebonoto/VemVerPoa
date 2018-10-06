<template>
  <button class="btn btn-danger" @click="onClick">{{ texto }}</button>
</template>


<script>
import Button from "./Button.vue";
export default {
  name: "Button",
  props: {
    texto: String,
    onClick: Function
  }
};
</script>

<style>
btn-danger {
  background-color: #ff1f22;
  margin: 3px;
}
</style>
