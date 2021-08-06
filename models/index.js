const Exercise = require('./Exercise');
const Score = require('./Score');
const User = require('./User');
const WorkoutExercise = require('./WorkoutExercise');
const Workout = require('./Workout');

// USER RELATIONS

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Score, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Workout.belongsTo(User, {
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

Exercise.belongsToMany(Workout, {
  through: {
    model: WorkoutExercise,
    unique: false,
  },

  as: 'exercise_workout',
});

Workout.belongsToMany(Exercise, {
  through: {
    model: WorkoutExercise,
    unique: false,
  },

  as: 'workout_exercise',
});

module.exports = { Exercise, Score, User, WorkoutExercise, Workout };