module.exports = function(app) {
    var Comment = require('../controllers/commentController');  
    app.route('/api/food/comment')
        .post(Comment.postComment);
    app.route('/api/food/comment/:id')
        .delete(Comment.deleteComment);
    app.route('/api/food/comments/:foodId/:page')
        .get(Comment.getComments);
}