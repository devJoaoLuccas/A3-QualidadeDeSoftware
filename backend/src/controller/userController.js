import { openDb } from "../configDb.js";

export async function getUser(id) {

    const db = await openDb();


    const idUser = await db.get(
        `
            SELECT *
            FROM users
            WHERE idUser = ?
        `
        , [id]);


    if(idUser === undefined) {
        return false
    } else {
        return true
    }
        
}
    
export async function getId( email, password) {

    const db = await openDb();

    const verificaId = await db.get (
        `
            SELECT idUser
            FROM users
            WHERE email= ? AND password= ?
        `
        ,[email, password]
    );
    

    if(verificaId === undefined) {
        return false
    } else {
        return true
    }
  
}

export async function verificacaoEmail(email) {

    const db = await openDb();

    const verificarEmail = await db.get(
        `
            SELECT email
            FROM users
            WHERE email = ?
        `
    , [email]);

    if(verificarEmail === undefined) {
        return false;
    } else {
        return true;
    }
}

export async function verificacaoUsuario(usuario) {

    const db = await openDb();

    const verificarUsuario = await db.get(
        `
            SELECT username
            FROM users
            WHERE username = ?
        `
    , [usuario]);

    if (verificarUsuario === undefined) {
        return false;
    } else { 
        return true;
    }

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