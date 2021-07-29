const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const scoreRoutes = require('./scoreRoutes');
const userRoutes = require('./userRoutes');
const workoutExerciseRoutes = require('./workoutExerciseRoutes');
const workoutHistoryRoutes = require('./workoutHistoryRoutes');

router.use('/', exerciseRoutes);
router.use('/leaderboard', scoreRoutes);
router.use('/', userRoutes);
router.use('/', workoutExerciseRoutes);
router.use('/profile', workoutHistoryRoutes);

module.exports = router;