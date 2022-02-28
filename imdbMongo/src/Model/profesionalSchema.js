const mongoose = require("mongoose")

const ProfesionalSchema = new mongoose.Schema({
	name: String,
	age: Number,
	genre: String,
	weight: Number,
	height: Number,
	hairColor: String,
	nationality: String,
	oscarNumber: Number,
	profesion: String,
	foto: String,
})

module.exports = mongoose.model("actor", ProfesionalSchema, "actor")
