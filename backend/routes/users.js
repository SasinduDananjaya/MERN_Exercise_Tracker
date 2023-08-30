const router = require('express').Router();
let User = require('../models/user.model');

//route end point to handle HTTP Get req under /users  uel path
router.route('/').get((req, res)=>{
    User.find()    //get all the users in mongoDB
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route end point to handle HTTP Post req
router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;