const {Exercises} = require('../models');

const exerciseData = [
  {
    exerciseId: 1,
    name: "Burpee: 8 reps",
  },
  {
    exerciseId: 2,
    name: "Six Minute AMRAPs",
  },
  {
    exerciseId: 3,
    name: "Jump squat: 8 reps",
  },
  {
    exerciseId: 4,
    name: "Frog sit-up: 8 reps",
  },
];

const seedExercise = () => Exercises.bulkCreate(exerciseData);

module.exports = seedExercise;
