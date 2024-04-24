import { openDb } from '../../configDb.js';

const db = await openDb();

export async function createTableUsers() {


    await db.exec(
        `
            CREATE TABLE IF NOT EXISTS users
                (idUser INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                nome TEXT NOT NULL, 
                sobrenome TEXT NOT NULL, 
                email TEXT NOT NULL, 
                password TEXT NOT NULL, 
                password TEXT NOT NULL, 
                data_nascimento BLOB NOT NULL)
        `
    );

}

export async function initInserirUsuario() {

    try {
        await db.run(
            `
                INSERT INTO users 
                (idUser, username, nome, sobrenome, email, password, data_nascimento)
                VALUES
                    (1, "ADMIN", "João", "Marques", "joao.marques@gmail.com", "Paula1503@", "29/12/2003"),
                    (2, "marcos henrique", "marcos.marques@gmail.com", "marcos1503", "15/03/1998"),
                    (3, "Clovis Dantas", "clovis.dantas@gmail.com", "clovis1503", "20/03/2004"),
                    (4, "Bambam", "Miguel", "Boca", "miguel.boca@gmail.com", "bambam1503", "20/03/2024"),
                    (4, "Bambam", "Miguel", "Boca", "miguel.boca@gmail.com", "bambam1503", "20/03/2024");
            `
        )
    } catch (error) {
        console.log("Não foi possível inserir o login dos usuários");
    }

}

export async function selectUser (req, res) {
    
    const id = req.paramns.idUser;

    try {
        const usuario = await db.get(
            `
                SELECT *
                FROM users
                WHERE idUser = ?
            `
        ,[id]);

        if(!usuario) {
            console.log("O usuário não foi encontrado:", id);

            return res.json({
                "statusCode":404,
                error:"Usuário não encontrado"
            })

        } else {
            console.log('O usuário foi encontrado: ', usuario);
        }

    } catch (error) {
        console.log("Não foi possível encontrar o usuário");
    }

}

export async function adicionarUser (req, res) {

    const usuario = req.body;


    try {
        await db.run(
            `
                INSERT INTO users
                (username, nome, sobrenome, email, password, data_nascimento)
                VALUES 
                (?,?,?,?,?,?)
            `, [usuario.username, usuario.nome, usuario.sobrenome, usuario.email, usuario.password, usuario.data_nascimento]);


        console.log("O usuario foi adiciona com sucesso", usuario.username);

        res.json({
            "statusCode": 200
        })
    } catch (error) {
        console.log("Não foi possível adicionar o usuário");
    }

}

export async function login (req, res) {

    const usuario = req.body;

    try {
        const id = await db.get (
            `
                SELECT idUser
                FROM users
                WHERE (email=? OR username=?) AND password=?
            `
        ,[login.username, login.username, login.password]);

        if(!id) {
            console.log("Não foi possível realizar o login, credenciais inválidas");

            res.json({
                "statusCode":401,
                "message":"Credenciais Inválidas"
            })
        } else {
            console.log("Login efetuado com sucesso, o id selecionado foi o ", id.idUser);

            res.json({
                "statusCode":200,
                "idUser": id.user
            })

        }

    } catch (error) {
        console.log("error!", error);
        
        res.status(500).json({
            "statusCode":500,
            "message":"erro interno do servidor"
        });
    }


}