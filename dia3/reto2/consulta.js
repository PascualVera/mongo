const mongoose = require("mongoose")
const User = require("./userSchema")
const Photo = require("./photoSchema")
const Fakerator = require("fakerator")
const autorSchema = require("../reto1/ManyToMany/autorSchema")
const photoSchema = require("./photoSchema")
const userSchema = require("./userSchema")
const fakerator = Fakerator("de-DE")
mongoose.connect("mongodb://localhost:27017/arboles", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})
//
function check(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log("Saved")
	}
}
// let coleccion = []
// let user = new User({
// 	login: "MasterDog",
// 	password: fakerator.internet.password(8),
// 	name: fakerator.names.firstName(),
// 	role: "Hero",
// 	dateOfBirth: fakerator.date.past(50, "2022-02-02"),
// 	comments: fakerator.lorem.sentence(),
// 	verified: true,
// 	phone: fakerator.phone.number(),
// 	address: fakerator.address.streetName(),
// 	email: fakerator.internet.userName() + "@gmail.com",
// 	follow: [],
// 	photo: [],
// })

// user
// 	.save()
// 	.then((user) => {
// 		console.log("new user added")
// 		let photo = new Photo({
// 			user: user._id,
// 			url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/GANDALF.jpg",
// 			title: "Photo4",
// 			description:
// 				"Another nice picture of Gandalf doing things a lot of things while being so nice",
// 		})
// 		return photo.save()
// 	})
// 	.then((photo) => {
// 		console.log("new photo added")
// 	})
// 	.catch((err) => {
// 		console.log(err)
// 	})
// let idPhotos = []
// Photo.findOne({ title: "Photo2" })
// 	.then((photo) => {
// 		idPhotos.push(photo._id)
// 		return Photo.findOne({ title: "Photo3" })
// 	})
// 	.then((photo) => {
// 		idPhotos.push(photo._id)
// 		return Photo.findOne({ title: "Photo4" })
// 	})
// 	.then((photo) => {
// 		idPhotos.push(photo._id)
// 		console.log(idPhotos)
// 		User.updateOne({ login: "Spencer" }, { photo: idPhotos }, check)
// 	})
// 	.catch((err) => {
// 		console.log(err)
// 	})

function timeline(user) {
	User.findOne({ login: user }, function (err, user) {
		for (const id of user.follow) {
			User.findOne({ _id: id })
				.populate("photo")
				.exec(function (err, user) {
					if (err) {
						console.log(err)
					} else {
						console.log(`${user.login}- ${user.photo}`)
					}
				})
		}
	})
}
timeline("Mariano")
