const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class WorkoutExercise extends Model {}

WorkoutExercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    repetitions: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'workouthistory',
        key: 'id',
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exercise',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workoutexercise',
  }
);

module.exports = WorkoutExercise;
