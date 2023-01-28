//-----------------------////////
// Modules
//-----------------------////////
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
require('./Database/config')();
require('dotenv').config();
const router = require('./App/Routers/gigsPage');
const app = express();
//-----------------------////////
// Environment Variables
//-----------------------////////
const { PORT, DB_STRING } = process.env;

//-----------------------////////
// Routes
//-----------------------////////
const landingPage = require('./App/Routers/landingPage');
const gigsPage = require('./App/Routers/gigsPage');

//-----------------------////////
// Middleware
//-----------------------////////

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//-----------------------////////
// Route Handlers
//-----------------------////////
app.use('/', landingPage);
app.use('/api/v1/', landingPage);
app.use('/gigs', gigsPage);

// Auth Route

// app.get("/", auth, (req,res)=> {
//     res.json(req.payload)
// })

//-----------------------////////
// The app is always listening
//-----------------------////////
app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
