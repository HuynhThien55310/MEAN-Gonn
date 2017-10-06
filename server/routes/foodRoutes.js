module.exports = function(app) {
    var Food = require('../controllers/foodController');  
    app.route('/food')
        .get(Food.getAllFood)
        .post(Food.createFood);
    
    app.route('/food/:id')
        .get(Food.getFood)
        .put(Food.updateFood)
        .delete(Food.deleteFood);

    
}