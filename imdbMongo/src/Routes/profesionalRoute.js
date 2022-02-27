const { Router } = require("express")
const { route } = require("../app")
const profesionalCtrl = require("../Controller/profesionalController")
const router = Router()

router.get("/profesional", profesionalCtrl.getProfesionals)
router.post("/profesional", profesionalCtrl.postProfesionals)
router.put("/profesional", profesionalCtrl.updateProfesionals)
router.delete("/profesional", profesionalCtrl.deleteProfesional)

module.exports = router
