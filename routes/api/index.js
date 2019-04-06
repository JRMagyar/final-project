const router = require("express").Router();
//const bookRoutes = require("./books");
const groceryList = require("./groceryList");
const createAccounts = require("./createAccounts");
const eventPlanning = require("./eventPlanning");
const finances = require("./finances");
const bills = require("./bills");
const schedules = require("./schedules");

// Book routes
router.use("/groceryList", groceryList);
router.use("/creatAccounts", createAccounts);
router.use("/eventPlanning", eventPlanning);
router.use("/finances", finances);
router.use("/bills", bills);
router.use("/schedules", schedules);


module.exports = router;
