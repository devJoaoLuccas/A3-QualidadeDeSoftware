import { createTableMedidas } from "./medidas/medidas.js";
import { createTableUsers } from "./users/usuario.js";


export async function initBanco() {

    try {
        await createTableUsers();
        await createTableMedidas();
    } catch {
        console.log("Não foi possível criar as tabelas");
    }


}