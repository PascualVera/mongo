const mongoose = require("mongoose")

const LibroSchema = new mongoose.Schema({
	titulo: String,
	nPaginas: Number,
})
module.exports = mongoose.model("libroMany", LibroSchema, "libroMany")
