'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

  //Relationships
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Project
