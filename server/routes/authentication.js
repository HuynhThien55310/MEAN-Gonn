const User= require('../models/user');

module.exports=(router)=>{

    router.post('/resgister',(req,res)=>{
        if(!req.body.email){
            res.send({success:false,message:"You must provide an email"});
        }else{
            if(!req.body.firstname){
                res.send({success:false,message:"You must provide first name"});
            }
            else{
                if(!req.body.lastname)
                {
                    res.send({success:false,message:"You must provide last name"});
                }
                else{
                    if(!req.body.password){
                        res.send({success:false,message:"You must provide an password"});
                    }
                    else{

                        let user=new User({
                            email:req.body.email.toLowerCase(),
                            firstname:req.body.firstname,
                            lastname:req.body.lastname,
                            password:req.body.password
                        });
                        user.save((err)=>{
                            if(err)
                            {
                                if(err.code===11000){
                                    res.send({success:false,message:'Username or e-mail already exists'})
                                }
                                else{
                                    if(err.errors){
                                        if(err.errors.email){
                                            res.json({success:false,message:err.errors.email.message});
                                        }
                                        else{
                                            if(err.errors.firstname)
                                            {
                                                res.json({success:false,message:err.errors.firstname.message});
                                            }
                                            else{
                                                if(err.errors.lastname){
                                                    res.json({success:false,message:err.errors.lastname.message});
                                                }
                                                else{
                                                    if(err.errors.password){
                                                        res.json({success:false,message:err.errors.password.message});
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else{
                                res.json({success:true,message:'User saved'});
                            }
                            
                        });
                    }
                }
            }
        }
    });
    return router;
}