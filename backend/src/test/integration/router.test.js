import  request from "supertest";
import app from '../serverTest';
import { db } from "../dbMock";

jest.mock('../dbMock.js')


it("Deve encontrar o usuário na função SelectUser", async () => {
    db.get.mockResolvedValue({
        idUser: 1,
        username: "teste",
        email: "teste@example.com",
        password:"senhaTeste",
        data_nascimento: "2000-01-01"
    });

    const response = await request(app)
        .get('/user/1')
        .expect(200);

    expect(response.body).toEqual({
        idUser: 1,
        username: "teste",
        email: "teste@example.com",
        password:"senhaTeste",
        data_nascimento: "2000-01-01"
    });
});