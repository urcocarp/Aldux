require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');

//ACA TE TRAE LAS VARIABLES DE ENTORNO DE .ENV FIJATE QUE EN TU . ENV TENGAS ESTAS VARIABLES
// DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY
} = process.env;
//ACA TE CONECTA A LA BASE DE DATOS LOCAL O A LA BASE DE DATOS DESPLEGADA
//REEMPLAZA NOMBRE_DE_TU_BASE CON EL NOMBRE DE TU BASE DE DATOS REAL
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/NOMBRE_DE_TU_BASE`, {
  logging: false, 
  native: false, 
});



const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
// ACA VAS A PONER LOS MODELOS QUE VAS A EXPORTAR
// EJEMPLO USERS
const {  } = sequelize.models;

//ACA HACES LAS ASOCIACIONES ENTRE LOS MODELOS
// EJ
// Service.hasMany(Commission);
// Commission.belongsTo(Service);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};