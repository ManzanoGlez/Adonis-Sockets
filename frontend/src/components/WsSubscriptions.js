// @ts-nocheck
import Vue from "vue";



export default async () => {

let protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
let host = window.location.host;

  return new Promise((resolve, reject) => {
    Vue.ws.disconnect();
    Vue.ws.connect(
      {
        wsDomain: `${protocol}${host}`,
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
