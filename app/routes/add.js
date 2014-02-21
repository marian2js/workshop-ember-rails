import Post from 'appkit/models/post';

export default Ember.Route.extend({

    model: function(params) {
        return Post.create();
    }
});