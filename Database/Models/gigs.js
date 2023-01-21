const mongoose = require('mongoose');

const GigSchema = new mongoose.Schema({
	event: String,
	location: String,
	date: String,
});

const Gigs = mongoose.model('Gigs', GigSchema);

module.exports = Gigs;
