var ejs=require('ejs');
var jwt = require('jsonwebtoken');
module.exports=(router)=>{
    router.get('/',(req,res)=>{
        jwt.verify(req.token, 'hiimezio', function(err, data) {
            if (err) {
              res.sendStatus(403);
            } else {
              res.json({
                description: 'Protected information. Congrats!',
                data:data
              });
            }
          });
    })
    // .post('/',(req,res)=>{
    //     req.session.destroy();
    //     return res.redirect('/user/login');
    // });
    return router;
}