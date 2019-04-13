const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models"); //probably should comment this out??

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fptesting");

/*  PASSPORT SETUP  */
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

/*  PASSPORT LOCAL STRATEGY  */
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
            return done(err);
            }

            if (!user) {
            return done(null, false);
            }

            if (user.password != password) {
            return done(null, false);
            }
            return done(null, user);
        });
    }
));

app.post('/',
    passport.authenticate('local', { failureRedirect: '/error' }),
    function(req, res) {
    res.redirect('/success?username='+req.user.username);
});

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

app.get("/users", function(req, res){
    db.User.find()
    .then(function(results){
        console.log(results);
        res.json(results)
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
//////////////////////////////////

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});