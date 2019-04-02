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
    category: {
        type: String,
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
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

module.exports = Expenses;