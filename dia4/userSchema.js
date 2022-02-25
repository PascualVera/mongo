const mongoose = require("mongoose")

let UserSchema = new mongoose.Schema({
	//USER
	login: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
		select: true,
		validate: [
			function (password) {
				return password.length >= 8
			},
			"Password muy corto",
		],
	},
	//PROFILE
	name: {
		type: String,
		validate: [
			function (name) {
				return name.length < 40
			},
			"Nombre demasiado largo",
		],
	},

	role: {
		type: String,
		enum: ["Hero", "Villian"],
	},
	dateOfBirth: Date,
	comments: String,
	verified: Boolean,
	//CREDENTIALS
	address: { type: String, select: true },
	phone: String,
	email: String,
	follow: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
	photo: [{ type: mongoose.Schema.Types.ObjectId, ref: "photo" }],
})
module.exports = mongoose.model("user", UserSchema)
