
import express from 'express';
import cors from 'cors';

import router from './routes/router.js';
import { initBanco } from './model/initBanco.js';


const app = express();

app.use(express.json());

app.use(router);
app.use(cors);

initBanco();

app.listen(3000, () => {
    console.log('A api está ouvindo na porta 3000')
})

