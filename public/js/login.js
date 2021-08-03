$(document).ready(function(){
  $('.carousel').carousel();
});


const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint 
      // const response = await fetch('/api/users/login', {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#name-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // trainers 
    // const trainer1 = document.querySelector('#trainer1').value.trim();
    // const trainer2 = document.querySelector('#trainer2').value.trim();
    // const trainer3 = document.querySelector('#trainer3').value.trim();
  
    // if (name && username && password) {
      if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        // body: JSON.stringify({ username: username, password: password, friend_id:trainer1}),
        body: JSON.stringify({ username: username, password: password}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        // document.location.replace(`/profile'/`); 
      } else {
        alert(response.statusText);
      }
    }
  };
  
      
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  