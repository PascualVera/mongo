let up = document.querySelector("#btn1")
let dowm = document.querySelector("#btn2")
let actors = document.querySelector(".section1")

let films = document.querySelector(".section2")
dowm.addEventListener("click", () => {
	actors.style.transform = "translateY(-100%)"
	films.style.transform = "translateY(-100%)"
	up.style.display = "block"
	dowm.style.display = "none"
	document.querySelector(".video2").currentTime = 0
})
up.addEventListener("click", () => {
	actors.style.transform = "translateY(0)"
	films.style.transform = "translateY(0)"
	dowm.style.display = "block"
	up.style.display = "none"
	document.querySelector(".video1").currentTime = 0
})
