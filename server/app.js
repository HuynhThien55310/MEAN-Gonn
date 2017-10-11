const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const port = 8080;
const app = express();
var foodRouter = require('./routes/foodRoutes.js');  
const authentication=require('./routes/authentication')(router);
const userLogin=require('./routes/login')(router);
const afterLogin=require('./routes/index')(router);
const session = require('express-session');
const passport = require('passport');
const social= require('./passport/passport')(app,passport);
const updatepassword=require('./routes/changePassword')(router);


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

foodRouter(app);

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
app.use('/user',authentication);
app.use('/user',userLogin);
app.use('/index',userLogin);
app.use('/update',updatepassword);

app.get('*',(req,res)=>{
    res.send("OK")
})




