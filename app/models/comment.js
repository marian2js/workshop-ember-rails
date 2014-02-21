var Comment = Ember.Object.extend({
  id_post: 0,
  author: '',
  body: ''
});

Comment.findByPostId = function (postId) {
  return Ember.$.getJSON('/api/v1/post/' + postId + '/comments');
};

export default Comment;