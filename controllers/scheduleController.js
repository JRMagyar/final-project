const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Household
        .findOne({_id: req.params.id})
        .populate("schedules")
        .then(dbResults => res.json(dbResults.schedules))
        .catch(err => res.json(err));
    },
    findByID: function(req, res){
        db.Schedule
        .findOne({_id: req.params.id})
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        db.Schedule
        .create(req.body)
        .then(newSchedule => {
            return db.Household.findOneAndUpdate({_id: req.params.id}, {$push:{schedules: newSchedule._id}}, {new: true})
        })
        .then(dbResults => res.json(dbResults))
        .catch(err => res.json(err));
    },
    update: function(req, res){
        db.Schedule
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbSchedule => res.json(dbSchedule))
        .catch(err => err);
    },
    delete: function(req, res){
        db.Schedule
        .findByID({_id: req.params.id})
        .then(dbSchedule => dbSchedule.remove())
        .catc(err => res.json(err));
    }
}