import {Router} from "express";

import { getProducto, createProducto } from "../controller/producto.controllers.js";

const router = Router();

router.get("/" , getProducto);

router.post("/", createProducto);

export default router;