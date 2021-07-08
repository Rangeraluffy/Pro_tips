// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var Users;

Users = {};

Users.removeUserCard = function(userId) {
  document.getElementById('user-' + userId).parentElement.remove();
};

Users.addNotice = function() {
  document.getElementById('notice').textContent = 'User was successfully destroyed.';
};
