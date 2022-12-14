const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    //searches workout db
    let user_id = req.user._id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {

    //searches workout db
    let { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Workout not found' })
    }
    const workout = await Workout.findOne({ _id: id });

    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' })
    }
    res.status(200).json(workout);
};

// create a new workout
const addWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title')
    };
    if (!load) {
        emptyFields.push('load')
    };
    if (!reps) {
        emptyFields.push('reps')
    };

    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    // add doc to db
    try {
        let user_id = req.user._id;
        let workout = await Workout.create({
            title,
            load,
            reps,
            user_id
        });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

// delete a workout
const removeWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: "Workout does not exist." })
    }
    const workout = await Workout.deleteOne({ _id: id });

    if (!workout) {
        res.status(400).json({ error: "Workout does not exist." })
    }
    res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: "Workout does not exist." });
    }

    const workout = await Workout.updateOne({ _id: id }, { 
        ...req.body
    });

    if (!workout) {
        res.status(400).json({ error: "Workout does not exist." });
    }
    res.status(200).json(workout);
};

module.exports = {
    addWorkout,
    getWorkout,
    getWorkouts,
    removeWorkout,
    updateWorkout
};