module.exports = function(app) {
    var Comment = require('../controllers/commentController');  
    app.route('/food/post')
        .post(Comment.postComment);
    app.route('/food/post/:id')
        .delete(Comment.deleteComment);
}