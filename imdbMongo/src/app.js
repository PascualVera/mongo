const express = require("express")
const cors = require("cors")
const app = express()
const profesionalRouter = require("./Routes/profesionalRoute")
const movieRouter = require("./Routes/movieRoute")
const errorHandling = require("./error/errorHandling")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("port", process.env.PORT || 3000)

app.use(profesionalRouter)
app.use(movieRouter)
app.use((request, response, next) => {
	response.status(404).json({ message: `Doesnt found` })
})
app.use(errorHandling)
module.exports = app
