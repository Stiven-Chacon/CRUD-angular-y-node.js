//hacemos la conexion con sequelize
import { Sequelize } from 'sequelize';


const conexion = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

export default conexion;