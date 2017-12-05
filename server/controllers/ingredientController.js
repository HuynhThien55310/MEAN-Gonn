const mongoose = require('mongoose');
var Ingredient = require('../models/ingredient.js');
var isNumber = require("isnumber");
var AuthUtils = require('../Utilities/AuthenticationUtil');
var jwt=require('jsonwebtoken')

exports.createIngredient = (req, res) => {
    if (!AuthUtils.verifyToken) {
        res.sendStatus(403);
    }
    
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
 

};

exports.getIngredientList = (req, res) => {
   // console.log("token"+ req.headers["authorization"])
    if (!AuthUtils.verifyToken) {
        res.sendStatus(403);
    }
    console.log(jwt.verify(req.token, 'hiimezio'))
    Ingredient.find((err, ingredients) => {
        if (err) { return res.send(err) }
        res.json(ingredients);
    });
};


exports.getIngredientByName = (req, res) => {
    if (!AuthUtils.verifyToken) {
        res.sendStatus(403);
    }
   
    var searchIng = req.param('name');
    Ingredient.find({ "name": new RegExp(searchIng, 'i') }, (err, ingredients) => {
        if (err) res.send(err);
        res.json(ingredients);
    });
}

exports.getIngredientByID = (req, res) => {
    if (!AuthUtils.verifyToken) {
        res.sendStatus(403);
    }
    // console.log(req.params.id);
    Ingredient.findById(req.params.id, (err, ingredient) => {
        if (err) res.send(err);
        res.json(ingredient);
    });
}

exports.delIngredient = (req, res) => {
    if (!AuthUtils.verifyToken) {
        res.sendStatus(403);
    }
    Ingredient.findByIdAndRemove(req.params.id, (err, done) => {
        if (err) {
            res.send("wrong");
        }
        res.status(200).send({ success: true, message: "Delete clearly" });
    })
}
exports.updateIngredient = (req, res) => {
    if (!AuthUtils.verifyToken) {
        res.sendStatus(403);
    }
    Ingredient.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            description: req.body.description, price: req.body.price
        }
    }, { new: true },
        (err, ingredient) => {
            if (err) res.send(err);
            res.json(ingredient);
        });
}

