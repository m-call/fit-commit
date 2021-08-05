console.log("profile.js")
const populateFriendList = async () => {
  // console.log('tesdfasdf');
  const friendList = document.querySelector('#display-friends');
  const friendLinks = document.querySelector('#display-friends-list');
  const friends = friendList.children;
  let numFriends = friends.length;
  
  // iterate through all user friends and display 
  for(var i=0; i<numFriends; i++){
    fetch(`/api/users/${friends[i].innerHTML}`).then((response) => {
      // return response.text()
      // console.log(response.json());
      return response.json();
    }).then((res) => {
      //console.log(res);
      let friend = document.createElement("p");  
      friend.innerHTML = `${res.full_name}`;
      
      try{
        friend.innerHTML += ` ${res.scores[0].weekly_score}`
      }
      catch{
        friend.innerHTML += ` 0`;
      }

      friendLinks.appendChild(friend); 
    });
  }
}

// TODO: ADDS workout to db. NEED TO FIX 
// Comment: Who worked on this? 
const newWorkoutHandler = async (event) => {
  console.log('====on-submit-form======'); 
  event.preventDefault();
   // get user input from add workout form 
   const reps = document.querySelector('#add-rep').value.trim();
   const sets = document.querySelector('#add-sets').value.trim();
   const weight = document.querySelector('#add-weight').value.trim();
   const exercise = document.querySelector('#select-workout').value; 
  console.log('reps: ', reps); 
  console.log('sets: ', sets); 
  console.log('weight: ', weight); 
  console.log('exercise: ', exercise);
  //  if (weight && sets && reps && exercise) 
  if (weight && sets && reps && exercise) 
   {
     let newWorkout = {
      "repetitions": reps, 
      "sets": sets, 
      "weight": weight, 
      "time": 20, 
      "workout_id": 2, 
      "exercise_id": 2
     }
     const response = await fetch('/api/workouts', {
      method: 'POST',
      // body: JSON.stringify({ username: username, password: password, friend_id:trainer1}),
      body: JSON.stringify(newWorkout),
      headers: { 'Content-Type': 'application/json' },
    });
     
    
    if (response.ok) {
      //document.location.replace('/profile');
      // document.location.replace(`/profile'/`); 
      console.log('everything is all good',response); 
    } else {
      alert(response.statusText);
      console.log('THIS IS AN ERROR'); 
    }
   }

};

document
  .querySelector('#form-submit')
  .addEventListener('submit', newWorkoutHandler);

// display the user's friend list 
populateFriendList();


  







