import { Router } from "express";

import { index, create, deleteAProduct, getById, update } from "../controllers/products.controller.js";
//
import {auth } from '../middlewares/auth.middleware.js'
//

const router = Router();

router.get("/products", index) ; 
router.get("/products/:id", getById);
router.post("/products",create);
router.delete("/products/:id", deleteAProduct);
router.put("/products/:id",update);

export default router;
