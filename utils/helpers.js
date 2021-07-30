module.exports = {
    display_chart: (chartData) => {
        return data;
    },
    profileUrl: (user) => {
        return `/profile/${user.id}`;
    },
    friendsUrl: (user) => {
        return `/friends/${user.id}`;
    },
    newWorkoutUrl: (user) => {
        return `/new_workout/${user.id}`;
    },
  };