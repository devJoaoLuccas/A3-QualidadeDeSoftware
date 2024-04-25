import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


function HandleLogin({username, password}) {

    const navigate = useNavigate();

    if (username === "" || password === "") {
        toast.error('Credenciais vazias, preencha os campos');
        throw new Error('Credenciais vazias, preencha os campos');
    } 

    if(username && password) {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify ({
                username:username,
                password:password
            })
        })
            .then((resp) => {
                if(!resp.ok) {
                    throw new Error("Não foi possível fazer o login");
                }
                return resp.json();
            })
            .then((data) => {
                if(data.statusCode === 200) {
                    toast.success("Login efetuado com sucesso!");
                    navigate('/homepage')
                }
                else if (data.statusCode === 401) {
                    toast.error("Credenciais inválidas");
                    navigate('/')
                }
                else if (data.statusCode === 500) {
                    toast.error("Não foi possível fazer login, erro interno do servidor");
                    navigate('/')
                }
            })
            .catch((error) => {
                toast.error('Erro interno');
                throw new Error('Erro interno do servidor');
            })
    }
}


export default HandleLogin;