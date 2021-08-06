const router = require('express').Router();
const { Score, User } = require('../../models');

// POST: create new score 
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newScore = await Score.create({
      ...req.body,
      user_id: req.session.user_id,
      // week_id: req.session.week_id,
    });

    res.status(200).json(newScore);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET scores
router.get('/includeuser', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const scoreData = await Score.findAll({
      include: [{ model: User }],
    });
    res.json(scoreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET scores by user id
router.get('/', async (req, res) => {
  // find one category by its `user id` value

  try {
    const scoreData = await Score.findAll({
      where: {
        user_id: req.session.user_id,
      },
      // include: [{ model: User }],
    });
    res.json(scoreData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

// PUT: update score 
router.put('/:id', async(req, res) => {
    // update a category by its `id` value
    console.log("Update route",req.params.id,req.body)
    try{
      const scoreData = await Score.update(req.body,{
        where: {
          id: req.params.id,
        },
      }); 
      res.status(200).json(scoreData); 
     }
     catch(err)
     {
        res.status (500).json(err); 
     }
  
  });

  module.exports = router;