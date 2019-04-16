const router = require("express").Router();
//const groceryList = require("./groceryList");
const accounts = require("./createAccounts");
//const eventPlanning = require("./eventPlanning");
const finances = require("./finances")
const bills = require("./bills");
const schedules = require("./schedules");
const expenses = require("./expenses");

//router.use("/groceryList", groceryList);
router.use("/users", accounts);
//router.use("/eventPlanning", eventPlanning);
router.use("/finances", finances);
router.use("/bills", bills);
router.use("/schedules", schedules);
router.use("/expenses", expenses);


module.exports = router;
