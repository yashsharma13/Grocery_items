import express from 'express';
import bodyParser from 'body-parser';
const app=express();
import indexRoute from './Routes/indexRoute.js';
import featuresRoute from './Routes/featuresRoute.js';
import categoriesRoute from './Routes/categoriesRoute.js';
import contactRoute from './Routes/contactRoute.js';
import productRoute from './Routes/productRoute.js';

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('lib'));

//to extract data from request(post,put,delete,patch)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// to install ejs module command is      npm install --save ejs
// configure ejs  file

app.set("view engine","ejs");
app.set("views","./views");


//application level routing

app.use("/",indexRoute);
app.use("/features",featuresRoute);
app.use("/categories",categoriesRoute);
app.use("/contact",contactRoute);
app.use("/product",productRoute);
app.listen(8989);