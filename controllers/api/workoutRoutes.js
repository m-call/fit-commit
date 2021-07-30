const router = require('express').Router();
const { Workout } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

router.put('/:id', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.findByPk(req.params.id);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.findByPk(req.params.id);
    if (!workoutData) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json(err);
  }
});
