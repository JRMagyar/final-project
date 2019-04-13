const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FinanceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    calendar: {
        title: {
            type: String,
            required: true
        },
        start:{ //yyyy-mm-ddThh:mm:ss 24hr clock
            type: String,
            required: true
        }
    }
})

const Finance = mongoose.model("Finance", FinanceSchema);

module.exports = Finance;