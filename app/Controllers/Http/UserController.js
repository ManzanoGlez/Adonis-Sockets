"use strict";
const User = use("App/Models/User");
const Database = use("Database");

class UserController {
  async login({ request, auth, response }) {
    // const { email, password } = request.all();
    const email = request.input("email");
    const password = request.input("password");

    const user = await Database.from("users").where("email", email).first();
    const token = await auth.attempt(email, password);

    return response.status(200).send({
      success: {
        user,
        token,
      },
    });
  }

  async getUserByToken({ auth, response }) {
    try {
      const isLogged = await auth.check();

      if (isLogged) {
        return response.status(200).send({
          success: {
            user: auth.getUser(),
          },
        });
      }
    } catch (error) {
      response.send(error.message);
    }
  }

  async register({ request, auth, response }) {
    const { username, email, password } = request.all();

    const user = await User.create({
      email,
      password,
      username,
    });

    const token = await auth.attempt(email, password);

    return response.status(201).send({
      success: {
        user,
        token,
      },
    });
  }
}

module.exports = UserController;
