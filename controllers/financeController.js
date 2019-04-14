const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Household.
        findOne({_id: req.params.id})
        .populate("finances")
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    findByID: function(req, res){
        db.Finance
        .findOne({_id: req.params.id})
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        db.Finance
        .create(req.body)
        .then(newFinance => {
            return db.Household.findOneAndUpdate({_id: req.params.id}, {$push:{Finance: newFinance._id}}, {new: true})
        })
        .catch(err => res.json(err));
    },
    update: function(req, res){
        db.Finance
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbFinance => res.json(dbFinance))
        .catch(err => err);
    },
    delete: function(req, res){
        db.Finance
        .findByID({_id: req.params.id})
        .then(dbFinance => dbFinance.remove())
        .catc(err => res.json(err));
    },
    findAllCal: function(req, res){
        db.Household
        .findOne({_id: req.params.id})
        .populate({path: "finances", select: "calendar"})
        .then(dbResults => res.json(dbResults.finances))
        .catch(err => res.json(err));
    }
}