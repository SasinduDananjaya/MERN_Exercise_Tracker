const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//route end point to handle HTTP Get req under /users  uel path
router.route('/').get((req, res)=>{
    Exercise.find()    //get all the users in mongoDB
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route end point to handle HTTP Post req
router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID route
router.route('/:id').get((req, res)=>{
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error : ' + err));
});

//Delete route
router.route('/:id').delete((req, res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Exercise Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
});

//Update Route
router.route('/update/:id').post((req, res)=>{
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date(req.body.date);

            exercise.save()
                .then(()=> res.json('Exercise Updated!'))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;