
const User=require('../controllers/userController');

module.exports=function(router){
    // router
    // .post('/register',(req,res)=>{
    //     User.resgisterUser(req,res);
    // })
    // .post('/updatepassword',(req,res)=>{
    //     User.updatePasswordUser(req,res);
    // })
    // .post('/updateinfo',(req,res)=>{
    //     User.updateInfoUser(req,res);
    // });

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