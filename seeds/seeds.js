
const sequelize = require('../config/connection');
const {
  Exercise,
  Score,
  User,
  WorkoutExercise,
  Workout,
} = require('../models');

const userData = require('./users_seeds.json');
const exerciseData = require('./exercises_seeds.json');
const scoreData = require('./score_seeds.json');
const workoutExercisesData = require('./workout_exercises_seeds.json');
const workoutData = require('./workout_seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Exercise.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });

  await Score.bulkCreate(scoreData, {
    individualHooks: true,
    returning: true,
  });

  await Workout.bulkCreate(workoutData, {
    individualHooks: true,
    returning: true,
  });

  await WorkoutExercise.bulkCreate(workoutExercisesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
}; 
seedDatabase(); 