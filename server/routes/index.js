var ejs=require('ejs');
module.exports=(router)=>{
    router.get('/',(req,res)=>{
        if(!req.session.user){
            return res.redirect('/user/login');
        }
        else{
            console.log("IN index "+ req.session.user);
            ejs.renderFile('./views/index.ejs',{},(err,html)=>{
                res.send(html);
            })
        }
    })
    .post('/',(req,res)=>{
        req.session.destroy();
        return res.redirect('/user/login');
    });
    return router;
}