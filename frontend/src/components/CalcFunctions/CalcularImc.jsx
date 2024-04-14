import { toast } from "react-toastify";

export const CalcularImc = (peso, altura) => {
    if (altura <= 0) {
        toast.error('A altura não pode ser igual a 0');
        throw new Error('A altura não pode ser igual 0');
    } else if (altura >= 2.2) {
        toast.error('Altura não é válida');
        throw new Error('A altura não é valida');
    } else if (peso <= 0) {
        toast.error('O peso não pode ser igual a 0');
        throw new Error('O peso não pode ser igual a 0');
    } else if (peso >= 250) {
        toast.error('O peso não é valido');
        throw new Error('O peso não é valido');
    }  else {
        return peso / (altura * altura);
    }
}