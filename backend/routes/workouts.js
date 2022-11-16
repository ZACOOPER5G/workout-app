const express = require('express');
const Workout = require('../models/workoutModel');
const { addWorkout, getWorkout, getWorkouts, removeWorkout, updateWorkout } = require('../controllers/workoutController');
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// requires authorization for workout routes
router.use(requireAuth);

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', addWorkout);

// DELETE a workout
router.delete('/:id', removeWorkout);

// UPDATE a workoug
router.patch('/:id', updateWorkout);

module.exports = router;