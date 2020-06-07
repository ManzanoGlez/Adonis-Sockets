// @ts-nocheck
import Vue from "vue";



export default async () => {
  return new Promise((resolve, reject) => {
    Vue.ws.disconnect();
    Vue.ws.connect(
      {
        wsDomain: "ws://localhost:8080",
        jwtToken: null
      },
      {
        path: "adonis-ws",
        reconnectionAttempts: 300,
        reconnectionDelay: 5000
      }
    );

    Vue.ws.socket.on("open", () => { console.log("Conectado") });


  });
};
