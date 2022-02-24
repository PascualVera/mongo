const mongoose = require("mongoose")

let PhotoSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
	url: String,
	title: String,
	description: String,
})

module.exports = mongoose.model("photo", PhotoSchema)
