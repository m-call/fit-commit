const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// Login:: render the login.handlebars page on homeroute page 
router.get('/',  (req, res) => {
    res.render('login')
})
module.exports = router;


