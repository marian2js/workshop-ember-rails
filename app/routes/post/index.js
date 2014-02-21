export default Ember.Route.extend({
  model: function() {
    return this.modelFor('post');
  },
  setupController : function(controller, model){
    controller.set('model', model);
  }
});