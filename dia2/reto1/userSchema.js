const mongoose = require("mongoose")

let UserSchema = new mongoose.Schema({
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
})

UserSchema.pre("save", function (next) {
	if (this.password === "contraseña") {
		console.log("Haz el favor")
	} else {
		console.log("Datos correctos")
		next()
	}
})

module.exports = mongoose.model("user", UserSchema, "user")
