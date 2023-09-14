const path = require('path')
const { db } = require('../database/db')

//get
const getIndex = (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    res.status(200).sendFile(filePath)
}
const getSobreMi = (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'about.html');
    res.status(200).sendFile(filePath)
}
const getLinks = (req, res) => {
    res.status(200).json({ mensaje: "Agregar links" })
}

module.exports = { getIndex, getSobreMi, getLinks }