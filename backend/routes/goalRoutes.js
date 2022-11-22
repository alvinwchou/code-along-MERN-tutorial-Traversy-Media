const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoals, deleteGoal} = require('../controllers/goalController')


// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })
router.get('/', getGoals)

router.post('/', setGoal)

router.put('/:id', updateGoals)

router.delete('/:id', deleteGoal)

module.exports = router