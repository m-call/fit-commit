const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth');


//homeRoutes
// Login:: render the login.handlebars page on homeroute page 
router.get('/',  (req, res) => {
    res.render('login')
})
module.exports = router;

// User's personal dashboard. Renders the addWorkout.handlebar 
// router.get('/profile', async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Workout}],
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


