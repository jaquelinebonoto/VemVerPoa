<template>
  <form class="needs-validation mx-auto" @submit.prevent="adicionar">
    <h1>EM DESENVOLVIMENTO...</h1>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <input v-model="nome" type="text" class="form-control" id="validationTooltip01" placeholder="Digite seu nome" v-validate="'required|length:15'" name="nome" required>
      <div class="valid-tooltip">
        {{ errors.first('nome') }}
      </div>
    </div>
    <div class="col-md-4 mb-3">
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip02"></label>
      <textarea v-model="pergunta" class="form-control" rows="5" id="validationTooltip02" placeholder="Digite aqui sua pergunta"></textarea>
      <div class="invalid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03"></label>
      <textarea v-model="a" class="form-control" rows="2" id="validationTooltip03" placeholder="Resposta a"></textarea>
      <div class="invalid-tooltip">
        Looks good!
      </div>
      <textarea v-model="b" class="form-control" rows="2" id="validationTooltip04" placeholder="Resposta b"></textarea>
      <div class="invalid-tooltip">
        Looks good!
      </div>
      <textarea v-model="c" class="form-control" rows="2" id="validationTooltip05" placeholder="Resposta c"></textarea>
      <div class="invalid-tooltip">
        Looks good!
      </div>
      <input v-model="resposta" type="number" placeholder="Qual é a correta?">
    </div>
    <div class="col-md-3 mb-3 mx-auto">
      <label for="validationTooltip06">Informe as cordenadas (Latitude/Longitude)</label>
      <input v-model="lat" type="number" class="form-control" id="validationTooltip06" placeholder="Latitude" required>
      <input v-model="lng" type="number" class="form-control" id="validationTooltip07" placeholder="Longitude" required>
      <div class="invalid-tooltip">
        Looks good!
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Enviar nova questão</button>
</form>
</template>

<script>
export default {
  name: "Formulario",
  props: {},
  data: () => {
    return {
      perguntas: [],
      novaPergunta: {},
      nome: "",
      pergunta: "",
      a: "",
      b: "",
      c: "",
      opcoes: [],
      resposta: "",
      centro: {},
      lat: "",
      lng: ""
    };
  },
  methods: {
    criarJson() {
      this.opcoes.push(this.a);
      this.opcoes.push(this.b);
      this.opcoes.push(this.c);

      this.centro.lat = this.lat;
      this.centro.lng = this.lng;
    },
    async adicionar() {
      this.criarJson();
      let perguntasAntes = this.perguntas.concat();
      fetch("http://localhost:3000/perguntas", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: this.perguntas.length + 1,
          pergunta: this.pergunta,
          opcoes: this.opcoes,
          resposta: this.resposta,
          autor: this.nome,
          centro: this.centro
        })
      })
        .then(j => j.json())
        .then(p => {
          perguntasAntes.push(p);
          this.perguntas = perguntasAntes;
          this.novaPergunta = "";
        });
    }
  },
  created() {
    fetch("http://localhost:3000/perguntas")
      .then(j => j.json())
      .then(p => {
        this.perguntas = p;
      });
  }
};
</script>
