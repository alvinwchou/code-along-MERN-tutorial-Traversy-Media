// this is where we put our schema and all the fields we want the user to have

// first create schema
// second create your controller
// third create route and call contoller
// finally add the route in server.js

const mongoose = require('mongoose')

// create schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a emal'],
        uniqure: true //we do not want 2 of the same email address
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
}, {
    timeStamps: true
})

module.exports = mongoose.model('User', userSchema)