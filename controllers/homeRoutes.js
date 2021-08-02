const router = require('express').Router();
const { User, Workout } = require('../models');
// const { User } = require('../models');
const withAuth = require('../utils/auth');


//homeRoutes
// Login:: render the login.handlebars page on homeroute page 
router.get('/',  (req, res) => {
    res.render('login')
})


// User's personal dashboard. Renders the addWorkout.handlebar 
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Workout}],
      });
  
      const user = userData.get({ plain: true });
      console.log('================================'); 
      console.log('USER: ', user); 
    //   console.log(user); 
      // profile.handlebars
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      console.log('IN DASHBOARD ERROR'); 
      res.status(500).json(err);
      
    }
  });


router.get('/leaderboard', async (req, res) => {
    try {
        const dbLeaderboardData = await User.findAll({
          include: [
            {
              model: Score
            //   attributes: ['filename', 'description'],
            },
          ],
        });
    
        const usersLb = dbLeaderboardData.map((user) =>
          user.get({ plain: true })
        );
    
        res.render('leaderboard', {
            usersLb,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }




    // try {
    //     const dbleaderboardData = await Users.findByPk(req.params.id, {
    //       include: [
    //         {
    //           model: Score,
    //           attributes: [
    //             'user_id',
    //             'overall_score',
    //             'weekly_score',
    //             'monthly_score',
    //             'filename',
    //             'description',
    //           ],
    //         },
    //       ],
    //     });
    
    //     const usersLb = dbleaderboardData.get({ plain: true });
    //     res.render('leaderboard', { usersLb });
    //   } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    //   }

}); 

  module.exports = router;

