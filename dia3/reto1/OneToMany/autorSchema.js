const mongoose = require("mongoose")

const AutorSchema = new mongoose.Schema({
	nombre: String,
	edad: Number,
	libro: [{ type: mongoose.Schema.Types.ObjectId, ref: "libroMany" }],
})
module.exports = mongoose.model("autorMany", AutorSchema, "autorMany")
