const mongoose = require("mongoose")
const User = require("./userSchema")
const Photo = require("./photoSchema")
const Fakerator = require("fakerator")
const fakerator = Fakerator("de-DE")
mongoose.connect("mongodb://localhost:27017/codenotch", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})

let user = new User({
	login: "Spencer",
	password: fakerator.internet.password(8),
	name: fakerator.names.firstName(),
	role: "Hero",
	dateOfBirth: fakerator.date.past(50, "2022-02-02"),
	comments: fakerator.lorem.sentence(),
	verified: true,
	phone: fakerator.phone.number(),
	address: fakerator.address.streetName(),
	email: fakerator.internet.userName() + "@gmail.com",
	follow: "Sam",
})
let photo = new Photo({
	user: "Spencer",
	url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/GANDALF.jpg",
	title: "Photo2",
	description: "Another nice picture of Gandalf doing things a lot of things while being so nice",
})

//user.save(check)
//photo.save(check)
function check(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log("Saved")
	}
}

//Functions
function subirPhoto(usuario, link, titulo, descripcion) {
	let newPhoto = {
		user: usuario,
		url: link,
		title: titulo,
		description: descripcion,
	}
	newPhoto.save(check)
}
//Get Photo
function getPhoto(usuario) {
	Photo.find({ user: usuario }, function (err, photo) {
		if (err) {
			console.log(err)
		} else {
			console.log(photo)
		}
	})
}
//Follow
//
function follow(userOrig, userDest) {
	User.updateOne({ login: userOrig }, { follow: userDest }, check)
}
//Unfollow
function unfollow(userOrig, userDest) {
	User.findOne({ login: userOrig }, function (err, user) {
		if (err) {
			console.log(err)
		} else if (user.follow == userDest) {
			User.updateOne({ login: user.login }, { follow: "" }, check)
		} else {
			console.log(user)
			console.log("No sigue a ese usuario")
		}
	})
}
//Delete photo
function deletePhoto(usuario, titulo) {
	Photo.deleteOne({ user: usuario, title: titulo }, function (err) {
		if (err) {
			console.log(err)
		} else {
			console.log("photo deleted")
		}
	})
}
deletePhoto("Monkey", "Photo3")
//Delete all
function deleteAll(usuario) {
	Photo.deleteMany({ user: usuario }, function (err, data) {
		if (err) {
			console.log(err)
		} else {
			console.log("All photos deleted")
			console.log(data)
		}
	})
}
deleteAll("Markus")
