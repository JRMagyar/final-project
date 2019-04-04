const router = require("express").Router();
//const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/finances")
//   .get(booksController.findAll)
//   .post(booksController.create); //until the controller is ALIVE

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;