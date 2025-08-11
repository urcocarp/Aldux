const server = require('./src/server');
//const { conn } = require('./src/db'); // CUANDO TENGAS LISTA LA BASE DE DATOS DESCOMENTAR ESTA LINEA
require('dotenv').config();
const PORT = process.env.PORT

// LO COMENTADO ES PARA SINCRONIZAR LA BASE DE DATOS CON EL SERVIDOR UNA VEZ QUE ESTE CREADA UNA VEZ CREADA DESCOMENTAR ESTA PARTE
// {conn.sync({ force: true }).then(() => {
//     
       //recorda que force:true es para cuando se trabaja en desarrollo cada vez que reinicie el servidor vas a perder los datos de la base de datos
       // cuando ya tengas listo todo cambia ese force:true por alter:true para que se creen las tablas de nuevo

//     server.listen(PORT, async () => {

//    
//         console.log(`Listening to port ${PORT}`);
//     });

// }).catch(error => console.error(error))}

  server.listen(PORT, async () => {

        
         console.log(`Listening to port ${PORT}`);
     });