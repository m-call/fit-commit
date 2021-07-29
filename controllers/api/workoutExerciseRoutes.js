const router = require('express').Router();
const { WorkoutExercise } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const workoutExerciseData = await WorkoutExercise.create({
            ...req.body,
        });
        res.status(200).json(workoutExerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});