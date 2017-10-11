const User= require('../models/user');
module.exports=(router)=>{

    router.post('/updatepassword',(req,res)=>{
        if(req.session.user){
            if(!req.body.oldpassword){
                res.json({success:false,message:"you must provide old password"});
            }
            else{
                if(!req.body.newpassword){
                    res.json({success:false,message:"You must provide new password'"})

                }else{
                    if(!req.body.confirmpassword){
                        res.json({success:false,message:"You must confirm password"});
                    }
                    else{
                       if(!(req.body.newpassword===req.body.confirmpassword)){
                           res.json({success:false,message:"Confirm password is wrong"});
                       }
                       else{
                        
                        User.findOne({email:req.session.user},(err,user)=>{
                            if (err) {res.status(500).send({message: err.message});}
                            if(user){
                                console.log(req.body.oldpassword);
                                 const validUser=user.comparePassword(req.body.oldpassword);
                                 console.log(validUser);
                                if(validUser){
                                   // {$set:{password:req.body.confirmpassword}}
                                    user.update({email:req.session.user},{'password':req.body.confirmpassword
                                    ,'email':req.session.email},(err,done)=>{
                                        if(err){
                                            res.send({success:false,message:"Something wrong"});
                                        }
                                        res.send({success:true,message:"OK"});
                                    });
                                }
                                else{
                                    res.json({success:false,message:"Old password is wrong..."})
                                }
                            }
                        });
                       }
                    }
                }
            }
        }
        else{
            res.redirect('/index');
        }
    });

    return router;
}