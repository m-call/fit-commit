const { Scores } = require('../models');

const scoreData = [
  {
    overallScore: 1,
    weeklyScore: 1,
    monthlyScore: 0,
  },
  {
    overallScore: 2,
    weeklyScore: 2,
    monthlyScore: 0,
  },
  {
    overallScore: 3,
    weeklyScore: 3,
    monthlyScore: 0,
  },
  {
    overallScore: 4,
    weeklyScore: 4,
    monthlyScore: 0,
  },
];

const seedScore = () => Scores.bulkCreate(scoreData);

module.exports = seedScore;
