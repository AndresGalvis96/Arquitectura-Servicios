import { Router } from "express";
import { verifyToken } from "./token.middleware.js";


const router = Router();

router.use("/producto", verifyToken);

export default router;