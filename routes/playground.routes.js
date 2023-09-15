const express = require('express')
const { getTaskM, getLogin, getFilms } = require('../controllers/playground.controller')

const router = express.Router()
router.get("/taskmanager/", getTaskM);
router.get("/login/", getLogin);
router.get('/films-db/', getFilms)

module.exports = {router};