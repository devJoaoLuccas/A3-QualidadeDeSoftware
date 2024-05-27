import  request from "supertest";
import app from '../serverTest';


describe('Teste de integração entre o Router e as funções de medida', () => {
    const newUser = {
        username: "newUser32",
        email: "new@example.com32",
        password: "password123",
        data_nascimento: "1990-01-01"
    };

    it('Retornar sucesso ao adicionar um usuário', async () => {

        const response = await request(app)
            .post('/adicionarUsuario')
            .send(newUser);

        expect(response.statusCode).toBe(200);
       
    });


    it('Retornar erro ao adicionar um usuário, quando o email já está cadastrado', async () => {

        const response = await request(app)
            .post('/adicionarUsuario')
            .send({
               "username": "Clovis",
               "email": "joao.marques@gmail.com",
               "password": "teste123",
               "data_nascimento": "29-12-2003"
            });

        expect(response.body["statusCode"]).toBe(401);

    });

    it('Retornar erro ao adicionar um usuário, quando o usuário já está cadastrado', async () => {

        const response = await request(app)
            .post('/adicionarUsuario')
            .send({
                "username":"Clovis",
                "email": "joao.teste@gmail.com",
                "password":"teste123",
                "data_nascimento": "29-12-2003"
            });

        expect(response.body["statusCode"]).toBe(410)

    });

    it("Retorna sucesso ao selecionar um usuário no banco", async () => {

        const response = await request(app)
            .get('/user/1')

        expect(response.body["statusCode"]).toBe(200);

    });

    it("Retorna erro ao selecionar um usuário no banco", async () => {

        const response = await request(app)
            .get('/user/999')

        expect(response.body["statusCode"]).toBe(404);

    });
    
    it("Retorna sucesso ao selecionar ao realizar um login na aplicação", async () => {

        const response = await request(app)
            .post('/login')
            .send({
                "username": "Clovis",
                "email": "clovis.dantas@gmail.com",
                "password": "clovis1503"
            });

        console.log(response.body["statusCode"]);
        expect(response.body["statusCode"]).toBe(200)
        
    });

    it("Retorna erro ao selecionar ao realizar um login na aplicação", async () => {

        const response = await request(app)
            .post('/login')
            .send({
                "username": "yuri",
                "email": "yurum@gmail.com",
                "password": "123"
            })

        console.log(response.body["statusCode"]);
        expect(response.body["statusCode"]).toBe(401);

    })

});

describe("Teste de integração entre o router e as funções de Medida", () => {
    
    
    it("Retornar sucesso ao adicionar uma medida", async() => {

        const response = await request(app)
            .post('/adicionarMedidas')
            .send({
                "altura":"1.60",
                "peso":"60",
                "imc":"20",
                "resultado":"acima do peso",
                "userId": 1
            });
        
        console.log(response.body["statusCode"]);
        expect(response.body["statusCode"]).toBe(200);

    });

    it("Retornar erro ao adicionar uma medida", async() => {

        const response = await request(app)
            .post('/adicionarMedidas')
            .send({
                "altura":"1.60",
                "peso":"60",
                "imc":"20",
                "resultado":"acima do peso",
                "userId": 999
            });
        
        console.log(response.body["statusCode"]);
        expect(response.body["statusCode"]).toBe(410);

    });

    it("Retornar sucesso ao verificar medida", async () => {

        const response = await request(app)
            .get('/medidas/1')

        expect(response.body["statusCode"]).toBe(200);

    })

    it("Retornar erro ao verificar medida", async () => {

        const response = await request(app)
            .get('/medidas/999')

        expect(response.body["statusCode"]).toBe(200);

    })
})