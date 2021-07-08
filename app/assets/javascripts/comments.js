// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var Comments;

Comments = {};

Comments.builtComment = function(comment) {
  var commentBody = document.createElement('p');
  commentBody.className = 'mb-0';
  commentBody.appendChild(document.createTextNode(comment.body));

  var commentAvatar = document.createElement('img');
  commentAvatar.setAttribute('src', comment.userAvatar);
  commentAvatar.className = 'avatar-xs';

  var commentUserLink = document.createElement('a');
  commentUserLink.setAttribute('href', comment.userLink);
  commentUserLink.appendChild(commentAvatar);
  commentUserLink.appendChild(document.createTextNode(comment.userName));

  var commentFooter = document.createElement('footer');
  commentFooter.className = 'blockquote-footer';
  commentFooter.appendChild(document.createTextNode('Added by '));
  commentFooter.appendChild(commentUserLink);
  commentFooter.appendChild(document.createTextNode(' on '));
  commentFooter.appendChild(document.createTextNode(comment.when));

  var commentBlockquote = document.createElement('blockquote');
  commentBlockquote.className = 'blockquote';
  commentBlockquote.appendChild(commentBody);
  commentBlockquote.appendChild(commentFooter);

  return commentBlockquote;
};

Comments.displayComment = function(comment) {
  var newComment = Comments.builtComment(comment);
  var commentsList = document.getElementById('commentsList');
  commentsList.appendChild(newComment);
};

Comments.addNotice = function () {
  document.getElementById('notice').textContent = 'Comment was successfully created.';
};
