import { createTableUsers, initInserirUsuario } from "./users/usuario.js";


export async function initBanco() {

    try {
        createTableUsers();
    } catch {
        console.log("Não foi possível criar as tabelas");
    }

    await initInserirUsuario();

}