const mongoose = require("mongoose")

mongoose
	.connect("mongodb://localhost:27017/imdb", {
		useNewUrlParser: false,
		useUnifiedTopology: false,
	})
	.then(() => {
		console.log("database connected")
	})
	.catch((err) => {
		console.log(err)
	})
