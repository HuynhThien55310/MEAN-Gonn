
const User=require('../controllers/userController');

module.exports=function(router){
    router
    .post('/register',(req,res)=>{
        User.resgisterUser(req,res);
    })
    .get('/login',(req,res)=>{
        User.getLoginUser(req,res);
    })
    .post('/login',(req,res)=>{
        User.postLoginUser(req,res);
    })
    .post('/updatepassword',(req,res)=>{
        User.updatePasswordUser(req,res);
    })
    
   return router;
}