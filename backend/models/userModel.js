const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

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
userSchema.statics.signup = async (email, password) => {
    const exists = await this.findOne({ email: email })

    if (exists) {
        throw Error("Email already exists")
    };

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash
    });

    return user;
};

module.exports = mongoose.model('User', userSchema);