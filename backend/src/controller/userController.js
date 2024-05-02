import { openDb } from "../configDb";

export async function getUser(id) {
    
    const db = await openDb();
    
    return await db.get(
        `
            SELECT *
            FROM users
            WHERE idUser = ?
        `
        , [id]);
        
}
    
export async function getId(username) {
    
    const db = await openDb();
    
    return await db.get(
        `
            SELETC idUser
            FROM users
            WHERE username = ?
        `
    , [username]);    
}

export async function verificacaoEmail(email) {

    const db = await openDb();

    return await db.get(
        `
            SELECT email
            FROM users
            WHERE email = ?
        `
    , [email]);

}

export async function verificacaoUsuario(usuario) {

    const db = await openDb();

    return await db.get(
        `
            SELECT username
            FROM users
            WHERE username = ?
        `
    , [usuario]);

}

export async function inserirUsuario(username, email, password, data_nascimento) {

    const db = await openDb();

    return await db.run(
        `
            INSERT INTO users
            (username, email, password, data_nascimento)
            VALUES
            (?, ?, ?, ?)
        `
    ,[username, email, password, data_nascimento])


}