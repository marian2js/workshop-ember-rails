import Post from 'appkit/models/post';

export default Ember.Route.extend({
  model: function () {
    return Post.getAll();
  }
});
