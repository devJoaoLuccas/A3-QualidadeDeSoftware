import { openDb } from "../configDb";
import { getId, getUser } from "./userController";

export async function getMedida(idUser) {

    const db = await openDb();

    const verificaMedida = await db.all(
        `
            SELECT *
            FROM avaliacoes
            WHERE userId = ?
        `, [idUser]
    );


    if(verificaMedida === undefined) {
        return false
    } else {
        return true
    }

}

export async function adicionaMedida(altura, peso, imc, resultado, userId) {

    const db = await openDb();

    const verificarId = await getUser(userId);

    if(!verificarId) {
        return false;
    } else {
            await db.run(
                `
                    INSERT INTO avaliacoes
                    (altura, peso, imc, resultado, userId)
                    VALUES
                    (?,?,?,?,?)
                `, [altura, peso, imc, resultado, userId]
            )

        return true;
    }

}