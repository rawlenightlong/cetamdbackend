const mongoose = require('mongoose');

const GigSchema = new mongoose.Schema({
	event: {
		eventOwner: { type: String, unique: true, required: true },
		venueName: { type: String, required: true },
		eventName: { type: String, required: true },
	},
	location: {
		state: { type: String },
		city: { type: String },
		venue: { type: String },
	},
	date: {
		stringDateTime: {
			Date: {
				fullDate: { type: String },
				day: { type: String },
				month: { type: String },
				year: { type: String },
			},
			Time: {
				fullTime: { type: String },
				hours: { type: String },
				minute: { type: String },
			},
		},
		integerDateTime: {
			Date: {
				fullDate: { type: Number },
				day: { type: Number },
				month: { type: Number },
				year: { type: Number },
			},
			Time: {
				fullTime: { type: Number },
				hours: { type: Number },
				minute: { type: Number },
			},
		},
	},
});

const Gigs = mongoose.model('Gigs', GigSchema);

module.exports = Gigs;
