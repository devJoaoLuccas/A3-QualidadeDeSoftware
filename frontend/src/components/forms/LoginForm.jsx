import styles from './Form.module.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify'

function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === "" || password === "") {
            toast.error('{Credenciais vazias, preencha os campos}');
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
                        localStorage.setItem("userId", data.idUser);
                        localStorage.setItem("username", data.username);
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
        }
    }

    const cadastrar = () => { 
        navigate('/cadastrarUsuario')};

    return (
        <>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    id="username">
                        Nome de Usuário
                </label>
                <div
                    className={styles.input_container}>
                    <div
                        className={styles.logo_container}>
                        <img 
                            src="src/assets/icons/_iconUser.png" 
                            alt="userLogo"/>
                    </div>
                    <input 
                        className={styles.input}
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    id="username">
                        Senha
                </label>
                <div
                    className={styles.input_container}>
                    <div
                        className={styles.logo_container}>
                        <img 
                            src="src/assets/icons/_iconPassword.png" 
                            alt="userLogo"/>
                    </div>
                    <input 
                        className={styles.input}
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div
                className={styles.button_box}>
                <button
                    onClick={cadastrar}>
                        Cadastre-se
                </button>
                <button
                    onClick={handleLogin}>
                        Login
                </button>
            </div>
        </>
    )
    
}


export default LoginForm;