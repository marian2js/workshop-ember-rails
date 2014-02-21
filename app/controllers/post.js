var PostController = Ember.ObjectController.extend({
  author: '',
  body: '',
  postId: '',
  postComment: function () {
    var comment = {
      author: this.author,
      body: this.body
    };
    var model = this.get('model');
    $.ajax({
      type: 'POST',
      dataType: 'JSON',
      url: '/api/v1/post/' + this.postId + '/comments',
      data: JSON.stringify(comment)
    });
  }
});

export default PostController;