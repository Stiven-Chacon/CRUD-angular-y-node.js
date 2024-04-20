import db from '../db/connection';
import { DataTypes } from 'sequelize'

const Producto = db.define('Productos', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
}

)

export default Producto;