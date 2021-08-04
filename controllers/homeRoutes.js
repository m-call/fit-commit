const router = require('express').Router();
const { User, Workout, Score, WorkoutExercise, Exercise } = require('../models');
const withAuth = require('../utils/auth');

// news:: displays the news 
router.get('/news', async (req, res) => {
    res.render('news'); 
}); 

//login:: redirects user to login page 
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
  // TODO logout res.redirect to home page 
  res.redirect('/'); 
});
// profile:: renders profile, router.get('/profile', async (req, res) => {
router.get('/profile', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    //findOne({ where: { email: req.body.email } });
    
    const userData = await User.findOne({
        where: { id: req.session.user_id },
        // where: { id: 1 },
        include: Score, Workout,
    });

    const workoutData = await Workout.findAll({
        where: { user_id: req.session.user_id },
        // include: Score, Workout,
    });
    console.log('workout data', typeof workoutData);

    // // Serialize data so the template can read it
    // const projects = projectData.map((project) => project.get({ plain: true }));
    const user = userData.get({ plain: true });

    // const workouts = workoutData.get({ plain: true });
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));
    console.log('workouts', workouts);

    const workoutHistory = [];
    const workoutDates = [];

    for(let i=0; i<workouts.length+1; i++){
        if(i<workouts.length){
            const exerciseData = await WorkoutExercise.findAll({
                where: { workout_id: workouts[i].id },
                // include: Exercise
            });
            const exercises = exerciseData.map((exercise) => exercise.get({ plain: true }));
            console.log('exercises', exercises);
            // workoutHistory.push(workouts[i].date);
            // exercises.unshift(workouts[i].date);
            workoutHistory.push({date: workouts[i].date});
            workoutHistory.push(exercises);
            // workoutDates.push({date: workouts[i].date});
            
            console.log('workoutHistoryinprogress', workoutHistory)
        }
        else{
            console.log('workoutHistory', workoutHistory);
            console.log('workoutDates', workoutDates);
            // Pass serialized data and session flag into template
            res.render('profile', { 
                user,
                workoutHistory,
                logged_in: req.session.logged_in 
            });
        }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// Login:: render the login.handlebars page on homeroute page 
router.get('/',  (req, res) => {
    res.render('login'); 
}); 

// Leaderboard:: render the leaderboard handlebars and pass usernames and scores
router.get('/leaderboard', async (req, res) => {
    try {
        const dbLeaderboardData = await User.findAll({
          include: Score,
          order: [
            // We to start the order of the array in descending order 
            [Score, 'weekly_score', 'DESC']
          ]
          
        });
    
        const usersLb = dbLeaderboardData.map((user) =>
          user.get({ plain: true })
        );
        // iterate through each user in the db and check if we have access to the Score properties
        for(let i=0; i<usersLb.length; i++){
            const scores = usersLb[i].scores;
            const len = scores.length;
            if(len > 0){
                console.log('week score ******', scores);
            }
        }
        console.log('==============USER LB===========', usersLb); 
        res.render('leaderboard', {
            usersLb,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
}); 

  module.exports = router;

