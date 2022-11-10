// login user
const loginUser = async (req, res) => {
    res.json({msg: "User has logged in"})
};

// signup user
const signupUser = async (req, res) => {
    res.json({msg: "Signup user"})
}

module.exports = {
    loginUser,
    signupUser
};