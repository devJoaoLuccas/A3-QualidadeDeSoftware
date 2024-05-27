import { openDb } from "../../configDb.js";
import { adicionaMedida, getMedida } from "../../controller/medidasController.js";

const db = async () => {
    return await openDb()
}

export async function createTableMedidas() {

    await db.exec(
        `
            CREATE TABLE IF NOT EXISTS avaliacoes
                (idMedidas INTEGER PRIMARY KEY AUTOINCREMENT,
                 altura REAL NOT NULL, 
                 peso REAL NOT NULL, 
                 imc REAL NOT NULL,
                 resultado TEXT NOT NULL,
                 userId INTEGER NOT NULL,
                 FOREIGN KEY (userId) REFERENCES users (idUser) ON DELETE CASCADE);
        `
    );

}

export async function initInserirMedidas() {

    try {
        await db.run(`
            INSERT INTO avaliacoes
            (idMedidas, altura, peso, imc, resultado, userId)
            VALUES
                (1, 1.60, 60.5, 1.50, "Peso Ideal", 1),
                (2, 1.60, 65, 1.50, "Acima do peso", 1),
                (3, 1.70, 60.5, 1.40, "Abaixo do peso", 2),
                (4, 1.60, 60.5, 1.50, "Obeso", 2),
                (5, 1.60, 60.5, 1.50, "Sobrepeso", 3),
                (6, 1.60, 60.5, 1.50, "Peso Ideal", 3),
                (7, 1.60, 60.5, 1.50, "Abaixo do peso", 4),
                (8, 1.60, 60.5, 1.50, "Obeso", 4),
                (9, 1.60, 60.5, 1.50, "Acima do peso", 5),
                (10, 1.60, 60.5, 1.50, "Obeso", 5)
        `)
    } catch (error) {
        console.log("Não foi possível inserir as avaliações do usuário");
    }

}


export async function selectMedidas(req, res) {

    const id = req.params.idUser;

    try {
        const verificarMedida =await getMedida(id);

    if(!verificarMedida) {
        return res.json({
            "statusCode":404,
        })
    } else {
        
        return res.json({
            "statusCode":200,
        })
    }
    } catch (error) {
        console.log(error);
    }

}

export async function adicionarMedidas(req, res) {

    const medida = req.body;

    try {
         const verificaMedida = await adicionaMedida(medida.altura, medida.peso, medida.imc, medida.resultado, medida.userId);

         if(!verificaMedida) {
            
            return res.json({
                "statusCode": 410
            });
         } else {
            
            return res.json({
                "statusCode": 200
            })
         }


    } catch (error) {
        console.log(error);
    }

}
