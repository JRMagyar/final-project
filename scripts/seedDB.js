const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fptesting");
mongoose.connect("mongodb://localhost/fptesting");
const householdSeed =
{
    _id : ObjectId("5cb22272faf92402403661c0"),
    name: "Demo Household",
    users : [ 
        "5cb22273faf92402403661c3", 
        "5cb22273faf92402403661c4"
    ],
    expenses : [ 
        "5cb22271faf92402403661be", 
        "5cb22271faf92402403661bf"
    ],
    finances : [ 
        "5cb22272faf92402403661c1", 
        "5cb22272faf92402403661c2"
    ],
    schedules : [ 
        "5cb22273faf92402403661c5", 
        "5cb22273faf92402403661c6"
    ]
}

const expensesSeed = [
    {
        _id : ObjectId("5cb22271faf92402403661be"),
        name: "Electric Bill",
        description: "Monthly electric bill",
        amount: 63,
        calendar: {
            title: "Electric",
            start: "2019-04-23"
        }
    },
    {
        _id : ObjectId("5cb22271faf92402403661bf"),
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
        _id : ObjectId("5cb22272faf92402403661c1"),
        name: "Paycheck",
        description: "Biweekly paycheck",
        amount: 650,
        calendar: {
            title: "Pay Day",
            start: "2019-04-12"
        }
    },
    {
        _id : ObjectId("5cb22272faf92402403661c2"),
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
        _id : ObjectId("5cb22273faf92402403661c3"),
        username: "Admin",
        email: "Admin@example.com",
        password: "Admin",
        hhID: "demohh01"
    },
    {
        _id : ObjectId("5cb22273faf92402403661c4"),
        username: "Demo",
        email: "Demo@example.com",
        password: "Demo",
        hhID: "demohh01"
    }
]

const scheduleSeeds = [
    {
        _id : ObjectId("5cb22273faf92402403661c5"),
        calendar: {
            title: "Soccer Game",
            start: "2019-04-01T13:30:00",
            allDay: false
        }
    },
    {
        _id : ObjectId("5cb22273faf92402403661c6"),
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