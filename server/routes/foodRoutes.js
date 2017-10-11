module.exports = function(app) {
    var Food = require('../controllers/foodController');  
    app.route('/food')
        .post(Food.createFood);
    
    app.route('/food/:id')
        .get(Food.getFood)
        .put(Food.updateFood)
        .delete(Food.deleteFood);

    app.route('/food/page/:page')
        .get(Food.getFoodList);

    app.route('/search/food')
        .get(Food.searchFood);
}