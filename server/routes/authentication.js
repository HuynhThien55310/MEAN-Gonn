
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

    router.route('/activate/:token').get(User.activeUser);

    router.route('/resetpassword').put(User.resetPassword);
    router.route('/resetpassword/:token').get(User.resetPasswordGet);
    

   return router;
}