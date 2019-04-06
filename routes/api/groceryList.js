const router = require("express").Router();
//const booksController = require("../../controllers/booksController");
function getRoute(req, res){
    res.send("GROCEryLIST");

}
// Matches with "/api/books"
router.route("/groceryList")
  .get(getRoute);
//   .post(booksController.create); //until the controller is ALIVE

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;