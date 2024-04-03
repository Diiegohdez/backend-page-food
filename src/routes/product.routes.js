import { Router } from "express";
import {getProduct, createProduct, getOneProduct, udaptedProduct, deleteProduct} from "../controllers/product.controllers.js";
import {validateSchema} from "../middlewares/validate.middlewares.js";
import {createProductSchema} from "../schemas/product.schema.js";

const router = Router();


router.get('/Products', getProduct);

router.get('/Product/:id', getOneProduct);

router.post('/Product',validateSchema(createProductSchema), createProduct);

router.put('/Product/:id', udaptedProduct);

router.delete('/Product/:id', deleteProduct);





export default router;