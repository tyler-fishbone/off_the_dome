'use strict';

// create username that is part of object Recording.currentUser
// maybe first just have this as a var currentUserName

//acces DOM and get el by ID
var userNameForm = document.getElementById('username-form');
var welcomeMessage = document.getElementById('welcome-message');




// function for userName form submittal
function displayUserName(e) {
  e.preventDefault();
  //assign inputed username to var
  var userNameVariable = event.target.name.value;

  //save username to Local Storgae
  localStorage.setItem('localStorageUserName', JSON.stringify(userNameVariable));

  welcomeMessage.textContent = 'welcome, ' + userNameVariable;
}



// add event listener for userName form submittal
userNameForm.addEventListener('submit', displayUserName);


// jQuery... ?
$(document).ready(function(){
  $('#directions-for-user').hide();
  $('#username-form button').click(function() {
    $('#username-form').fadeOut('slow');
    $('#directions-for-user').delay(500).fadeIn('slow');
  });
});