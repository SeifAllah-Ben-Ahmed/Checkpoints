const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    age: {
        required: true,
        type: String,
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
