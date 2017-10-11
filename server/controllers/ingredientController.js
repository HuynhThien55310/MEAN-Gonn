const mongoose = require('mongoose');
var Ingredient = require('../models/ingredient.js');
var isNumber = require("isnumber");

exports.createIngredient = (req, res) => {

    if (req.session.user) {
        if (!req.body.name) {
            res.send({ success: false, message: "You must provide ingredient name" });
        } else {
            if (!req.body.description) {
                res.send({ success: false, message: "You must provide ingredient description" });
            }
            else {
                if (!req.body.price) {
                    res.send({ success: false, message: "You must provide ingredient price" });
                }
                else {
                    if (!isNumber(req.body.price)) {
                        res.json({ success: false, message: "Price must be a number" });
                    }
                    else {
                        var currentDay = new Date();
                        let ingredient = new Ingredient({
                            name: req.body.name,
                            description: req.body.description,
                            price: req.body.price,
                            date: currentDay
                        });
                        ingredient.save((err, ingredient) => {
                            if (err) res.send(err);
                            res.json(ingredient)
                        });
                    }

                }
            }
        }
    }
    else {
        res.send("Login chua ? ")
    }

};

exports.getIngredientList = (req, res) => {
    Ingredient.find((err, ingredients) => {
        if (err) { return res.send(err) }
        res.json(ingredients);
    });
};


exports.findOneIngredientBy = (req, res) => {
    Ingredient.find((err, ingredients) => {
        if (err) { return res.send(err) }
        res.json(ingredients);
    });
};

