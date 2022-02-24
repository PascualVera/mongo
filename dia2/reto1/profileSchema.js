const mongoose = require("mongoose")
const userSchema = require("./userSchema")

let ProfileSchema = new mongoose.Schema({
	name: {
		type: String,
		validate: [
			function (name) {
				return name.length < 22
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
})

ProfileSchema.pre("save", function (next) {
	if (this.verified == false) {
		console.log("solo vips")
	} else {
		console.log("new Profile added")
		next()
	}
})

module.exports = mongoose.model("profile", ProfileSchema, "profile")
