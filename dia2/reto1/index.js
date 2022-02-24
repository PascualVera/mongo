let mongoose = require("mongoose")
let User = require("./userSchema")
let Profile = require("./profileSchema")
let Credentials = require("./credentialsSchema")

mongoose.connect("mongodb://localhost:27017/Codenotch", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})

let profile = new Profile({
	name: "Gandalf",
	role: "Hero",
	dateOfBirth: "1990-02-11",
	verified: true,
	comments: "Ta cabrona esa rola",
})
profile.save(check)
let user = new User({
	login: "WhiteFeet88",
	password: "NoName22",
})
user.save(check)
let credentials = new Credentials({
	address: "Calle martiguerias de velen 435",
	phone: 622576242,
	email: "pokemonlover@gmail.com",
})
//credentials.save(check)

function check(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log("Saved")
	}
}
