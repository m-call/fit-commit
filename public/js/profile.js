// var express = require('express');

// const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');




// const populateFriendList = async (event) => {
//   const friendList = document.querySelector('#display-friends');
//   const friends = friendList.children;
//   numFriends = friends.length
//   // console.log(typeof friends[1].innerHTML);
//   for(var i=0; i<numFriends; i++){
//     const response = await fetch(`/api/users/${friends[i].innerHTML}`);
//     // ${friends[i].innerHTML}
//     if (response.ok) {
//       console.log(response);
//       // let friend = document.createElement("p");  
//       // friend.innerHTML = `test+${response.full_name}`;     
//       // friendList.appendChild(friend); 
//     } else {
//       alert('Failed to create project');
//     }
//     console.log(friends[i]);

//   }
// }
// populateFriendList();


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

// document
// .querySelector('#testBtn')
// .addEventListener('click', populateFriendList);

// const newAddFriendHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#project-name').value.trim();
//     const needed_funding = document.querySelector('#project-funding').value.trim();
//     const description = document.querySelector('#project-desc').value.trim();
  
//     if (name && needed_funding && description) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ name, needed_funding, description }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
//   document
//     .querySelector('.new-project-form')
//     .addEventListener('submit', newFormHandler);

  







