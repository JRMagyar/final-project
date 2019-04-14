const router = require("express").Router();
const billCont = require("../../controllers/expenseController")

// Matches with "/api/books"
router.route("/all/:id")
.get(billCont.findAllCal)

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;