import Comment from 'appkit/models/comment';

var Post = Ember.Object.extend({
  id: 0,
  title: '',
  question: '',
  comments: []
});

Post.getAll = function () {
  return Ember.$.getJSON('/api/v1/posts');
};

Post.findById = function (id) {
  return Ember.$.getJSON('/api/v1/post/' + id).then(function(post) {
    return Comment.findByPostId(id).then(function (comments) {
      post.comments = comments;
      return post;
    });
  });
};

export default Post;