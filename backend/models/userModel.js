const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// static signup method
userSchema.statics.signup = async function(email, password) {
    //validation
    if (!email || !password) {
        throw Error("All fields must be filled");
    };

    if (!validator.isEmail(email)) {
        throw Error("Please enter a valid email");
    };

    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough. Please include: at least 8 characters, at least one symbol, at least one number, and at least one uppercase character");
    };

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already exists");
    };

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash
    });

    return user;
};

// static login method 
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    };

    const user = await this.findOne({ email })

    if (!user) {
        throw Error("Wrong email. Please sign up")
    };

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Wrong password. Please try again.");
    };
    
    return user; 
};

module.exports = mongoose.model('User', userSchema);