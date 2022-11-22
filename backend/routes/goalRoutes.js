const express = require("express");
const router = express.Router();
const {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoal,
} = require("../controllers/goalController");

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })

// after creating controllers we can simplify the code
// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoals)

// router.delete('/:id', deleteGoal)

// we can clean up the above code more
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoals).delete(deleteGoal);

module.exports = router;
