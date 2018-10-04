<template>
  <div class="form-group">   
    <input type="password" v-validate="'required|min:5'" :name="senha" v-model="valor" class="form-control" :id="senha" placeholder="Senha"> 
    <span v-show="errors.has(this.senha)">{{ errors.first(this.senha) }}</span>
  </div>  
</template>

<script>
export default {
  name: "PasswordInput",
  props: { senha: String },
  data: () => {
    return {
      valor: ""
    };
  }
};
</script>
