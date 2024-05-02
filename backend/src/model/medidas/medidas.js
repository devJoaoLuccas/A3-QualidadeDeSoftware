import { openDb } from "../../configDb.js";

const db = openDb();

export async function createTableMedidas() {

    db.exec(
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
        db.run(`
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
    console.log(id);

    try {
        const medida = db.all (
            `
                SELECT * 
                FROM avaliacoes
                WHERE userId = ?
            
            `,[id]);

    if(!medida) {
        console.log("A avaliação não foi encontrada:", id);

        return res.json({
            "statusCode":404,
            error:"Usuário não foi encontrado"
        })
    } else {
        console.log("A avaliação foi encontrada:", medida);
        
        return res.json({
            "statusCode":200,
             medida
        })
    }
    } catch (error) {
        console.log("Não foi possível encontrar a medida");
        console.log(error);
    }

}

export async function adicionarMedidas(req, res) {

    const medida = req.body;

    try {
         db.run(
            `
                INSERT INTO avaliacoes
                (altura, peso, imc, resultado, userId)
                VALUES
                (?,?,?,?,?)
            `,
        [medida.altura, medida.peso, medida.imc, medida.resultado, medida.userId]);

        console.log("A medida foi adicionada com sucesso.", medida.imc);

        res.json({
            "statusCode": 200
        })

    } catch (error) {
        console.log("Não foi possível adicionar o usuário");
        console.log(error);
    }

}


export async function updateMedidas(req, res) {

    const medida = req.body;

    try {
        db.run(
            `
                UPDATE avaliacoes
                SET altura=?, peso=?, imc=?, resultado=?
                WHERE idMedidas=?
            `
        , medida.altura, medida.peso, medida.imc, medida.resultado, medida.idMedidas);

        console.log(`A medida foi atualizada com sucesso:`, [medida.idMedidas]);

        res.json({
            "statusCode":200
        })

    } catch (error) {
        res.json({
            "statusCode":401
        })

        console.log("Não foi possível atualizar a medida", [medida.idMedidas]);
    }
}