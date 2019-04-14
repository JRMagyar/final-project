const router = require("express").Router();
const financeCont = require("../../controllers/financeController")

// Matches with "/api/books"
router.route("/all/:id")
  .get(financeCont.findAllCal)

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;