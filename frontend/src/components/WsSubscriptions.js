// @ts-nocheck
import Vue from "vue";



export default async () => {

let protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
let host = window.location.host;

let wsDomain = `${protocol}://${host}/`;


  return new Promise((resolve, reject) => {
    Vue.ws.disconnect();
    Vue.ws.connect(
      {
        wsDomain,
        jwtToken: null
      },
    );

    Vue.ws.socket.on("open", () => { console.log("Conectado") });


  });
};
