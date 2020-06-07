// @ts-nocheck
import Vue from "vue";



export default async () => {
  return new Promise((resolve, reject) => {
    Vue.ws.disconnect();

    //console.log(`ws://${window.location.host}`)
    Vue.ws.connect(
      {
        wsDomain: `ws://localhost`,
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
