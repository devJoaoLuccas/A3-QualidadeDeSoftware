import { openDb } from "../configDb";
import { getId, getUser } from "./userController";

export async function getMedida(idUser) {
    console.log("Verifica o idUser:", idUser);

    const db = await openDb();

    const verificaMedida = await db.all(
        `
            SELECT *
            FROM avaliacoes
            WHERE userId = ?
        `, [idUser]
    );

    console.log("Verificar o resultado de medida", verificaMedida);

    if(verificaMedida === undefined) {
        console.log("O usuário não existe");
        return false
    } else {
        console.log("O usário existe");
        return true
    }

}

export async function adicionaMedida(altura, peso, imc, resultado, userId) {

    console.log(`Verifica os dados ${altura}, ${peso}, ${imc}, ${resultado}, ${userId}`);

    const db = await openDb();

    const verificarId = await getUser(userId);
    console.log("Verifica ID", verificarId);


    if(!verificarId) {
        console.log("Não foi possível verificar o id")
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

    console.log("Verifica o resultado de adicionaMedida", adicionaMedida);


}