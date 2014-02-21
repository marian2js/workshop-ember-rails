import Post from 'appkit/models/post';

export default Ember.Route.extend({

    model: function(params) {
        return fakePosts[parseInt(params.post_id) - 1];
    }
});

var fakePosts = [{
    id: 1,
    title: 'Question 1',
    content: 'Content 1'
}, {
    id: 2,
    title: 'Question 2',
    content: 'Content 2'
}, {
    id: 3,
    title: 'Question 3',
    content: 'Content 3'
}, {
    id: 4,
    title: 'Question 4',
    content: 'Content 4'
}, {
    id: 5,
    title: 'Question 5',
    content: 'Content 5'
}];
