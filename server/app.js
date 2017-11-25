const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const port = 8080;
const app = express();
var ingredient=require('./routes/ingredientRouters')(router);
const authentication=require('./routes/authentication')(router);
const afterLogin=require('./routes/index')(router);
const session = require('express-session');
const passport = require('passport');
const social= require('./passport/passport')(app,passport);

var foodRouter = require('./routes/foodRoutes.js');  
var likeRouter = require('./routes/likeRoutes.js');
const cookieParser = require('cookie-parser');



/*
*  App configure
*/
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log("listening on port " + port);
    });
app.use(cookieParser());
foodRouter(app);
likeRouter(app);
/*
 *  Database configure
 */

 const dbConfig = require('./config/database.js');
 mongoose.Promise = global.Promise;
 mongoose.connect(dbConfig.url, {
    useMongoClient: true
}, (err) => {
    console.log('connected to database');
});
/**
 * Authentication
 */

function requireRole (role) {
    return function (req, res, next) {
        if (req.session.user && req.session.user.role === role) {
            next();
        } else {
            res.send(403);
        }
    }
}
app.use('/user',authentication);
app.use('/index',afterLogin);
app.use('/ingredient',requireRole("user"),ingredient);

app.get('*',(req,res)=>{
    res.redirect("/index")
})




