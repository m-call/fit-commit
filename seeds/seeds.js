
const sequelize = require('../config/connection');
const { Exercises, Scores, Users, WorkoutExercises, WorkoutHistory} = require('../models');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await Users.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const exercises = await Exercises.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    const scores = await Scores.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    const workoutExercises = await WorkoutExercises.bulkCreate(userData,{
        individualHooks: true,
        returning: true,
    }); 

    const workoutHistory = await WorkoutHistory.bulkCreate(userData,{
        individualHooks: true,
        returning: true,
    }); 
    process.exit(0); 
}; 
seedDatabase(); 