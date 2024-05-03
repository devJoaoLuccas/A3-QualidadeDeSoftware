import  request from "supertest";
import app from '../serverTest';
import * as userControl from '../../controller/userController.js';
import { openDb } from "../../configDb";


describe('Teste de integração entre o Router e as suas funções', () => {
    const newUser = {
        username: "newUser32",
        email: "new@example.com32",
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
            userControl.getUser(user);

            const response = await request(app)
                .get('/user/1');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({
                statusCode: 200
            });
    });

    it('POST /adicionarUsuario should add a new user', async () => {
        userControl.inserirUsuario(newUser);
        
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