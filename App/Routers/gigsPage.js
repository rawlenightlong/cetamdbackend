//-----------------------////////
// Modules
//-----------------------////////
const express = require('express');
const Gigs = require('../../Database/Models/gigs');
//-----------------------////////
// Routers
//-----------------------////////
const router = express.Router();

//-----------------------////////
// Middleware
//-----------------------////////
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//-----------------------////////
// All Gigs Get Route
//-----------------------////////
router.get('/', async (req, res, next) => {
	try {
		console.log('get triggered');
		res.json(await Gigs.find({}));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the get route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Post Route
//-----------------------////////

router.post('/', async (req, res, next) => {
	try {
		console.log('post triggered');
		res.json(await Gigs.create(req.body));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the post route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Put Route
//-----------------------////////
router.put('/:id', async (req, res, next) => {
	try {
		res.json(
			await Gigs.findByIdAndUpdate(req.params.id, req.body, { new: true })
		);
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the put route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Delete Route
//-----------------------////////
router.delete('/:id', async (req, res, next) => {
	try {
		res.json(await Gigs.findByIdAndDelete(req.params.id));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js /////\nSpecifically the delete route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});
//-----------------------////////
// Single Gig Get Route
//-----------------------////////
router.get('/:id', async (req, res, next) => {
	try {
		res.json(await Gigs.findById(req.params.id));
	} catch (err) {
		console.log(
			'///// error is located at gigsPage.js //////\nSpecifically the 2nd get route\n/////The error is: ' +
				err.message +
				' /////'
		);
	}
});

module.exports = router;
