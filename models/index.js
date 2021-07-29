const Exercise = require('./Exercise');
const Score = require('./Score');
const User = require('./User');
const WorkoutExercise = require('./WorkoutExercise');
const WorkoutHistory = require('./WorkoutHistory');

// USER RELATIONS

User.hasMany(WorkoutHistory, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Score, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

WorkoutHistory.belongsTo(User, {
  foreignKey: 'user_id',
});

Score.belongsTo(User, {
  foreignKey: 'user_id',
});

// WORKOUT HISTORY RELATIONS
// WorkoutHistory.hasMany(WorkoutExercise, {
//   foreignKey: 'workout_id',
//   onDelete: 'CASCADE',
// });

Exercise.belongsToMany(WorkoutHistory, {
  through: {
    model: WorkoutExercise,
    unique: false,
  },

  as: 'exercises_history',
});

WorkoutHistory.belongsToMany(Exercise, {
  through: {
    model: WorkoutExercise,
    unique: false,
  },

  as: 'history_exercises',
});

module.exports = { Exercise, Score, User, WorkoutExercise, WorkoutHistory };
