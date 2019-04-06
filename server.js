const express = require("express");
const mongoose = require("mongoose");

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

app.get("/newHousehold/:name", function(req, res){
    let household = {}
    household.name = req.params.name
    db.Household.create(household)
        .then(function(dbHousehold){
            console.log(dbHousehold)
        })
        .catch(function(err){
            console.log(err)
        })
})

app.post("/newUser/:id", function(req, res){
    db.User.create(req.body)
    .then(function(dbUser){
        return db.Household.findOneAndUpdate({_id: req.params.id}, {$push:{Users: dbUser._id}}, {new: true})
    })
    .then(function(newUser){
        console.log(newUser)
    })
    .catch(function(err){
        console.log(err);
    })
})

app.get("/displayUsers/:id", function(req,res){
    db.Household.findOne({_id: req.params.id})
    .populate("Users")
    .then(function(results){
        console.log(results)
    })
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT);
  });

