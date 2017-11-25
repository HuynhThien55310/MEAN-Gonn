
const User=require('../controllers/userController');

module.exports=function(router){
  
    router.route('/register')
    .post(User.resgisterUser);

    router.route('/updatepassword')
    .post(User.updatePasswordUser);

    router.route('/updateinfo')
    .post(User.updateInfoUser);

    router.route('/login')
    .get(User.getLoginUser)
    .post(User.postLoginUser)
    

   return router;
}