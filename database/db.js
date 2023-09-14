const sqlite3 = require('sqlite3').verbose();

const dbPath = './database/database.db'; // Ruta de la base de datos
const tableName = 'blog'; // Nombre de la tabla que deseas verificar

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    return console.error('Error al abrir la base de datos:', err.message);
  }
  
  // Verificar si la tabla existe
  db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`, (err, row) => {
    if (err) {
      return console.error('Error al verificar la tabla:', err.message);
    }
    
    if (row) {
      console.log(`Base de datos iniciada correctamente`);
    } else {
      console.warn(`La tabla '${tableName}' no existe en la base de datos.`);
      console.log('Creando tabla...')
      db.run('CREATE TABLE "blog" ("id" INTEGER PRIMARY KEY AUTOINCREMENT DEFAULT (0), "titulo" TEXT, "descripcion" TEXT, "fecha" TEXT)',(err, res)=>{
        if(err){
            console.error(err)
        }
        else{
            console.log('Tabla creada', res)
        }
      })
    }
    
    // Cerrar la conexión a la base de datos
    db.close((err) => {
      if (err) {
        return console.error('Error al cerrar la base de datos:', err.message);
      }
    });
  });
});

module.exports={db}