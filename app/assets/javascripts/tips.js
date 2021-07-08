// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var Tips;

Tips = {};

Tips.removeTipCard = function(tipId) {
  document.getElementById('tip-' + tipId).parentElement.remove();
};

Tips.addNotice = function() {
  document.getElementById('notice').textContent = 'Tip was successfully destroyed.';
};
