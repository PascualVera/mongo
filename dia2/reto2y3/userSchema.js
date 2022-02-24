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
	follow: String,
})

UserSchema.pre("save", function (next) {
	if (this.password === "contraseña") {
		console.log("Haz el favor")
	} else {
		console.log("Datos correctos")
		next()
	}
})
UserSchema.pre("save", function (next) {
	if (this.email.includes("@gmail.com") || this.email.includes("@gmail.es")) {
		console.log("email correct")
		next()
	} else {
		console.log("email incorrect")
	}
})
UserSchema.pre("save", function (next) {
	if (this.verified == false) {
		console.log("solo vips")
	} else {
		console.log("new Profile added")
		next()
	}
})
module.exports = mongoose.model("user", UserSchema, "user")
