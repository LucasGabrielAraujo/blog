const express = require('express')
const indexController = require("../controllers/index.controllers")

const router = express.Router()

router.get("/", indexController.getIndex)
router.get("/playground/", indexController.getPlayground)
router.get("/links/", indexController.getLinks)
/* router.delete("/reservas/:id", indexController.deleteById)*/


module.exports = { router }