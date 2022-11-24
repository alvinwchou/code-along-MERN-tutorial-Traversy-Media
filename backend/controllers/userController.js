// @desc    Register new user
// @route   POST api/users
// @access  Public (because you cannot access a public route without being logged in and you cannot log in without being registered))
const registerUser = (req, res) => {
    res.json({message: "Register User"})
}

// @desc    Authenticate a user
// @route   POST api/users/login
// @access  Public
const loginUser = (req, res) => {
    res.json({message: "Login User"})
}

// @desc    Get user data
// @route   GET api/users/me (get the current user info by sending the the token and getting th id from the token  )
// @access  Public
const getMe = (req, res) => {
    res.json({message: "User data display"})
}

module.exports = {
    registerUser, loginUser, getMe
}