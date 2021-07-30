const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Score extends Model {}

Score.init(
  {
    week_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDate: true,
      },
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
      defaultValue: 0,
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
    modelName: 'score',
  }
);

module.exports = Score;
