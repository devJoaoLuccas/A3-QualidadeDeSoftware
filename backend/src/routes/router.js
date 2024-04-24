import { Router } from "express";

import { adicionarUser, selectUser, login } from "../model/users/usuario.js";
import { adicionarMedidas, selectMedidas } from "../model/medidas/medidas.js";


const router = Router();

router.get('/user/:idUser', selectUser)
router.get('/medidas/:idUser', selectMedidas);

router.post('/adicionarUsuario', adicionarUser);
router.post('/adicionarMedidas', adicionarMedidas);

router.post('/login', login);

export default router;