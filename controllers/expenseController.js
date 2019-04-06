const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Household.
        findOne({_id: req.params.id})
        .populate("expenses")
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    findByID: function(req, res){
        db.Expenses
        .findOne({_id: req.params.id})
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        db.Expenses
        .create(req.body)
        .then(newExpense => {
            return db.Household.findOneAndUpdate({_id: req.params.id}, {$push:{expenses: newExpense._id}}, {new: true})
        })
        .catch(err => res.json(err));
    },
    update: function(req, res){
        db.Expenses
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbExpense => res.json(dbExpense))
        .catch(err => err);
    },
    delete: function(req, res){
        db.Expenses
        .findByID({_id: req.params.id})
        .then(dbExpense => dbExpense.remove())
        .catc(err => res.json(err));
    }
}