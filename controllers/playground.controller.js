const path = require('path')

//get
const getTaskM = (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'taskmanager.html');
    res.status(200).sendFile(filePath)
}
const getLogin = (req, res) =>{
    const filePath = path.join(__dirname, '..', 'public', 'login.html');
    res.status(200).sendFile(filePath)
}
const getFilms = (req, res) =>{
    const filePath = path.join(__dirname, '..', 'public', 'films-db.html');
    res.status(200).sendFile(filePath)
}

module.exports={getTaskM, getLogin, getFilms}