const mongoose = require('mongoose');
var Food = require('../models/food.js')


exports.createFood = (req, res) => {
    var food = new Food();
    food.title = req.body.title;
    food.type = req.body.type;
    food.body = req.body.body;
    food.like = 0
    food.share = 0;
    food.backdrop = req.body.backdrop;

    food.save((err, food) => {
        if(err){
           return  res.send(err);
        }
        res.json(food);
    })
}

exports.getFoodList = (req, res) => {
    var page = req.params.page;
    var skipItem = (page-1) * 10;
    Food.find((err, foods) => {
        if(err){
            return  res.send(err);
        }
        console.log(foods);
        res.json(foods);
    }).sort({posted: -1}).skip(skipItem).limit(10);
};

exports.deleteFood = (req, res) => {
    Food.findByIdAndRemove({_id: req.params.id}, (err, result) => {
        if(err){
            return  res.send(err);
        }
        res.json(result);

    });
}

exports.getFood = (req, res) => {
    Food.findById(req.params.id, (err, food) => {
        if(err){
            return res.send(err);
        }
        res.json(food);
    })
}

exports.updateFood = (req, res) => {
    Food.findByIdAndUpdate(req.params.id,req.body, (err, food) => {
        if (err){
            return res.send(err)
        }
        res.json(food);
    });
}

exports.searchFood = (req, res) => {
    var title = req.param('title');
    var type = req.param('type');
    if(type == "all" || type == ""){
        Food.find({"title": new RegExp(req.param('title'), 'i')}, (err, foods) => {
            if (err){
                return res.send(err)
            }
            console.log("all");
            res.json(foods);
        })
    }else {
        Food.find({"title": new RegExp(req.param('title'), 'i'), "type": req.param('type')}, (err, foods) => {
            if (err){
                return res.send(err)
            }
            console.log(foods);
            res.json(foods);
        })
    }
}