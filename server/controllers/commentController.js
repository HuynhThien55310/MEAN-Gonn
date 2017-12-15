const mongoose = require('mongoose');
var Comment = require('../models/comment.js');
var User= require('../models/user');
var Food = require('../models/food');

exports.postComment = (req, res) => {
    var comment = new Comment();
    comment.foodId = req.body.foodId;
    comment.userId = req.body.userId;
    comment.text = req.body.text;
    User.findById(req.body.userId,(err, user) => {
        if(err){
            return res.json({success: false, err: err});
        }
        console.log(user);
        comment.userAvatar = user.avatar;
        comment.userName = user.firstname + " " + user.lastname;
        Food.findById(req.body.foodId, (err, food) => {
            food.comment = food.comment + 1;
            food.save();
        })
        comment.save((err, cmt) => {
            if(err){
                return res.json({success: false, err: err});
            }
            return res.json({success: true, cmt: cmt});
        });
    });
}

exports.deleteComment = (req, res) => {
    Comment.findByIdAndRemove(req.params.id,(err, cmt) => {
        if(err){
            return res.json({success: false, err: err});
        }
        return res.json({success: true, cmt: cmt});
    })
}

exports.getComments = (req, res) => {
    var page = req.params.page;
    var skipItem = (page-1) * 12;
    Comment.find({foodId: req.params.foodId}, (err, cmts) => {
        if(err){
            return res.json({success: false, err: err});
        }
        if (cmts.length < 12){
            res.json({success: true, cmts: cmts, isEnd: true, size: cmts.length});
        } else {
            res.json({success: true, cmts: cmts, isEnd: false, size: cmts.length});
        }
    }).sort({_id: -1}).skip(skipItem).limit(12);
}