const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fptesting");

const householdSeed =
{
    name: "Demo Household"
}

const expensesSeed = [
    {
        name: "Electric Bill",
        description: "Monthly electric bill",
        amount: 63,
        calendar: {
            title: "Electric",
            start: "2019-04-23"
        }
    },
    {
        name: "Netflix",
        description: "Monthly netflix fee",
        amount: 10,
        calendar: {
            title: "Netflix",
            start: "2019-04-20"
        }
    }
]

const financeSeeds = [
    {name: "Paycheck",
    description: "Biweekly paycheck",
    amount: 650,
    calendar: {
        title: "Pay Day",
        start: "2019-04-12"
    }},
    {name: "Paycheck",
    description: "Biweekly paycheck",
    amount: 650,
    calendar: {
        title: "Pay Day",
        start: "2019-04-26"
    }}
]

const userSeeds = [
    {
        username: "Admin",
        email: "Admin@example.com",
        password: "Admin"
    },
    {
        username: "Demo",
        email: "Demo@example.com",
        password: "Demo"
    }
]

