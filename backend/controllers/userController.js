require('dotenv').config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    let token = jwt.sign({ _id }, process.env.SECRET, { expiresIn: '24h' });
    return token;
};

// login user
const loginUser = async (req, res) => {
    res.json({msg: "Login user"})
};

// signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        // create token 
        let token = createToken(user._id);
        res.status(201).json({email, token})
    } catch (err) {
        res.status(400).json({ error: err.message })
    };
};

module.exports = {
    loginUser,
    signupUser
};