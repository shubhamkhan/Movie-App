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
const port = process.env.PORT || 8000;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log(`Server URL: http://localhost:${port}`)
});


//MongoDB connection
const connectdb = require('./api/services/connection');
connectdb();


//Route setup
const route = require('./api/services/routes');
app.use('/', route);