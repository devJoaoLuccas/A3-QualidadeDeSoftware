import { openDb } from '../../configDb.js';
import { getId, getUser, inserirUsuario, verificacaoEmail, verificacaoUsuario } from '../../controller/userController.js';


export async function createTableUsers() {

    await db.exec(
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
        await db.run(
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
        const usuario = await getUser(id);

        if(!usuario) {
            console.log("O usuário não foi encontrado");

            return res.json({
                "statusCode": 404
            })

        } else {
            console.log('O usuário foi encontrado: ', usuario);
                return res.json({
                    "statusCode":200
                })
        }
    } catch (error) {
        console.log("Não foi possível encontrar o usuário", error);
        return res.status(500);
    }

}

export async function adicionarUser (req, res) {
    const usuario = req.body;

    try {
        const existeEmail = await verificacaoEmail(usuario.email);
        console.log("Existe email?",existeEmail)

        const existeUsuario = await verificacaoUsuario(usuario.username);

        console.log("Existe usuário?", existeUsuario)

        if(existeEmail) {
                console.log("Não foi possivel cadastrar o usuário, o mesmo já tem um email cadastrado");
                res.json({
                    'statusCode':401
                })
                console.log("passou o statuscode, email")
                return
        } else if (existeUsuario) {
                console.log("Não foi possível cadastrar o usuário, o username já está cadastrado");
                res.json({
                    'statusCode':410
                })
                console.log("passou o statuscode, usuario")
                return
        } else if (!existeEmail && !existeUsuario) {
                await inserirUsuario(usuario.username, usuario.email, usuario.password, usuario.data_nascimento);
    
                console.log("O usuario foi adicionado com sucesso.", usuario.username);
                console.log("o usuário", usuario.username);
    
                // res.json({
                //     'statusCode': 200,
                //     'username': usuario.username
                // });
                
                console.log("passou o statuscode, adicionar usuario")
                return
        }

    } catch (error) {
        console.log("Não foi possível adicionar o usuário", error);

        res.json({
            "statusCode":402,
        });

        console.log(error)
    }

}

export async function login (req, res) {
    const usuario = req.body;

    try {
        const id = await getId(usuario.email, usuario.password);

        console.log("O id recebido foi: ", id);

        if(!id) {
            console.log("Não foi possível realizar o login, credenciais inválidas");

            return res.json({
                "statusCode":401,
            })
        } else {
            console.log("Login efetuado com sucesso, o id selecionado foi o ", id.idUser);

            return res.json({
                "statusCode":200,
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