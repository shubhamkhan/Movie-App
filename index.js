//ENV file setup
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});


//Express setup
const express = require('express');
const app = express();

// Cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());


//JSON parse
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Server listening
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server URL: http://localhost:${port}`)
});


//MongoDB connection
const connectdb = require('./api/services/connection');
connectdb();


//Route setup
const route = require('./api/services/routes');
app.use('/', route);