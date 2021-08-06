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

//workout_id 
var workout_id; 
const newWorkoutHandler = async (event) => 
{ 
  
  document.querySelector('#workout-selector-form').setAttribute("style","display: block;");
   // new workout obj
   let newWorkout = {
    "date": new Date().toLocaleString("en-US")
   }
   console.log('NEW WORKOUT DATE', newWorkout.date.toLocaleString("en-US"));  
   const response = await fetch('/api/workout', {
    method: 'POST',
    body: JSON.stringify(newWorkout),
    headers: { 'Content-Type': 'application/json' },
  });
  // await 
  // console.log('NEW WORKOUT RESPONSE', JSON.stringify(response))
  let tempId = await response.json()
  workout_id = tempId.id; 
  console.log('WORKOUT_ID', workout_id); 
}

// TODO: ADDS workout to db. NEED TO FIX 
// Comment: Who worked on this? 
const newWorkoutExerciseHandler = async (event) => {
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
  console.log('EXERCISE ID: ', parseInt(exercise)); 
  if (weight && sets && reps && exercise) 
   {
     let newWorkoutExercise = {
      "repetitions": reps, 
      "sets": sets, 
      "weight": weight, 
      // "time": 20,
       // TODO: HOW TO FIND WORKOUT EXERCISE_ID  
      "workout_id": workout_id, 
      "exercise_id": parseInt(exercise)
     }
     console.log('NEW WORKOUT', newWorkoutExercise); 
     const response = await fetch('/api/workoutExercise', {
      method: 'POST',
      // body: JSON.stringify({ username: username, password: password, friend_id:trainer1}),
      body: JSON.stringify(newWorkoutExercise),
      headers: { 'Content-Type': 'application/json' },
    });
     
    
    if (response.ok) {
      // document.location.replace('/profile');
      // document.location.replace(`/profile'/`); 
      console.log('everything is all good',response); 
    } else {
      alert(response.statusText);
      console.log('THIS IS AN ERROR'); 
    }
   }

};

// newWorkout 
document 
  .querySelector('#new-wk-button')
  .addEventListener('click', newWorkoutHandler); 

document
  .querySelector('#form-submit')
  .addEventListener('submit', newWorkoutExerciseHandler);

let addWorkoutIsShown = document.querySelector('#show-add-workout').innerHTML;
if(addWorkoutIsShown === "true"){
  document.querySelector('#workout-selector-form').setAttribute("style","display: block;");
}
// if(document.querySelector('#adding').innerHTML === ''){
//   document.querySelector('#workout-selector-form').setAttribute("style","display: block;");
// }

// display the user's friend list 
populateFriendList();


  







