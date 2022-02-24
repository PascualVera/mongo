const mongoose = require("mongoose")

const PhotoSchema = new mongoose.Schema({
	user: String,
	url: String,
	title: String,
	description: String,
})

module.exports = mongoose.model("photo", PhotoSchema, "photo")
