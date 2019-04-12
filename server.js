const express = require("express");
const mongoose = require("mongoose");

const householdCon = require("./controllers/householdController")
const ScheduleCon = require("./controllers/scheduleController")

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fptesting");

/////TESTING ROUTES/////
app.get("/newHousehold/:name", function(req, res){
    let household = {}
    household.name = req.params.name
    db.Household.create(household)
        .then(function(dbHousehold){
            res.json(dbHousehold)
            console.log(dbHousehold)
        })
        .catch(function(err){
            console.log(err)
        })
})

app.post("/newUser/:id", function(req, res){
    db.User.create(req.body)
    .then(function(dbUser){
        return db.Household.findOneAndUpdate({_id: req.params.id}, {$push:{users: dbUser._id}}, {new: true})
    })
    .then(function(newUser){
        res.json(newUser)
        console.log(newUser)
    })
    .catch(function(err){
        console.log(err);
    })
})
app.get("/displayUsers/:id", function(req,res){
    db.Household.findOne({_id: req.params.id})
    .populate({
        path: "users",
        match: {username: "Julia"}
    })
    .then(function(results){
        res.json(results.users)
        console.log(results)
    })
    .catch(function(err){
        console.log(err)
    })
})

app.post("/newFinance/:id", function(req, res){
    db.Finance.create(req.body)
    .then(function(dbFinance){
        return db.Household.findOneAndUpdate({_id: req.params.id}, {$push:{finances: dbFinance._id}}, {new: true})
    })
    .then(function(newFinance){
        res.json(newFinance)
        console.log(newFinance)
    })
    .catch(function(err){
        console.log(err);
    })
})
app.get("/displayAll/:id", function(req,res){
    db.Household.findOne({_id: req.params.id})
    .populate("finances")
    .populate("users")
    .then(function(results){
        res.json(results)
        console.log(results)
    })
    .catch(function(err){
        console.log(err)
    })
})
app.post("/newSchedule/:id", function(req, res){
    ScheduleCon.create(req, res);
});

app.get("/allSchedule/:id", function(req, res){
    ScheduleCon.findAll(req, res);
})
//////////////////////////////////

app.listen(PORT, function() {
    console.log("App running on port " + PORT);
});

