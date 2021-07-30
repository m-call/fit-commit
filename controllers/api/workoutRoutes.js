const router = require('express').Router();
const { Workout, WorkoutExercise, Exercise } = require('../../models');

// Get all workouts
router.get('/', async (req, res) => {
  try {
    const workoutData = await Workout.findAll();
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Get one workout
router.get('/:id', async (req, res) => {
  try {
    const workoutData = await Workout.findByPk(req.params.id, {
      include: [{ model: Exercise, through: WorkoutExercise, as: 'workout_exercise'}]
    })
  }
})

// Add a workout
router.post('/', async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a workout
router.put('/:id', async (req, res) => {
  try {
    const workoutData = await Workout.findByPk({});
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a workout


module.exports = router;
