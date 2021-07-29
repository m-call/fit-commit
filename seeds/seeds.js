
const sequelize = require('../config/connection');
const { Exercises, Scores, Users, WorkoutExercises, WorkoutHistory} = require('../models');

const userData = require('./users_seeds.json');
const exerciseData = require('./exercises_seeds.json');
const scoreData = require('./score_seeds.json');
const workoutExercisesData = require('./workout_exercises_seeds.json');
const workoutHistoryData = require('./workout_history_seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Exercises.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });

  await Scores.bulkCreate(scoreData, {
    individualHooks: true,
    returning: true,
  });

  await WorkoutExercises.bulkCreate(workoutExercisesData, {
    individualHooks: true,
    returning: true,
  });

  await WorkoutHistory.bulkCreate(workoutHistoryData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
}; 
seedDatabase(); 