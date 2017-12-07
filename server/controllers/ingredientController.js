const mongoose = require("mongoose");
var Ingredient = require("../models/ingredient.js");
var isNumber = require("isnumber");

exports.createIngredient = (req, res) => {
  // if (req.session.user) {
  if (!req.body.name) {
    res.send({ success: false, message: "Tên nguyên liệu không được trống" });
  } else {
    if (!req.body.description) {
      res.send({
        success: false,
        message: "Nội dung không được trống"
      });
    } else {
      if (!req.body.price) {
        res.send({
          success: false,
          message: "Giá nguyên liệu không được trống"
        });
      } else {
        if (!isNumber(req.body.price)) {
          res.json({ success: false, message: "Giá nguyên liệu phải là số" });
        } else if (!req.body.unit) {
          res.json({ success: false, message: "Đơn vị không được trống" });
        } else {
          var currentDay = new Date();
          let ingredient = new Ingredient({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            date: currentDay,
            unit: req.body.unit
          });
          ingredient.save((err, ingredient) => {
            if (err) res.send(err);
            res.json(ingredient);
          });
        }
      }
    }
  }
  // }
  // else {
  //     res.send("Login ? ")
  // }
};

exports.getIngredientList = (req, res) => {
  Ingredient.find((err, ingredients) => {
    if (err) {
      return res.send(err);
    }
    res.json(ingredients);
  });
};

exports.getIngredientByName = (req, res) => {
  var searchIng = req.param("name");
  Ingredient.find({ name: new RegExp(searchIng, "i") }, (err, ingredients) => {
    if (err) res.send(err);
    res.json(ingredients);
  });
};

exports.getIngredientByID = (req, res) => {
  // console.log(req.params.id);
  Ingredient.findById(req.params.id, (err, ingredient) => {
    if (err) res.send(err);
    res.json(ingredient);
  });
};

exports.delIngredient = (req, res) => {
  Ingredient.findByIdAndRemove(req.params.id, (err, done) => {
    if (err) {
      res.send("wrong");
    }
    res.status(200).send({ success: true, message: "Delete clearly" });
  });
};
exports.updateIngredient = (req, res) => {
  Ingredient.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        unit: req.body.unit
      }
    },
    { new: true },
    (err, ingredient) => {
      if (err) res.send(err);
      res.json(ingredient);
    }
  );
};
