var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('add');
  this.route('post', { path: '/post/:post_id' });
});

export default Router;