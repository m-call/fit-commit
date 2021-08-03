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
      console.log(res);
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
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // if username and password is inputted by the user then fetch the route and 
  // execute post 
    if (username && password) {
    console.log('username: ', username); 
    console.log('pass:', password); 
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
      console.log('everything is all good'); 
    } else {
      alert(response.statusText);
      console.log('THIS IS AN ERROR'); 
    }
  }
};

document
  .querySelector('#new-workout-button')
  .addEventListener('submit', newWorkoutHandler);
// display the user's friend list 
populateFriendList();


  







