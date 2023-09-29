import { Router } from "express";
import Producto from "./producto.routes.js";
import Auth from "./auth.route.js"
import { createProducto, deleteProducto, updateProducto } from "../controller/producto.controllers.js"; 

const router = Router();

router.use('/producto', Producto);
router.use('/auth', Auth);
router.delete("/:id", deleteProducto);
router.put("/:id", updateProducto);
router.post("/productos", createProducto);

export default router;