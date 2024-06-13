import HandleLogin from "./HandleLogin";

import { toast } from "react-toastify";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

jest.mock('react-toastify', () => {
    return {
        toast: {
            error: jest.fn(),
            success: jest.fn()
        }
    }
})



describe('HandleLogin Function', () => {


    it('exibe um erro se as credenciais estiverem vazias', () => {
        const testeVazio = () => HandleLogin({username: '', password: ''})
        expect(testeVazio).toThrow('Credenciais vazias, preencha os campos')
        expect(toast.error).toHaveBeenCalledWith('Credenciais vazias, preencha os campos');
    });
  
    it('trata sucesso de login', async () => {
        fetch.mockResponseOnce(JSON.stringify({
            statusCode:200,
            idUser:'123',
            username: 'userTest',
            password:'teste'
        }))
        HandleLogin({username: 'userTest', password: 'teste'})
    });

    it('trata sucesso de login', async () => {
        fetch.mockResponseOnce(JSON.stringify({
            statusCode:200,
            idUser:'123',
            username: 'userTest',
            password:'teste'
        }))
        HandleLogin({username: 'userTest', password: 'teste'})
    })

    it('trata credenciais invalidas', async () => {
        fetch.mockResponseOnce(JSON.stringify({
            statusCode:401,
            idUser:'123',
            username: 'userTest',
            password:'teste'
        }))
        HandleLogin({username: 'userTest32', password: 'teste32'})
    })

    it('trata credenciais invalidas', async () => {
        fetch.mockResponseOnce(JSON.stringify({
            statusCode:500,
            idUser:'123',
            username: 'userTest',
        }))
        HandleLogin({username: 'userTest32', password: 'teste32'})
    })


  });