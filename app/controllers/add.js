var AddController = Ember.ObjectController.extend({
    submitAction: function() {
        var model = this.get('model');
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: '/api/posts',
            data: JSON.stringify(model)
        });
    }
});

export default AddController;