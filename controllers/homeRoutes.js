const router = require('express').Router();
const { User, Workout, Score } = require('../models');
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
    

    // // Serialize data so the template can read it
    // const projects = projectData.map((project) => project.get({ plain: true }));
    const user = userData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render('profile', { 
      user, 
      logged_in: req.session.logged_in 
    });
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
        

        // for(var i = 0; i < usersLb.length; i++)
        // {
        //   // last item on the list 
        //     let j = usersLb.scores.length - 1; 
        //     // select the last item in the user lb
        //     usersLb.scores = usersLb.scores[j].get({ plain: true }); 

        // }

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

