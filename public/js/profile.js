const populateFriendList = async () => {
  // console.log('tesdfasdf');
  const friendList = document.querySelector('#display-friends');
  const friendLinks = document.querySelector('#display-friends-list');
  const friends = friendList.children;
  numFriends = friends.length;
  // console.log(typeof friends[1].innerHTML);
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

const newWorkoutHandler = async (event) => {
  event.preventDefault();

  // const name = document.querySelector('#name-signup').value.trim();
  // const email = document.querySelector('#email-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // if (name && username && password) {
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

populateFriendList();


  







