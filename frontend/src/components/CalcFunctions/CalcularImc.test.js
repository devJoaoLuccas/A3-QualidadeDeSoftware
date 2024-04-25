import { CalcularImc } from "./CalcularImc";
import { toast } from "react-toastify";

jest.mock('react-toastify', () => {
    return {
        toast: {
            error: jest.fn()
        }
    }
})

describe('CalcularImc', () => {
    test('deve lançar o erro quando altura é zero', () => {
        expect(() => CalcularImc(70, 0)).toThrow('A altura não pode ser igual a 0');
        expect(toast.error).toHaveBeenCalledWith('A altura não pode ser igual a 0');
    });

    test('deve lançar o erro quando altura for mais alta do que o máximo (2.2)', () => {
        expect(() => CalcularImc(70, 2.6)).toThrow('Altura não é válida');
        expect(toast.error).toHaveBeenCalledWith('Altura não é válida');
    });

    test('deve lançar o erro quando o peso for igual a 0', () => {
        expect(() => CalcularImc(0, 1.5)).toThrow('O peso não pode ser igual a 0');
        expect(toast.error).toHaveBeenCalledWith('O peso não pode ser igual a 0');
    });

    test('deve lançar o erro quando o peso for maior queo máximo (400)', () => {
        expect(() => CalcularImc(401, 1.5)).toThrow('O peso não é válido');
        expect(toast.error).toHaveBeenCalledWith('O peso não é válido');
    });


    it('teste de retorno quando recebe valores corretos', () => {
        const resultado = CalcularImc(60, 1.60);
        expect(resultado).toBeCloseTo(23.44);
    })

})

