//-----------------------////////
// Modules
//-----------------------////////
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
require('./Database/config')();
require('dotenv').config();
const authRouter = require("./App/controllers/user") 
const auth = require("./App/Auth/authMiddleware")
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
//-----------------------////////
// Route Handlers
//-----------------------////////
app.use('/', landingPage);
app.use('/api/v1/', landingPage);
app.use('/gigs', gigsPage);
app.use("/auth", authRouter);

// Auth Route

app.get("/", auth, (req,res)=> {
    res.json(req.payload)
})

//-----------------------////////
// The app is always listening
//-----------------------////////
app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
