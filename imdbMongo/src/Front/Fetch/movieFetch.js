let trailer = document.querySelector("#trailer")
let title = document.querySelector("#title")
let year = document.querySelector("#year")
let actors = document.querySelector("#actors")
let nationality = document.querySelector("#nationality")
let director = document.querySelector("#director")
let writer = document.querySelector("#writer")
let language = document.querySelector("#language")
let platform = document.querySelector("#platform")
let producer = document.querySelector("#producer")
let genre = document.querySelector("#genre")
let idNumber = document.querySelector("#idNumber")
//Botones
let mostrarBtn = document.querySelector("#btn-get")
let crearBtn = document.querySelector("#btn-post")
let actualizarBtn = document.querySelector("#btn-put")
let eliminarBtn = document.querySelector("#btn-del")
//FETCH GET
mostrarBtn.addEventListener("click", async () => {
	let id = idNumber.value
	let url
	if (id == "") {
		url = "http://localhost:3000/peliculas"
	} else {
		url = "http://localhost:3000/peliculas?id=" + id
	}
	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},
		method: "GET",
	}
	try {
		let data = await fetch(url, param)
		let result = await data.json()
		if (id == "") {
			document.querySelector(".database").innerHTML = mostrarTodos(result)
		} else {
			document.querySelector(".database").innerHTML = mostrarUno(result)
		}
	} catch (error) {
		console.log(error)
	}
})
let listaActores = document.querySelector(".database")
listaActores.addEventListener("click", async (e) => {
	e.stopPropagation()
	const element = e.target
	const parent = element.parentElement

	let url = "http://localhost:3000/peliculas?id=" + parent.getAttribute("value")

	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},
		method: "GET",
	}
	try {
		let data = await fetch(url, param)
		let result = await data.json()
		document.querySelector(".database").innerHTML = mostrarUno(result)
	} catch (error) {
		console.log(error)
	}
})
crearBtn.addEventListener("click", async () => {
	try {
		let url = "http://localhost:3000/peliculas"
		let movie = {
			trailer: trailer.value,
			title: title.value,
			releaseYear: year.value,
			actors: actors.value,
			nationality: nationality.value,
			director: director.value,
			writer: writer.value,
			language: language.value,
			platform: platform.value,
			producer: producer.value,
			genre: genre.value,
		}
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(movie),
			method: "POST",
		}

		let data = await fetch(url, param)
		toast("Pelicula añadida")
		console.log(data)
	} catch (error) {
		console.log(error)
	}
})
actualizarBtn.addEventListener("click", async () => {
	try {
		let url = `http://localhost:3000/peliculas?id=${idNumber.value}`
		let movie = {
			trailer: trailer.value,
			title: title.value,
			releaseYear: year.value,
			actors: actors.value,
			nationality: nationality.value,
			director: director.value,
			writer: writer.value,
			language: language.value,
			platform: platform.value,
			producer: producer.value,
			genre: genre.value,
		}

		for (const item in movie) {
			if (movie[item] == "" || movie[item] == null) {
				delete movie[item]
			}
		}
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(movie),
			method: "PUT",
		}
		let data = await fetch(url, param)
		toast("Cambios guardados")
		console.log(data)
	} catch (error) {
		console.log(error)
	}
})
eliminarBtn.addEventListener("click", async () => {
	let url = `http://localhost:3000/peliculas?id=${idNumber.value}`
	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},

		method: "DELETE",
	}
	try {
		let data = await fetch(url, param)
		toast("Pelicula Borrada")
		console.log(data)
	} catch (error) {
		console.log(error)
	}
})
const mostrarTodos = (database) => {
	let post = ""
	for (const film of database) {
		post += `<button value=${film._id}  class=film>
		<span>Titulo: ${film.title}</span>
		<span>Año: ${film.releaseYear} </span>
		</button>
		`
	}
	return post
}
const mostrarUno = (film) => {
	let database = film[0]
	let post = ` <div class=movie_body>
	<iframe class=trailer src=${database.trailer} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</iframe>
	<div class = movie_specs>
	<p class= specs_title> Datos de la pelicula:<p>
	<div class=movie_info>
	<p>Title: ${database.title}</p>
	<p>Year: ${database.year}</p>
	<p>Género: ${database.genre}</p>
	<p>Nationality: ${database.nationality}</p>
	<p>Language: ${database.language}</p>
	<p>Platform: ${database.platform} </p>
	<p>Producer: ${database.producer} </p>
	</div>
	</div>
	</div>`
	return post
}

function toast(text) {
	let toast = document.querySelector(".toast")

	toast.style.opacity = "1"
	toast.innerHTML = text

	setTimeout(() => {
		toast.style.opacity = "0"
	}, 2500)
}
