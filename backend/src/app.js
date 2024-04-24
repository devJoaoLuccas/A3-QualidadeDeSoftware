
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json);

app.listen(3000, () => {
    console.log('A api está ouvindo na porta 3000')
})

