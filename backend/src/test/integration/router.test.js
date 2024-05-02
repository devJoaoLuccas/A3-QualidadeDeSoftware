import  request from "supertest";
import app from '../serverTest';
import * as userControl from '../../controller/userController.js';
import { openDb } from "../../configDb";

jest.mock('../../configDb', () => {
    openDb: jest.fn().mockResolvedValue({
        get: jest.fn(),
        run: jest.fn()
    });
})

jest.mock('../../controller/userController.js', () => ({
        getUser: jest.fn(),
        getId: jest.fn(),
        verificacaoEmail: jest.fn(),
        verificacaoUsuario: jest.fn(),
        inserirUsuario: jest.fn()        
    })
);


describe('Teste de integração entre o Router e as suas funções', () => {
    beforeEach(() => {
            userControl.getUser.mockResolvedValue(null);
            userControl.getId.mockResolvedValue(null);
            userControl.verificacaoEmail.mockResolvedValue(null);
            userControl.verificacaoUsuario.mockResolvedValue(null);
            userControl.inserirUsuario.mockResolvedValue(null);
    });

    const newUser = {
        username: "newUser",
        email: "new@example.com",
        password: "password123",
        data_nascimento: "1990-01-01"
    };

    const user = {
        idUser: 1,
        username: 'testUser',
        email:'emailTeste@gmail.com',
        password: 'teste',
        data_nascimneto: '29-12-2003'
    }


    it('Retornar detalhes do usuario se ele existir', async () => {
            userControl.getUser.mockResolvedValue(user);

            const response = await request(app)
                .get('/user/1');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({
                statusCode: 200
            });
    });

    it('POST /adicionarUsuario should add a new user', async () => {
        userControl.verificacaoEmail.mockResolvedValue(null);
        userControl.verificacaoUsuario.mockResolvedValue(null);
        userControl.inserirUsuario.mockResolvedValue(newUser);
        
        const response = await request(app)
            .post('/adicionarUsuario')
            .send(newUser);

        expect(response.statusCode).toBe(200);
       

        expect(response.body).toEqual({
            "statusCode":200,
            "username": newUser.username
        });

    });

});