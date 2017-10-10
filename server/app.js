const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const port = 8080;
const app = express();
var foodRouter = require('./routes/foodRoutes.js');  
var likeRouter = require('./routes/likeRoutes.js');

/*
*  App configure
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log("listening on port " + port);
    });

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



