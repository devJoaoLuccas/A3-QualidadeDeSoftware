import { openDb } from "../configDb.js";

export async function getUser(id) {
    console.log("O Id recebido foi:", id);


    const db = await openDb();


    const idUser = await db.get(
        `
            SELECT *
            FROM users
            WHERE idUser = ?
        `
        , [id]);

    console.log("idUser =", idUser);

    if(idUser === undefined) {
        console.log("O usuário não existe");
        return false
    } else {
        console.log("O usuário existe");
        return true
    }
        
}
    
export async function getId( email, password) {
    console.log("Verificar username:", email, password);

    const db = await openDb();

    const verificaId = await db.get (
        `
            SELECT idUser
            FROM users
            WHERE email= ? AND password= ?
        `
        ,[email, password]
    );
    
    console.log("Verifica id:", verificaId);

    if(verificaId === undefined) {
        console.log("O id não existe");
        return false
    } else {
        console.log("O id existe");
        return true
    }
  
}

export async function verificacaoEmail(email) {
    console.log('Verifica o email que está chegando:', email)

    const db = await openDb();

    const verificarEmail = await db.get(
        `
            SELECT email
            FROM users
            WHERE email = ?
        `
    , [email]);

    console.log('Verificar email: ', verificarEmail)

    if(verificarEmail === undefined) {
        console.log("O email não existe");
        return false;
    } else {
        console.log("O email existe");
        return true;
    }
}

export async function verificacaoUsuario(usuario) {
    console.log('Verifica o usuário que chegou:', usuario)

    const db = await openDb();

    const verificarUsuario = await db.get(
        `
            SELECT username
            FROM users
            WHERE username = ?
        `
    , [usuario]);

    console.log('Verificar função usuario:', verificarUsuario);

    if (verificarUsuario === undefined) {
        return false;
    } else { 
        return true;
    }

}

export async function inserirUsuario(username, email, password, data_nascimento) {


    return await db.run(
        `
            INSERT INTO users
            (username, email, password, data_nascimento)
            VALUES
            (?, ?, ?, ?)
        `
    ,[username, email, password, data_nascimento])


}