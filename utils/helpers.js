module.exports = {
    // display_chart: (chartData) => {
    //     return data;
    // },
    // profileUrl: (user) => {
    //     return `/profile/${user.id}`;
    // },
    // friendsUrl: (user) => {
    //     return `/friends/${user.id}`;
    // },
    // newWorkoutUrl: (user) => {
    //     return `/new_workout/${user.id}`;
    // },


    profileUrl: () => {
        return `/profile/1`;
    },
    friendsUrl: (user) => {
        return `/friends/1`;
    },
    newWorkoutUrl: (user) => {
        return `/new_workout/`;
    },
    printUser: (user) => {
        console.log(user);
    },
    //added
    printScores: (score) => {
        console.log(score);
    },

    showFriend: (friend) => {
        return friend;
    },
    getUserScore: (user) => {
        if(user.scores.length != 0){
            let lastIndex = user.scores.length-1;
            return user.scores[lastIndex].weekly_score;
        }
        else 
        {
            return 0;
        }
    }
  };