const appError = require("../../utils/appError");
const authService = require("./authService");
const createResponse = require("../../utils/response");

const signIn = async (request, response) => {
  try {
    const data = await authService.signIn(request);

    if (!data) {
      throw new appError(
        409,
        "unable to signin. please check your credentials"
      );
    }
    createResponse(response, 200, "successfully signed in", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};

const signup = async (request, response) => {
  try {
    const data = await authService.signUp(request);

    if (!data) {
      throw new appError(
        409,
        "unable to signup. please check your credentials"
      );
    }
    createResponse(response, 200, "successfully signup", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};

module.exports = {
  signIn,
  signup,
};
