const router = require('express').Router();
const { Exercise } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const exerciseData = await Exercise.create({
            ...req.body
        });
        res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;