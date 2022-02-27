//Declaracion de variables
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

const mostrarTodos = (database) => {
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
