const router = require('express').Router();
const { User, Workout, Score } = require('../models');
const withAuth = require('../utils/auth');

router.get('/news', async (req, res) => {
    res.render('news'); 
}); 
// router.get('/profile', async (req, res) => {
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

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;

//homeRoutes
// Login:: render the login.handlebars page on homeroute page 
router.get('/',  (req, res) => {
    res.render('login'); 
}); 



// User's personal dashboard. Renders the addWorkout.handlebar 
// router.get('/profile/:id', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Workout, Score}],
//       });
  
//       const user = userData.get({ plain: true });
//       console.log('================================'); 
//       console.log('USER: ', user); 
//     //   console.log(user); 
//       // profile.handlebars
//       res.render('profile', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       console.log('IN DASHBOARD ERROR'); 
//       res.status(500).json(err);
      
//     }
//   });


router.get('/leaderboard', async (req, res) => {
    try {
        const dbLeaderboardData = await User.findAll({
          include: Score,
          order: [
            // We start the order array with the model we want to sort
            [Score, 'weekly_score', 'DESC']
          ]
          
          // [
          //   {
          //     model: Score
          //   //   attributes: ['filename', 'description'],
          //   },

          
          // ],
        });
    
        const usersLb = dbLeaderboardData.map((user) =>
          user.get({ plain: true })
        );
        // look through each user 
        

    
        console.log('==============USER LB===========', usersLb); 
        res.render('leaderboard', {
            usersLb,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

}); 


// router.get('/leaderboard', async (req, res) => {
//   try {
//       const dbLeaderboardData = await Score.findAll({
//         include: User,
//         order: [
//           // We start the order array with the model we want to sort
//           [Score, 'weekly_score', 'DESC']
//         ]
        
//         // [
//         //   {
//         //     model: Score
//         //   //   attributes: ['filename', 'description'],
//         //   },

        
//         // ],
//       });
  

//       const scores = dbLeaderboardData.map((score) => 
//          scores.get({ plain: true })
//       ); 
//       console.log("===============SCORE LB===============", scores); 
  
//       // console.log('==============USER LB===========', usersLb); 
//       res.render('leaderboard', {
//           scores,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }

// }); 
  module.exports = router;

