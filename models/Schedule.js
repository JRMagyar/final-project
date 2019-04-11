const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    start:{ //yyyy-mm-ddThh:mm:ss 24hr clock
        type: String,
        required: true
    },
    end: { //if omitted event will have default end (1 day for all day otherwise 1 hour) DATE IS EXCLUSIVE
        type: String,
        required: false
    },
    allDay: { 
        type: Boolean,
        required: false
    },
    //the following are for recurring events. If any of the following is entered the event is assumed to be recurring, defaulting to daily
    daysOfWeek:[{//weekdays are enum starting at Sunday = 0, can have multiple days. Omit for daily
        type: Number,
        required: false
    }],
    startTime:{
        type: String,
        required: false
    },
    endTime:{
        type: String,
        required: false
    },
    startRecur:{
        type: String,
        required: false
    },
    endRecur:{
        type: String,
        required: false
    }
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;