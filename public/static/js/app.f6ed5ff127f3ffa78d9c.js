webpackJsonp([1],{"9M+g":function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a=n("Xxa5"),r=n.n(a),o=n("exGp"),i=n.n(o),u=n("//Fk"),c=n.n(u),l=this,f=i()(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https:"===window.location.protocol?"wss":"ws",n=window.location.host,console.log(""+t+n),console.log(t+"://"+n+"/"),e.abrupt("return",new c.a(function(e,a){s.default.ws.disconnect(),s.default.ws.connect({wsDomain:""+t+n,jwtToken:null}),s.default.ws.socket.on("open",function(){console.log("Conectado")})}));case 5:case"end":return e.stop()}},e,l)})),m={name:"App",created:function(){var e=this;return i()(r.a.mark(function t(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:case"end":return e.stop()}},t,e)}))()}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},d=n("VU/8")(m,p,!1,null,null,null).exports,h=n("/ocq"),g={data:function(){return{form:{message:""},chatMsg:[]}},mounted:function(){this.$ws.subscribe("chat"),this.$ws.$on("message",this.onMessageServer)},beforeDestroy:function(){this.$ws.$off("message",this.onMessageServer)},methods:{onMessageServer:function(e){this.chatMsg.push(e),console.log("From Server:",e)},onSubmit:function(){this.chatMsg.push(this.form.message),this.$ws.$emitToServer("chat","message",this.form.message),this.form.message=""},onReset:function(){this.form.message="",this.chatMsg=[]}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:e.onReset}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Mensaje:","label-for":"input-1",description:"Envia un mensaje de texto."}},[n("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Ingresa el mensaje"},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),e._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Enviar")]),e._v(" "),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reinicar")])],1),e._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Mensajes enviados"}},[n("pre",{staticClass:"m-0"},[e._v(e._s(e.chatMsg))])])],1)},staticRenderFns:[]},w=n("VU/8")(g,v,!1,null,null,null).exports;s.default.use(h.a);var b=new h.a({mode:"history",routes:[{path:"/",name:"Chat",component:w}]}),M=(n("j1ja"),n("Tqaz")),_=n("bhPS"),x=n.n(_),$=n("+8O/");n("Jmt5"),n("9M+g");s.default.use(M.a),s.default.use(M.b),s.default.use($.a,{adonisWS:x.a}),s.default.config.productionTip=!1,new s.default({el:"#app",router:b,components:{App:d},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.f6ed5ff127f3ffa78d9c.js.map