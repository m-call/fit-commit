const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Scores extends Model {}

Scores.init(
  {
    week_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overall_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weekly_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    monthly_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'scores',
  }
);

module.exports = Scores;
