const router = require('express').Router();
const { WorkoutHistory } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    const newWorkout = await WorkoutHistory.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
