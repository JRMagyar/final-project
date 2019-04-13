const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fptesting");

const householdSeed =
{
    _id: "demohh01",
    name: "Demo Household",
    users: ["demous01", "demous02"],
    expenses: ["demoex01", "demoex02"],
    finances: ["demofi01", "demofi02"],
    schedules: ["demosc01", "demosc02"]
}

const expensesSeed = [
    {
        _id: "demoex01",
        name: "Electric Bill",
        description: "Monthly electric bill",
        amount: 63,
        calendar: {
            title: "Electric",
            start: "2019-04-23"
        }
    },
    {
        _id: "demoex02",
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
    {
        _id: "demofi01",
        name: "Paycheck",
        description: "Biweekly paycheck",
        amount: 650,
        calendar: {
            title: "Pay Day",
            start: "2019-04-12"
        }
    },
    {
        _id:"demofi02",
        name: "Paycheck",
        description: "Biweekly paycheck",
        amount: 650,
        calendar: {
            title: "Pay Day",
            start: "2019-04-26"
        }
    }
]

const userSeeds = [
    {
        _id: "demous01",
        username: "Admin",
        email: "Admin@example.com",
        password: "Admin",
        hhID: "demohh01"
    },
    {
        _id: "demous02",
        username: "Demo",
        email: "Demo@example.com",
        password: "Demo",
        hhID: "demohh01"
    }
]

const scheduleSeeds = [
    {
        _id: "demosc01",
        calendar: {
            title: "Soccer Game",
            start: "2019-04-01T13:30:00",
            allDay: false
        }
    },
    {
        _id: "demosc",
        calendar: {
            title: "Vacation",
            start: "2019-04-03",
            end: "2019-04-08"
        }
    }
]


function runSeeds() {
    db.Household
        .remove({})
        .then(() => db.Household.collection.insert(householdSeed))
        .then(data => {
            console.log(data. result.n + " households inserted");
        })
        .catch(err => {
            console.error(err)
        });

    db.Expense
        .remove({})
        .then(() => db.Expense.collection.insert(expensesSeed))
        .then(data => {
            console.log(data. result.n + " expenses inserted");
        })
        .catch(err => {
            console.error(err)
        });

    db.Finance
        .remove({})
        .then(() => db.Finance.collection.insert(financeSeeds))
        .then(data => {
            console.log(data. result.n + " finances inserted");
        })
        .catch(err => {
            console.error(err)
        });
    db.User
        .remove({})
        .then(() => db.User.collection.insert(userSeeds))
        .then(data => {
            console.log(data. result.n + " users inserted");
        })
        .catch(err => {
            console.error(err)
        });
    db.Schedule
        .remove({})
        .then(() => db.Schedule.collection.insert(scheduleSeeds))
        .then(data => {
            console.log(data. result.n + " schedules inserted");
        })
        .catch(err => {
            console.error(err)
        });   



}

runSeeds();