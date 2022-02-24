const mongoose = require("mongoose")
const Libro = require("./libroSchema")
const Autor = require("./autorSchema")
const libroSchema = require("./libroSchema")

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
// let libro = new Libro({ titulo: "Harry Potter y la piedra filosofal", nPaginas: 200, autor: [] })
// libro
// 	.save()
// 	.then((book) => {
// 		console.log("book added")
// 		coleccion.push(book._id)
// 		libro = new Libro({ titulo: "Harry Potter y la camara secreta", nPaginas: 250, autor: [] })
// 		return libro.save()
// 	})
// 	.then((book) => {
// 		console.log("book added")
// 		coleccion.push(book._id)
// 		libro = new Libro({ titulo: "Harry Potter y tal", nPaginas: 300, autor: [] })
// 		return libro.save()
// 	})
// 	.then((book) => {
// 		console.log("book added")
// 		coleccion.push(book._id)
// 		let autor = new Autor({ nombre: "J.K. Rowling", edad: 60, libro: coleccion })
// 		return autor.save()
// 	})
// 	.then((autor) => {
// 		console.log("Autor añadido")
// 		autor = new Autor({ nombre: "NPC 1", edad: 24, libro: coleccion[2] })
// 		return autor.save()
// 	})
// 	.then((autor) => {
// 		console.log("Autor añadido")
// 	})
// 	.catch((err) => {
// 		console.log(err)
// 	})
// Autor.findOne({ nombre: "NPC 1" }, function (err, author) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		Libro.updateOne({ titulo: "Harry Potter y la piedra filosofal" }, { autor: author._id }, check)
// 	}
// })
Autor.findOne({ nombre: "J.K. Rowling" }, function (err, author) {
	if (err) {
		console.log(err)
	} else {
		let arr
		Libro.findOne({ titulo: "Harry Potter y la piedra filosofal" }, function (err, book) {
			if (err) {
				console.log(err)
			} else {
				arr = book.autor
				arr.push(author._id)
				console.log(arr)
				Libro.updateOne({ titulo: "Harry Potter y la piedra filosofal" }, { autor: arr }, check)
			}
		})
	}
})

//Find
// Autor.findOne({ nombre: "J.K. Rowling" })
// 	.populate("libro")
// 	.exec((err, autor) => {
// 		if (err) {
// 			console.log(err)
// 			process.exit(-1)
// 		} else {
// 			console.log(`Autor: ${autor.nombre} - Numero de Libros: ${autor.libro.length}`)
// 			console.log(`Su primer libro fue ${autor.libro[0].titulo}`)
// 		}
// 	})
