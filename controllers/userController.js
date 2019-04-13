const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Household.
        findOne({_id: req.params.id})
        .populate("users")
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    findByID: function(req, res){
        db.User
        .findOne({_id: req.params.id})
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        db.User
        .create(req.body)
        .then(newUser => {
            return db.Household.findOneAndUpdate({_id: req.params.id}, {$push:{User: newUser._id}}, {new: true})
        })
        .catch(err => res.json(err));
    },
    update: function(req, res){
        db.User
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => err);
    },
    remove: function(req, res){
        db.User
        .findByID({_id: req.params.id})
        .then(dbUser => dbUser.remove())
        .catc(err => res.json(err));
    },
    loginFind: function(req, res){
        db.Household
        .find({User})
        .then(allUsers => {console.log(allUsers); res.json(allUsers)})
        .catch(err => res.json(err))
    }
}