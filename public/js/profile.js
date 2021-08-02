const populateFriendList = async () => {
  // console.log('tesdfasdf');
  const friendList = document.querySelector('#display-friends');
  const friendLinks = document.querySelector('#display-friends-list');
  const friends = friendList.children;
  numFriends = friends.length
  // console.log(typeof friends[1].innerHTML);
  for(var i=0; i<numFriends; i++){
    fetch(`/api/users/${friends[i].innerHTML}`).then(function(response) {
      // return response.text()
      // console.log(response.json());
      return response.json();
    }).then(function(res) {
      console.log(res);
      let friend = document.createElement("p");  
      friend.innerHTML = `${res.full_name}`;     
      friendLinks.appendChild(friend); 
    });
  }
}
populateFriendList();


  







