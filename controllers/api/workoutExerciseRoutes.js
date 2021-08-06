const router = require('express').Router();
const { WorkoutExercise } = require('../../models');

// create a workout 
router.post('/', async (req, res) => {
    console.log(req.body); 
    try {
        const workoutExerciseData = await WorkoutExercise.create({
            ...req.body,
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.status(200).json(userData);
          });
        res.status(200).json(workoutExerciseData);
    } catch (err) {
        console.log(res); 
        res.status(500).json(err);
    }
});



module.exports = router;