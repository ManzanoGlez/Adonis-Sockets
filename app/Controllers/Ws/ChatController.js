"use strict";

class ChatController {

  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  onMessage(data) {

    //console.log(this.socket.id);
    console.log(data);
    this.socket.broadcast("message", data);
  }
}

module.exports = ChatController;
