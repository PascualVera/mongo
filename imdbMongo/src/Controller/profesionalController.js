const Profesional = require("../Model/profesionalSchema")

const getProfesionals = async (request, response, next) => {
	let id = request.query.id
	if (id == null) {
		try {
			let actors = await Profesional.find()
			response.send(actors)
		} catch (err) {
			next(err)
		}
	} else {
		try {
			let actors = await Profesional.find({ _id: id })
			response.send(actors)
		} catch (err) {
			next(err)
		}
	}
}

const postProfesionals = async (request, response, next) => {
	const {
		name,
		age,
		genre,
		weight,
		height,
		hairColor,
		race,
		nationality,
		oscarNumber,
		profesion,
		foto,
	} = request.body
	try {
		let newProfesional = new Profesional({
			name,
			age,
			genre,
			weight,
			height,
			hairColor,
			race,
			nationality,
			oscarNumber,
			profesion,
			foto,
		})
		const profesionalSave = await newProfesional.save()
		response.send(201).json({ message: profesionalSave })
	} catch (err) {
		next(err)
	}
}
const updateProfesionals = async (request, response, next) => {
	let id = request.query.id
	const {
		name,
		age,
		genre,
		weight,
		height,
		hairColor,
		race,
		nationality,
		oscarNumber,
		profesion,
		foto,
	} = request.body
	try {
		const update = await Profesional.updateMany(
			{ _id: id },
			{
				name: name,
				age: age,
				genre: genre,
				weight: weight,
				height: height,
				hairColor: hairColor,
				race: race,
				nationality: nationality,
				oscarNumber: oscarNumber,
				profesion: profesion,
				foto: foto,
			}
		)
		response.send(200).json({ message: update })
	} catch (err) {
		next(err)
	}
}
const deleteProfesional = async (request, response, next) => {
	let id = request.query.id
	try {
		const deleted = await Profesional.deleteOne({ _id: id })
		response.send(200).json({ message: deleted })
	} catch (err) {
		next(err)
	}
}

module.exports = { getProfesionals, postProfesionals, updateProfesionals, deleteProfesional }
