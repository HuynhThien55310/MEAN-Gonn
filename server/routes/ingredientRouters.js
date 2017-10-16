var Ingredient = require('../controllers/ingredientController');  
module.exports = function(router)
 {
    router.route('/newingredient').get(Ingredient.createIngredient);
    router.route('/listingredient').get(Ingredient.getIngredientList);
    router.route('/getbyname').get(Ingredient.getIngredientByName);

    router.route('/find/:id')
    .get(Ingredient.getIngredientByID)
    .delete(Ingredient.delIngredient)
    .put(Ingredient.updateIngredient)



   return router;
}