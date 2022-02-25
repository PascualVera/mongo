const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const Photo = require("../photoSchema")
const User = require("../userSchema")
const userSchema = require("../photoSchema")
const { request, response } = require("express")
const res = require("express/lib/response")
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/arboles", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})

app.get("/photos", (request, response) => {
	let id = request.query.id
	if (id == null) {
		response.send(404, "User not found")
	} else {
		User.findOne({ login: id })
			.populate("photo")
			.exec(function (err, user) {
				if (err) {
					console.log(err)
				} else {
					console.log(user)
					response.send(user.photo)
				}
			})
	}
})
app.post("/photos", (request, response) => {
	let photo = new Photo({
		user: request.body.user,
		url: request.body.url,
		title: request.body.title,
		description: request.body.description,
	})
	photo
		.save()
		.then((photo) => {
			console.log("New photo added")
			response.send(photo)
		})
		.catch((error) => {
			console.log(error)
		})
})
// app.delete("/photos", (request, response) => {
// 	let title = request.body.title
// 	let user = request.body.user

// 	Photo.deleteOne({ user: user, title: title }, function (err) {
// 		if (err) {
// 			console.log(err)
// 		} else {
// 			console.log("photo deleted")
// 			response.send(200, "Photo deleted")
// 		}
// 	})
// })
app.delete("/photos", (request, response) => {
	let user = request.query.id
	Photo.deleteMany({ user: user }, function (err, data) {
		if (err) {
			console.log(err)
		} else {
			console.log("All photos deleted")
			response.send(data)
		}
	})
})
// app.put("/follow", (request, response) => {
// 	let origen = request.body.origen
// 	let destino = request.body.destino
// 	let followList
// 	User.findOne({ login: origen })
// 		.then((user) => {
// 			followList = user.follow
// 			return User.findOne({ _id: destino })
// 		})
// 		.then((user) => {
// 			followList.push(user._id)
// 			return User.updateOne({ login: origen }, { follow: followList })
// 		})
// 		.then((user) => {
// 			console.log("Usuario modificado")
// 			response.send(user)
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})
// })
app.put("/unfollow", (request, response) => {
	let origen = request.body.origen
	let destino = request.body.destino

	User.updateOne({ login: origen }, { $pull: { follow: destino } })
		.then((user) => {
			console.log("user edited")
			response.send(200, "User edited")
		})
		.catch((err) => {
			console.log(err)
		})
})
app.listen(3000, () => {
	console.log("connected")
})
// app.put("/unfollow", (request, response) => {
// 	let origen = request.body.origen
// 	let destino = request.body.destino
// 	let followList
// 	User.findOne({ login: origen })
// 		.then((user) => {
// 			followList = user.follow
// 			console.log(user.follow)
// 			return User.findOne({ _id: destino })
// 		})

///////Este es el filter que no se por que no funciona
// 		.then((user) => {
// 			let newFollowList = followList.filter((val) => {
// 				console.log(val)
// 				return val !== user._id
// 			})
// 			console.log(newFollowList)
// 			return User.updateOne({ login: origen }, { $pull: { follow: destino } })
// 		})
// 		.then((user) => {
// 			console.log("Usuario modificado")
// 			response.send(user)
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})
