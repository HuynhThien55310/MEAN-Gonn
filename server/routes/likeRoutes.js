module.exports = function(app) {
    var Like = require('../controllers/likeController');  
    app.route('/like')
        .post(Like.hitLike);
}