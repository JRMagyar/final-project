const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
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
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

module.exports = Expenses;