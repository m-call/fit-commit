const router = require('express').Router();
const { User, Score } = require('../../models');
const bcrypt = require('bcrypt'); 

router.post('/signup', async (req, res) => {
  try {
    console.log('THIS IS INSIDE OF SIGNUP', req.body); 
    const userData = await User.create({
      username: req.body.username,
    password: req.body.password});
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      console.log('do I save?')
      res.json(userData);
    }); 
  }
  catch (err) {
  res.status(400).json(err);
}
});
router.get('/:id', async (req, res) => {
  try {
      const userData = await User.findOne({
          where: { id: req.params.id },
          include: Score
      });
      res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.adding_workout = false;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // const validPassword = await userData.checkPassword(req.body.password);
    const validPassword = await bcrypt.compareSync(req.body.password, userData.password);
    console.log("========================="); 
    console.log(validPassword); 

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
//   // TODO logout res.redirect to home page 
//   res.redirect('/'); 
// });

module.exports = router;
