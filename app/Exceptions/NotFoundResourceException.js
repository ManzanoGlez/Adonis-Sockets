'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class NotFoundResourceException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, { response }) {
    return response.status(404).send({ error: { msg: "Not Found Resource" } });
  }
}

module.exports = NotFoundResourceException
