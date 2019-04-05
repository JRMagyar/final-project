const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    recurring: {
        type: Boolean,
        required: true
    },
    frequency: {
        type: String,
        required: false
    }
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;