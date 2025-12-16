////POST/auth/login  
// //recibe las credenciales de usuario en
//el cuerpo (body) de la peticion y devuelve el Bearer token si son validas o un error de autenticacion en caso contrario


import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", login) ; 


export default router;

