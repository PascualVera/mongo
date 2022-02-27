const errorHandling = (err, res, req, next) => {
	res.send(500, { message: err.message })
}

module.exports = errorHandling
