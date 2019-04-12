const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
   .get(userController.findAll)
   .post(userController.create); //until the controller is ALIVE
   
router.route("/:id")
  .get(userController.findByID)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;