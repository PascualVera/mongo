const Fakerator = require("fakerator")
const fakerator = Fakerator("de-DE")
let name = fakerator.names.name()
console.log(name)
