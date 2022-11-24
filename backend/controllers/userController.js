const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST api/users
// @access  Public (because you cannot access a public route without being logged in and you cannot log in without being registered))
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    // validation
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    // check if user was crated
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate a user
// @route   POST api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // check for user email
    const user = await User.findOne({email})

    // check for user password
    // because the password is hashed we have to use bcrypt and pass it the password user inputted and the saved password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc    Get user data
// @route   GET api/users/me (get the current user info by sending the the token and getting th id from the token  )
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User data display"})
})

module.exports = {
    registerUser, loginUser, getMe
}