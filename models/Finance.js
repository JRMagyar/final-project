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
    recurring : {
        type: Boolean,
        required: true
    },
    frequency: {
        type: String,
        required: false
    }
})

const Finance = mongoose.model("Finance", FinanceSchema);

module.exports = Finance;