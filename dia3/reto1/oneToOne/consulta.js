const mongoose = require("mongoose")
const Libro = require("./libroSchema")
const Autor = require("./autorSchema")

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

//Create
//let libro = new Libro({ titulo: "Harry Potter", nPaginas: 600 })
//libro.save(function (err, res) {
//	if (err) {
//		console.log(err)
//	} else {
//		let autor = new Autor({ nombre: "J.K. Rowling", edad: 60, libro: res.id })
//		autor.save(check)
//	}
//})
//Find
Autor.findOne({ nombre: "J.K. Rowling" })
	.populate("libro")
	.exec((err, autor) => {
		if (err) {
			console.log(err)
			process.exit(-1)
		} else {
			console.log(`Autor: ${autor.nombre} Libro: ${autor.libro.titulo}`)
			console.log(autor)
		}
	})
