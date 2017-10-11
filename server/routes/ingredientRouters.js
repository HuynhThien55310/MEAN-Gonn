var Ingredient = require('../controllers/ingredientController');  
module.exports = function(router) {
    router.post('/newingredient',(req,res)=>{
        Ingredient.createIngredient(req,res);
    })
    .get('/listingredient',(req,res)=>{
        Ingredient.getIngredientList(req,res);
    })
    
   return router;
}