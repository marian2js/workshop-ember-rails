import Post from 'appkit/models/post';
import Comment from 'appkit/models/comment';

export default Ember.Route.extend({
  model: function(params) {
    var postId = parseInt(params.post_id);
    this.set('post_id', postId);
    return Post.findById(postId);
  }
});