import { Router } from "express";

import { adicionarUser, selectUser, login } from "../model/users/usuario";

const router = Router();

router.get('/user/:idUser', selectUser)


router.post('/adicionarUsuario', adicionarUser);
router.post('/login', login);