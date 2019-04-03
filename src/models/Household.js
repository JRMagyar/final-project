const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HouseholdSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    
    //household is linked to all needed data
    users:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    expenses:[{
        type: Schema.Types.ObjectId,
        ref: "Expenses"
    }],
    finances:[{
        type: Schema.Types.ObjectId,
        ref: "Finance"
    }],
    schedules:[{
        type: Schema.Types.ObjectId,
        ref: "Schedule"
    }]


})

const Household = mongoose.model("Household", HouseholdSchema);

module.exports = Household;