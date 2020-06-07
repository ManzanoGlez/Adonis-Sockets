'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group("UsersGroup", () => {
  Route.get("user/token", "UserController.getUserByToken").middleware("auth");
  Route.post("register", "UserController.register");
  Route.post("login", "UserController.login");
}).prefix("api/users");

Route.group("ProjectGroup", () => {
  Route.get("/", "ProjectController.show");
  Route.put("/", "ProjectController.create");
  Route.delete("/:id", "ProjectController.destroy");
  Route.patch("/:id", "ProjectController.update");
})
  .prefix("api/project")
  .middleware("auth");
