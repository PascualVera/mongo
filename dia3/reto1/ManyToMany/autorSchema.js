const mongoose = require("mongoose")

const AutorSchema = new mongoose.Schema({
	nombre: String,
	edad: Number,
	libro: [{ type: mongoose.Schema.Types.ObjectId, ref: "libroManyToMany" }],
})
module.exports = mongoose.model("autorManyToMany", AutorSchema, "autorManyToMany")
