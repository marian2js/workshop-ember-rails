module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api/v1', function() {

    // [GET] /api/posts
    server.get('/posts', function (req, res) {
      res.send(fakePosts);
    });

    // [GET] /api/post/:id
    server.get('/post/:id', function(req, res) {
      var id = parseInt(req.params.id);
      var post = fakePosts[id - 1];
      res.send(post);
    });

    // [GET] /api/post/:id/comments
    server.get('/post/:id/comments', function(req, res) {
      var id = parseInt(req.params.id);
      var comments = [];
      fakeComments.forEach(function (comment) {
        if (comment.id_post === id) {
          comments.push(comment);
        }
      });
      res.send(comments);
    });

  });

};

var fakePosts = [{
  id: 1,
  title: 'Title 1',
  question: 'Question 1'
}, {
  id: 2,
  title: 'Title 2',
  question: 'Question 2'
}, {
  id: 3,
  title: 'Title 3',
  question: 'Question 3'
}, {
  id: 4,
  title: 'Title 4',
  question: 'Question 4'
}, {
  id: 5,
  title: 'Title 5',
  question: 'Question 5'
}];


var fakeComments = [{
  id_post: 1,
  author: 'author 1',
  body: 'body 1'
}, {
  id_post: 1,
  author: 'author 2',
  body: 'body 2'
}, {
  id_post: 2,
  author: 'author 1',
  body: 'body 1'
}, {
  id_post: 2,
  author: 'author 2',
  body: 'body 2'
}, {
  id_post: 3,
  author: 'author 1',
  body: 'body 1'
}];
