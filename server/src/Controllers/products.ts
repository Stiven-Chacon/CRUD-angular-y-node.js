import { Request, Response } from 'express'
import Producto from '../Models/Products'

export const getproducts = async (req: Request, res: Response) => {
    //Para Traer todos los datos de la tabla productos
    const listproducts = Producto.findAll()
    res.json(listproducts)
}

export const getproduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    //para consultar los datos de un producto especifico 
    const product = await Producto.findByPk(id)

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: "No existe el producto que desea buscar"
        })
    }
}

export const deleteproduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id)

    if (product) {
        await product.destroy()
        res.json({
            msg: "Producto Eliminado Correctamente!"
        })
    } else {
        res.status(404).json({
            msg: "No existe el producto que desea Eliminar"
        })

    }

}

export const postproduct = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Producto.create(body);
        res.json({
            msg: "El producto fue agregado exitosamente!"
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Upps ocurrio un error, Comuniquese con soporte"
        })
    }
}

export const updateproduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const product = await Producto.findByPk(id)

        if (product) {
            await product.update(body);
            res.json({
                msg: 'El producto fue Actualizado exitosamente!'
            })
        } else {
            res.status(404).json({
                msg: "No existe el producto que desea Actualizar"
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Upps ocurrio un error, Comuniquese con soporte"
        })
    }

}
