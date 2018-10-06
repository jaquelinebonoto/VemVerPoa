<template>
  <button class="btn btn-danger" @click="onClick">{{ texto }}</button>
</template>


<script>
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
   background-color: #FF1F22;
}
</style>