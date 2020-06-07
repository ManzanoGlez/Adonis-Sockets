// @ts-nocheck
"use strict";
const Project = use("App/Models/Project");
const Authorization = use("App/Services/Authorization");
const { validate } = use("Validator");

class ProjectController {

  async show({ auth, response }) {
    const user = await auth.getUser();

    const projects = await user.projects().fetch();

    return response.status(200).send({
      success: {
        user: {
          ...user.$attributes,
          projects,
        },
      },
    });
  }

  async create({ auth, response, request }) {
    const user = await auth.getUser();
    const { name } = request.all();
    const project = new Project();

    project.name = name;

    await user.projects().save(project);

    return response.status(201).send({
      success: {
        project,
      },
    });
  }

  async update({ params, request, response, auth }) {

    const { id } = params;
    const rules = { name: "required" };
    const validation = await validate(request.all(), rules);

    if (validation.fails()) {
      return response.status(400).send({ error: validation.messages() });
    }

    const user = await auth.getUser();
    const project = await Project.find(id);

    Authorization.existsResource(project);
    Authorization.checkPermission(project, user);

    project.merge(request.only("name"));

    await project.save();

    return response.status(200).send({
      success: { project },
    });
  }

  async destroy({ auth, response, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);

    Authorization.existsResource(project);
    Authorization.checkPermission(project, user);

    await project.delete();

    return response.status(200).send({
      success: { project },
    });
  }
}

module.exports = ProjectController;
