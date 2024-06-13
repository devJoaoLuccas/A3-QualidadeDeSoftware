import { createTableMedidas, initInserirMedidas } from "./medidas/medidas.js";
import { createTableUsers, initInserirUsuario } from "./users/usuario.js";


export async function initBanco() {

    try {
        await createTableUsers();
        await createTableMedidas();
    } catch {
        console.log("Não foi possível criar as tabelas");
    }


}