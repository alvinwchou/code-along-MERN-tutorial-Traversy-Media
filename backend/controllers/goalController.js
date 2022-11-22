const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsModel')

// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc    Set goal
// @route   POST api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    // check for the text, if not throw error
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc    Update goal
// @route   PUT api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
    //get the goal we want to update
    const goal = await Goal.findById(req.params.id)

    // check to make sure we have the goal
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // update the goal, the new: true means that it will create it if it does not exist
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    // get the goal we want to delete
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // delete the goal
    goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals, setGoal, updateGoals, deleteGoal
}