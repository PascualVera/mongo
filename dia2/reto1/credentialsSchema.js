const mongoose = require("mongoose")

let CredentialsSchema = new mongoose.Schema({
	address: { type: String, select: true },
	phone: Number,
	email: String,
})
CredentialsSchema.pre("save", function (next) {
	if (this.phone.length < 9) {
		console.log("Introduce un telefono valido")
	} else {
		console.log("numero correcto")
		next()
	}
})
CredentialsSchema.pre("save", function (next) {
	if (this.email.includes("@gmail.com") || this.email.includes("@gmail.es")) {
		console.log("email correct")
		next()
	} else {
		console.log("email incorrect")
	}
})
module.exports = mongoose.model("credentials", CredentialsSchema, "credentials")
