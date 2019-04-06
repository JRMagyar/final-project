const db = require("../models");

module.exports = {
    findbyIDNoPop: function(req, res){
        db.Household
        .findOne({_id: req.params.id})
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err))
    },
    findbyIDAllPop: function(req, res){
        db.Household
        .findOne({_id: req.params.id})
        .populate("users")
        .populate("expenses")
        .populate("finances")
        .populate("schedules")
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err))
    },
    create: function(req, res){
        db.Household
        .create(req.body)
        .then(newHousehold => res.json(newHousehold))
        .catch(err => res.json(err))
    }
}