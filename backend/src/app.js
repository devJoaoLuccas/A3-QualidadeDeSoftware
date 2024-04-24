
import express from 'express';
import cors from 'cors';

import router from './routes/router.js';
import { initBanco } from './model/initBanco.js';

import { initInserirMedidas } from './model/medidas/medidas.js';
import { initInserirUsuario } from './model/users/usuario.js';


const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(router);

initBanco();

await initInserirUsuario();
await initInserirMedidas();

app.listen(3000, () => {
    console.log('A api está ouvindo na porta 3000')
})

