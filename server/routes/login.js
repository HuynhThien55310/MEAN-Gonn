const User= require('../models/user');
var ejs = require('ejs');
module.exports=(router)=>{

   
    router.post('/login',(req,res)=>{
        if(!req.body.email){
            res.json({success:false,message:"You must provide email"});
        }
        else{
            if(!req.body.password){
                res.json({success:false,message:"You must provide password"});
            }
            else{
                User.findOne({email:req.body.email},(err,user)=>{
                    if (err) {res.status(500).send({message: err.message});}
                    if(user){
                        const validUser=user.comparePassword(req.body.password);
                        if(validUser){
                            req.session.user=req.body.email;
                          //  res.send({success:false,message:"Login OK"});
                          res.redirect('/index');
                        }else{
                            res.json({success:false,message:"Password or User name was wrong..."})
                        }
                    }
                    else{
                        res.json({success:false,message:"User not found"})
                    }
                });
            }
        }
    })
    .get('/login',(req,res)=>{
       ejs.renderFile('./views/login.ejs',{},(err,html)=>{
           res.send(html);
       })
    })
   
    return router;
};