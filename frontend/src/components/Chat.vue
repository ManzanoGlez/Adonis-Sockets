<template>
  <div class="container">
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Mensaje:"
        label-for="input-1"
        description="Envia un mensaje de texto."
      >
        <b-form-input
          id="input-1"
          v-model="form.message"
          type="text"
          required
          placeholder="Ingresa el mensaje"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Reinicar</b-button>
    </b-form>
    <b-card class="mt-3" header="Mensajes enviados">
      <pre class="m-0">{{ chatMsg }}</pre>
    </b-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        message: ""
      },
      chatMsg: []
    };
  },
  mounted() {


    this.$ws.subscribe("chat");
    this.$ws.$on("message", this.onMessageServer);
  },
  beforeDestroy() {
    this.$ws.$off("message", this.onMessageServer);
  },
  methods: {
    onMessageServer(data) {


      this.chatMsg.push(data);

      console.log("From Server:", data);
    },

    onSubmit() {

      console.log(window.location)


      this.chatMsg.push(this.form.message);

      this.$ws.$emitToServer("chat", "message", this.form.message);

      this.form.message = "";
    },
    onReset() {
       // Reset our form values
      this.form.message = "";
      this.chatMsg=[]
    }
  }
};
</script>
