const { WorkoutHistory} = require('../models');

const workoutHistoryData = [
  {
    date: "7/1/2021",
  },
  {
    date: "7/2/2021",
  },
  {
    date: "7/3/2021",
  },
  {
    date: "7/4/2021",
  },
];

const seedWorkoutHistory = () => WorkoutHistory.bulkCreate(workoutHistoryData);

module.exports = seedWorkoutHistory;
