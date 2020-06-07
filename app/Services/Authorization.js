const invalidAccessException = use("App/Exceptions/InvalidAccessException")
const NotFoundResourceException = use("App/Exceptions/NotFoundResourceException");

class Authorization {

  checkPermission(resource, user) {
    if (resource.user_id !== user.id) {
      throw new invalidAccessException();
    }
  }

  existsResource(resource) {
    if (!resource) {
      throw new NotFoundResourceException();
    }
  }
}

module.exports = new Authorization();
