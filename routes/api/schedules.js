const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
const ScheduleCont = require("../../controllers/scheduleController")

// Matches with "/api/books"
router.route("/all/:id")
  .get(ScheduleCont.findAllCal)

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;