import {Router}from 'express';
import { getproduct, getproducts,deleteproduct, postproduct, updateproduct } from '../Controllers/products';

const router = Router();

router.get('/', getproducts)
router.get('/:id', getproduct)
router.delete('/:id', deleteproduct)
router.post('/', postproduct)
router.put('/:id', updateproduct)

export default router;