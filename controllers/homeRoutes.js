const router = require('express').Router();
const { User, Workout, Score, WorkoutExercise, Exercise } = require('../models');
const withAuth = require('../utils/auth');

// news:: displays the news 
router.get('/news', async (req, res) => {
    res.render('news'); 
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

    // // Serialize data so the template can read it
    // const projects = projectData.map((project) => project.get({ plain: true }));
    const user = userData.get({ plain: true });

    // const workouts = workoutData.get({ plain: true });
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    const workoutHistory = [];
    const workoutDates = [];

    for(let i=0; i<workouts.length+1; i++){
        if(i<workouts.length){
            const exerciseData = await WorkoutExercise.findAll({
                where: { workout_id: workouts[i].id },
                // include: Exercise
            });
            const exercises = exerciseData.map((exercise) => exercise.get({ plain: true }));
            // workoutHistory.push(workouts[i].date);
            // exercises.unshift(workouts[i].date);
            workoutHistory.push({date: workouts[i].date});
            workoutHistory.push(exercises);
            // workoutDates.push({date: workouts[i].date});
          
        }
        else{
            // Pass serialized data and session flag into template
            res.render('profile', { 
                user,
                workoutHistory,
                logged_in: req.session.logged_in 
            });
        }
    }

    // // Pass serialized data and session flag into template
    // res.render('profile', { 
    //   user,
    // //   workoutHistory,
    //   logged_in: req.session.logged_in 
    // });
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
            // We start the order array with the model we want to sort
            [Score, 'weekly_score', 'DESC']
          ]
          
        });
    
        const usersLb = dbLeaderboardData.map((user) =>
          user.get({ plain: true })
        );
        // look through each user 
        
        for(let i=0; i<usersLb.length; i++){
            const scores = usersLb[i].scores;
            const len = scores.length;
            if(len > 0){
            }
            
            
   
            
            ;
        }

        // for(var i = 0; i < usersLb.length; i++)
        // {
        //   // last item on the list 
        //     let j = usersLb.scores.length - 1; 
        //     // select the last item in the user lb
        //     usersLb.scores = usersLb.scores[j].get({ plain: true }); 

        // }

        res.render('leaderboard', {
            usersLb,
        });
      } catch (err) {
        res.status(500).json(err);
      }

}); 

  module.exports = router;

