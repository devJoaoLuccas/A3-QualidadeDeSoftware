export const CalcularImc = (peso, altura) => {
    if (altura <= 0) {
        alert('A altura não pode ser igual a 0');
        throw new Error('A altura não pode ser igual 0')
    } else if (altura >= 2.2) {
        alert('Altura não válida');  
        throw new Error('A altura não é valida');
    } else if (peso <= 0) {
        alert('O peso não pode ser igual 0');
        throw new Error('O peso não pode ser igual a 0')
    } else if (peso >= 250) {
        alert('O peso não é válido');
        throw new Error('O peso não é valido')
    }  else {
        return peso / (altura * altura);
    }
}