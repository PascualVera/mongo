const mongoose = require("mongoose")

const LibroSchema = new mongoose.Schema({
	titulo: String,
	nPaginas: Number,
	autor: [{ type: mongoose.Schema.Types.ObjectId, ref: "autorManyToMany" }],
})
module.exports = mongoose.model("libroManyToMany", LibroSchema, "libroManyToMany")
