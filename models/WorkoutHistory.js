const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class WorkoutHistory extends Model {}

WorkoutHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workouthistory',
  }
);

module.exports = WorkoutHistory;
