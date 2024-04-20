"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//hacemos la conexion con sequelize
const sequelize_1 = require("sequelize");
const conexion = new sequelize_1.Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = conexion;
