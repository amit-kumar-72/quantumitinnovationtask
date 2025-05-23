const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    dateOfBirth: {
        type: String,
      
    },
    email: {
        type: String,
        unique: true, 
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true }); 

const User = mongoose.model("User", UserSchema);

module.exports = User;