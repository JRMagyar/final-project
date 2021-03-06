const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hhID: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;