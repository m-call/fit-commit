const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const scoreRoutes = require('./scoreRoutes');
const userRoutes = require('./userRoutes');
const workoutExerciseRoutes = require('./workoutExerciseRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/exercises', exerciseRoutes);
router.use('/scores', scoreRoutes);
router.use('/users', userRoutes, scoreRoutes);
router.use('/workouts', workoutExerciseRoutes);
router.use('/workouthistory', workoutRoutes);

module.exports = router;