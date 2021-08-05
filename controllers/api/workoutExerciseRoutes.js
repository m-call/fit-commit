const router = require('express').Router();
const { WorkoutExercise } = require('../../models');

// create a workout 
router.post('/', async (req, res) => {
    console.log(req.body); 
    try {
        const workoutExerciseData = await WorkoutExercise.create({
            ...req.body,
        });
        res.status(200).json(workoutExerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;