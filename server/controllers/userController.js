const mongoose = require('mongoose');
const User= require('../models/user');
var ejs=require('ejs');

exports.resgisterUser=(req,res)=>{
    if(!req.body.email)
    {
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
}

exports.getLoginUser=(req,res)=>{
    ejs.renderFile('./views/login.ejs',{},(err,html)=>{
        res.send(html);
    })
}
exports.postLoginUser=(req,res)=>{
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
}
exports.updatePasswordUser=(req,res)=>{
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
                                user.update({},{'password':req.body.confirmpassword},(err,done)=>{
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
}

exports.updateInfoUser=(req,res)=>{
    User.findOneAndUpdate({'email':req.body.email},
    {$set:{firstname:req.body.firstname,lastname:req.body.lastname,gender:req.body.gender}},
    {new:true},
    (err,user)=>{
        if(err) res.send(err);
        res.json(user);
    });
}

