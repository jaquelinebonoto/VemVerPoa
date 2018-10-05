<template>
  <div class="form-group">
    <input type="text" v-validate="'required|email|isDBC'" :name="email" v-model="valor" class="form-control" :id="email" aria-describedby="emailHelp" placeholder="usuario@email.com">
    <small id="emailHelp" class="form-text text-muted">Não vamos compartilhar seu email com ninguém.</small>
    <span v-show="errors.has(this.email)">{{ errors.first(this.email) }}</span>
  </div>
</template>

<script>
export default {
  name: "EmailInput",
  props: {
    email: String
  },
  data: () => {
    return {
      valor: ""
    };
  },
  computed: {}
};
</script>
