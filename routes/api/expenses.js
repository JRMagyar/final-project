const router = require("express").Router();
const expenseCont = require("../../controllers/expenseController")

// Matches with "/api/books"
router.route("/expenses/:id")
  .post(expenseCont.create)

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;