//Declaracion de variables
<<<<<<< HEAD
let name = document.getElementById("name")
let age = document.getElementById("age")
let genre = document.getElementById("genre")
let weight = document.getElementById("weight")
let height = document.getElementById("height")
let hair = document.getElementById("hair")
let nationality = document.getElementById("nationality")
let oscars = document.getElementById("oscars")
let profesion = document.getElementById("profesion")
let foto = document.getElementById("foto")
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
		url = "http://localhost:3000/profesional"
	} else {
		url = "http://localhost:3000/profesional?id=" + id
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

	let url = "http://localhost:3000/profesional?id=" + parent.getAttribute("value")

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
=======
let name = document.getElementById("name");
let age = document.getElementById("age");
let genre = document.getElementById("genre");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let hair = document.getElementById("hair");
let race = document.getElementById("race");
let active = document.getElementById("active");
let nacionality = document.getElementById("nationality");
let oscars = document.getElementById("oscars");
let profesion = document.getElementById("profession");
let img = document.getElementById("img");
let idNumber = document.querySelector("#idNumber");
//Botones
let mostrarBtn = document.querySelector("#btn-get");
let crearBtn = document.querySelector("#btn-post");
let actualizarBtn = document.querySelector("#btn-put");
let eliminarBtn = document.querySelector("#btn-del");

mostrarBtn.addEventListener("click", async () => {
  let id = Number(idNumber.value);
  let url = "http://localhost:3000/profesional";

  let param = {
    headers: {
      "content-type": "application/json; charset = UTF-8",
    },
    method: "GET",
  };
  try {
    let data = await fetch(url, param);
    let result = await data.json();
    if (idNumber.value == "") {
      document.querySelector(".database").innerHTML = mostrarTodos(result);
    }
  } catch (error) {
    console.log(error);
  }
});
>>>>>>> 183173ac4a245800ec39621abc5f7b46b4ac9fe0

//FETCH POST
crearBtn.addEventListener("click", async () => {
	try {
		let url = "http://localhost:3000/profesional"
		let profesional = {
			name: name.value,
			age: age.value,
			genre: genre.value,
			weight: weight.value,
			height: height.value,
			hairColor: hair.value,
			nationality: nationality.value,
			oscarNumber: oscars.value,
			profesion: profesion.value,
			foto: foto.value,
		}
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(profesional),
			method: "POST",
		}

		let data = await fetch(url, param)
		toast("Profesional añadido")
		let result = await data.json()
		console.log(result)
	} catch (error) {
		console.log(error)
	}
})
//FETCH PUT
actualizarBtn.addEventListener("click", async () => {
	try {
		let url = `http://localhost:3000/profesional?id=${idNumber.value}`
		let profesional = {
			name: name.value,
			age: age.value,
			genre: genre.value,
			weight: weight.value,
			height: height.value,
			hairCOlor: hair.value,
			nationality: nationality.value,
			oscarNumber: oscars.value,
			profesion: profesion.value,
			foto: foto.value,
		}
		for (const item in profesional) {
			if (profesional[item] == "" || profesional[item] == null) {
				delete profesional[item]
			}
		}
		let param = {
			headers: {
				"content-type": "application/json; charset = UTF-8",
			},
			body: JSON.stringify(profesional),
			method: "PUT",
		}
		let data = await fetch(url, param)
		toast("Cambios guardados")
		let result = await data.json()

		console.log(data)
	} catch (error) {
		console.log(error)
	}
})
eliminarBtn.addEventListener("click", async () => {
	let url = `http://localhost:3000/profesional?id=${idNumber.value}`
	let param = {
		headers: {
			"content-type": "application/json; charset = UTF-8",
		},

		method: "DELETE",
	}
	try {
		let data = await fetch(url, param)
		toast("Profesional Borrado")
		console.log(data)
	} catch (error) {
		console.log(error)
	}
})
//Funciones para mostrar datos
const mostrarTodos = (database) => {
<<<<<<< HEAD
	let post = ""
	for (const actor of database) {
		post += `<button value=${actor._id}  class=actor>
		<span>Nombre: ${actor.name}</span>
		<span>Profesion: ${actor.profesion} </span>
		</button>
		`
	}
	return post
}
const mostrarUno = (actor) => {
	let database = actor[0]
	let post = ` <div class=actor_body>
	<figure class=actor_img_container><img class=actor_img src=${database.foto}></figure>
	<div class = actor_specs>
	<p>Nombre: ${database.name}</p>
	<p>Edad: ${database.age}</p>
	<p>Género: ${database.genre}</p>
	<p>Peso: ${database.weight}</p>
	<p>Altura: ${database.height}</p>
	<p>Oscars: ${database.oscarNumber} </p>
	<p>Profesion: ${database.profesion} </p>
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
=======
  let post = "";
  for (const actor of database) {
    post += `<button value=${actor._id} onClick=polla() class=actor>
		<span>Nombre: ${actor.name}</span>
		<span>Profesion: ${actor.profesion} </span>
		</button>
		`;
  }
  return post;
};

const listaActores = document.querySelector(".database");
listaActores.addEventListener("click", (e) => {
  e.stopPropagation();
  const element = e.target;
  const parent = element.parentElement;
  console.log(parent.getAttribute("value"));
});
>>>>>>> 183173ac4a245800ec39621abc5f7b46b4ac9fe0
