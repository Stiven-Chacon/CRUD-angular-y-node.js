"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateproduct = exports.postproduct = exports.deleteproduct = exports.getproduct = exports.getproducts = void 0;
const Products_1 = __importDefault(require("../Models/Products"));
const getproducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Para Traer todos los datos de la tabla productos
    const listproducts = Products_1.default.findAll();
    res.json(listproducts);
});
exports.getproducts = getproducts;
const getproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //para consultar los datos de un producto especifico 
    const product = yield Products_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: "No existe el producto que desea buscar"
        });
    }
});
exports.getproduct = getproduct;
const deleteproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield Products_1.default.findByPk(id);
    if (product) {
        yield product.destroy();
        res.json({
            msg: "Producto Eliminado Correctamente!"
        });
    }
    else {
        res.status(404).json({
            msg: "No existe el producto que desea Eliminar"
        });
    }
});
exports.deleteproduct = deleteproduct;
const postproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Products_1.default.create(body);
        res.json({
            msg: "El producto fue agregado exitosamente!"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Upps ocurrio un error, Comuniquese con soporte"
        });
    }
});
exports.postproduct = postproduct;
const updateproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield Products_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'El producto fue Actualizado exitosamente!'
            });
        }
        else {
            res.status(404).json({
                msg: "No existe el producto que desea Actualizar"
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Upps ocurrio un error, Comuniquese con soporte"
        });
    }
});
exports.updateproduct = updateproduct;
