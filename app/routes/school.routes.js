const { authJwt } = require("../middlewares");
const controller = require("../controllers/school.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/createStudent", controller.createStudent) // after test this should be only for admins
  // to do a get student function
  };
