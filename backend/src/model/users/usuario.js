import { openDb } from '../../configDb.js';

const db = openDb();

export async function createTableUsers() {

    db.exec(
        `
            CREATE TABLE IF NOT EXISTS users
                (idUser INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                email TEXT NOT NULL, 
                password TEXT NOT NULL,
                data_nascimento BLOB NOT NULL)
        `
    );

}

export async function initInserirUsuario() {

    try {
        db.run(
            `
                INSERT INTO users 
                (idUser, username, email, password, data_nascimento)
                VALUES
                    (1, "ADMIN", "joao.marques@gmail.com", "Paula1503@", "29/12/2003"),
                    (2, "marcos", "marcos.marques@gmail.com", "marcos1503", "15/03/1998"),
                    (3, "Clovis", "clovis.dantas@gmail.com", "clovis1503", "20/03/2004"),
                    (4, "Bambam", "miguel.boca@gmail.com", "bambam1503", "20/03/2024"),
                    (5, "Bambam", "miguel.boca@gmail.com", "bambam1503", "20/03/2024");
            `
        )
    } catch (error) {
        console.log("Não foi possível inserir o login dos usuários");
    }

}

export async function selectUser (req, res) {
    

    const id = req.params.idUser;

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
            return res.json({
                "statusCode":200
            })
        }

    } catch (error) {
        console.log("Não foi possível encontrar o usuário", error);
        return res.status(500)
    }

}

export async function adicionarUser (req, res) {
    const usuario = req.body;

    try {
        const verificarEmail = db.get(
            `
                SELECT email
                FROM users
                WHERE email=?
            `
        ,[usuario.email]);

        const verificarUsuario = db.get(
            `
                SELECT username
                FROM users
                WHERE username=?
            `
        , [usuario.username]);

        if(verificarEmail) {
            res.json({
                "statusCode":401
            })
            console.log("Não foi possivel cadastrar o usuário, o mesmo já tem um email cadastrado");
        } else if (verificarUsuario) {
            res.json({
                "statusCode":410
            })
            console.log("Não foi possível cadastrar o usuário, o username já está cadastrado");
        }   else {
            db.run(
                `
                    INSERT INTO users
                    (username, email, password, data_nascimento)
                    VALUES 
                    (?,?,?,?)
                `, [usuario.username, usuario.email, usuario.password, usuario.data_nascimento]);
    
    
            console.log("O usuario foi adiciona com sucesso.", usuario.username);
            console.log("o usuário", usuario.email);
    
            const id = db.get(
                `
                    SELECT idUser
                    FROM users
                    WHERE username=?
                `
            ,[usuario.username]);
    
            res.json({
                "statusCode": 200,
                "idUser":id
            })
        }

    } catch (error) {
        console.log("Não foi possível adicionar o usuário");
        res.json({
            "statusCode":402,
        })
        console.log(error)
    }

}

export async function updateUser(req, res) {
    const usuario = req.body;

    try {
        db.run(
            `
                UPDATE users
                SET username=?, password=?, email=?
                WHERE idUser=?
            `, usuario.username, usuario.password, usuario.email);

        console.log(`O usuário foi atualizado com sucesso`, [usuario.username]);

            res.json({
                "statusCode":200
            });
    } catch (error) {
        res.json({
            "statusCode": 401
        })

        console.log("Não foi possível atualizar o usuário");
    }

}


export async function login (req, res) {
    const usuario = req.body;

    try {
        const id = db.get (
            `
                SELECT idUser
                FROM users
                WHERE (email=? OR username=?) AND password=?
            `
        ,[usuario.username, usuario.username, usuario.password]);

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
                "idUser": id.idUser,
                "username":usuario.username
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