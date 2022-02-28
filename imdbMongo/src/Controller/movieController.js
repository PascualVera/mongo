const { response, request } = require("../app")
const Movie = require("../Model/movieSchema")

const getMovie = async (request, response, next) => {
	let id = request.query.id
	if (id == null) {
		try {
			let movie = await Movie.find()
			response.send(movie)
		} catch (err) {
			next(err)
		}
	} else {
		try {
			let movie = await Movie.find({ _id: id })
			response.send(movie)
		} catch (err) {
			next(err)
		}
	}
}
const getActor = async (request, response, next) => {
	let id = request.query.id
	try {
		let movie = await Movie.findOne({ _id: id })
		response.send(movie.actors)
	} catch (err) {
		next(err)
	}
}
const getDirector = async (request, response, next) => {
	let id = request.query.id
	try {
		let movie = await Movie.findOne({ _id: id })
		response.send(movie.director)
	} catch (err) {
		next(err)
	}
}
const getWriter = async (request, response, next) => {
	let id = request.query.id
	try {
		let movie = await Movie.findOne({ _id: id })
		response.send(movie.writer)
	} catch (err) {
		next(err)
	}
}
const getProducer = async (request, response, next) => {
	let id = request.query.id
	try {
		let movie = await Movie.findOne({ _id: id })
		response.send(movie.producer)
	} catch (err) {
		next(err)
	}
}
const postMovie = async (request, response, next) => {
	const {
		trailer,
		title,
		releaseYear,
		actors,
		nationality,
		director,
		writer,
		language,
		platform,
		producer,
		mainCharacterName,
		genre,
	} = request.body
	try {
		let movie = new Movie({
			dateOfAddition: Date.now(),
			trailer,
			title,
			releaseYear,
			actors,
			nationality,
			director,
			writer,
			language,
			platform,
			producer,
			mainCharacterName,
			genre,
		})
		const movieSave = await movie.save()
		response.send(200, { message: movieSave })
	} catch (err) {
		next(err)
	}
}
const addActor = async (request, response, next) => {
	let id = request.query.id
	try {
		const update = await Movie.updateOne({ _id: id }, { $push: { actors: request.body.actors } })
		response.send(200, { message: "Film updated", body: update })
	} catch (err) {
		next(err)
	}
}
const addDirector = async (request, response, next) => {
	let id = request.query.id
	try {
		const update = await Movie.updateOne(
			{ _id: id },
			{ $push: { director: request.body.director } }
		)
		response.send(200, { message: "Film updated", body: update })
	} catch (err) {
		next(err)
	}
}
const addWriter = async (request, response, next) => {
	let id = request.query.id
	try {
		const update = await Movie.updateOne({ _id: id }, { $push: { writer: request.body.writer } })
		response.send(200, { message: "Film updated", body: update })
	} catch (err) {
		next(err)
	}
}
const updateMovie = async (request, response, next) => {
	let id = request.query.id
	const {
		trailer,
		title,
		releaseYear,
		actors,
		nationality,
		director,
		writer,
		language,
		platform,
		producer,
		mainCharacterName,
		genre,
	} = request.body
	try {
		const movieUpdate = await Movie.updateMany(
			{ _id: id },
			{
				trailer: trailer,
				title: title,
				releaseYear: releaseYear,
				actors: actors,
				nationality: nationality,
				director: director,
				writer: writer,
				language: language,
				platform: platform,
				producer: producer,
				mainCharacterName: mainCharacterName,
				genre: genre,
			}
		)
		response.send(200, { message: movieUpdate })
	} catch (err) {
		next(err)
	}
}
const deleteMovie = async (request, response, next) => {
	let id = request.query.id
	try {
		const deleted = await Movie.deleteOne({ _id: id })
		response.send(200).json({ message: deleted })
	} catch (err) {
		next(err)
	}
}
const deleteActor = async (request, response, next) => {
	let id = request.query.id
	try {
		const update = await Movie.updateOne({ _id: id }, { $pull: { actors: request.body.actors } })
		response.send(200, { message: "Film updated", body: update })
	} catch (err) {
		next(err)
	}
}
const deleteDirector = async (request, response, next) => {
	let id = request.query.id
	try {
		const update = await Movie.updateOne(
			{ _id: id },
			{ $pull: { director: request.body.director } }
		)
		response.send(200, { message: "Film updated", body: update })
	} catch (err) {
		next(err)
	}
}
const deleteWriter = async (request, response, next) => {
	let id = request.query.id
	try {
		const update = await Movie.updateOne({ _id: id }, { $pull: { writer: request.body.writer } })
		response.send(200, { message: "Film updated", body: update })
	} catch (err) {
		next(err)
	}
}
module.exports = {
	getMovie,
	getActor,
	getDirector,
	getWriter,
	getProducer,
	postMovie,
	addActor,
	addDirector,
	addWriter,
	updateMovie,
	deleteMovie,
	deleteActor,
	deleteDirector,
	deleteWriter,
}
