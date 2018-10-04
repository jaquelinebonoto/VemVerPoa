<template>
  <form v-on:submit.prevent="onSubmit">
    <EmailInput email="usuario" ref="usuarioRef" />
    <PasswordInput senha="senha" ref="senhaRef"/>
    <Button :texto="textoBotao" type="submit" />
</form>
</template>

<script>
import Button from "../shared/Button.vue";
import EmailInput from "../shared/EmailInput.vue";
import PasswordInput from "../shared/PasswordInput.vue";

export default {
  name: "Login",
  components: {
    Button,
    EmailInput,
    PasswordInput
  },
  data() {
    return {
      textoBotao: "Entrar"
    };
  },
  methods: {
    onSubmit() {
      const podeLogar =
        this.$refs.usuarioRef.valor === "admin@dbccompany.com" &&
        this.$refs.senhaRef.valor === "admin";
      if (podeLogar) {
        this.textoBotao = "Aguarde...";
        setTimeout(() => {
          this.$router.push({ name: "Home", params: { usuario } });
        }, 2000);
      }
    }
  }
};
</script>

<style>
span {
  color: brown;
}
</style>
