const mongoose = require('mongoose');
var Comment = require('../models/comment.js');



exports.postComment = (req, res) => {
    var userId = req.body.userId;
    var foodId = req.body.foodId;
    var userAvatar = "";
    var userName = "";
    var text = req.body.text;
    ////get more user information
    

    // Save cmt
    var comment = new Comment();
    comment.foodId = foodId;
    comment.userId = userId;
    comment.userAvatar = userAvatar;
    comment.userName = "fname + lname";
    comment.text = text;
    comment.save((err, cmt) => {
        if(err){
            res.send(err);
        }
        res.json(cmt);
    });

}

exports.deleteComment = (req, res) => {
    Comment.findByIdAndRemove(req.params.id,(err, cmt) => {
        
    })
}