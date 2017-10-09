const mongoose = require('mongoose');
var Food = require('../models/food.js')


exports.createFood = (req, res) => {
    var food = new Food();
    food.title = req.body.title;
    food.type = req.body.type;
    food.body = req.body.body;
    food.date = new Date().toLocaleString();
    food.like = 0
    food.share = 0;
    food.backdrop = req.body.backdrop;

    food.save((err, food) => {
        if(err){
            res.send(err);
        }
        res.json(food);
    })
}

exports.getFoodList = (req, res) => {
    var page = req.params.page;
    var skipItem = (page-1) * 10;
    Food.find((err, foods) => {
        if(err){
            res.send(err);
        }
        console.log(foods);
        res.json(foods);
    }).sort({date: -1}).skip(skipItem).limit(10);
};

exports.deleteFood = (req, res) => {
    // Delete record in food collection
    Food.findByIdAndRemove({_id: req.params.id}, (err, result) => {
        if(err){
            res.send(err);
        }
        res.json(result);
    });

    // Delete cmt of food

}

exports.getFood = (req, res) => {
    Food.findById(req.params.id, (err, food) => {
        if(err){
            res.send(err);
        }
        res.json(food);
    })
}

exports.updateFood = (req, res) => {
    Food.findByIdAndUpdate(req.params.id,req.body, (err, food) => {
        if (err){
            res.send(err)
        }
        res.json(food);
    });
}

