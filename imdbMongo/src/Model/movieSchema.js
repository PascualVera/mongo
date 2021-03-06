const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
	trailer: String,
	dateOfAddition: Date,
	title: String,
	releaseYear: Number,
	actors: [],
	nationality: String,
	director: [],
	writer: [],
	language: String,
	platform: String,
	producer: String,
	genre: String,
})
module.exports = mongoose.model("movie", MovieSchema)
