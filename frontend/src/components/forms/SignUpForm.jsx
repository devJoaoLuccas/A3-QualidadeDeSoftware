import styles from './Form.module.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

function SignUpForm() {

    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [password, setPassword] = useState('');


    const handleCadastro = () => {
        if (username === '' || email === '' || confirmEmail === '' || dataNascimento === '' || password === '') {
            toast.error('Credenciais vazias, preencha os campos')
        } 
        
        
        if (email === confirmEmail && username && dataNascimento && password) {
            fetch('http://localhost:3000/adicionarUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify ({
                    username: username,
                    email: email,
                    data_nascimento: dataNascimento,
                    password: password
                })
            })
                .then((resp) => {
                    if(!resp.ok) {
                        throw new Error("Não foi possível fazer o login", resp);
                    }
                    return resp.json();
                })
                .then((data) => {
                    if(data.statusCode === 200) {
                        toast.success("O usuário foi cadastrado com sucesso !");
                        localStorage.setItem("userId", data.idUser);
                        localStorage.setItem("username", data.username);
                        navigate('/homepage');
                    } else if (data.statusCode === 401) {
                        toast.error("O email já foi cadastrado");
                    } else if (data.statusCode === 410) {
                        toast.error("O username já está em uso");
                    }else if (data.statusCode === 402) {
                        toast.error("Erro interno do servidor!");
                    } else {
                        toast.error("Error interno do servidor!");
                    }
                })
            
        } else {
            toast.error('Os emails estão diferentes!')
          
        }
    }

    
    const voltar = () => {
        navigate('/');
    }

    return (
        <>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    htmlFor='username'>
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
                        id='username'
                        onChange={((e) => setUsername(e.target.value))}
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    htmlFor='email'>
                        Email
                </label>
                <div
                    className={styles.input_container}>
                    <div
                        className={styles.logo_container}>
                        <img 
                            src="src/assets/icons/_iconEmail.png" 
                            alt="userLogo"/>
                    </div>
                    <input 
                        className={styles.input}
                        type="email"
                        id='email'
                        onChange={((e) => setEmail(e.target.value))} 
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    htmlFor='confirmEmail'>
                        Confirme o Email
                </label>
                <div
                    className={styles.input_container}>
                    <div
                        className={styles.logo_container}>
                        <img 
                            src="src/assets/icons/_iconConfirmEmail.png" 
                            alt="userLogo"/>
                    </div>
                    <input 
                        className={styles.input}
                        type="email" 
                        id='confirmEmail'
                        onChange={((e) => setConfirmEmail(e.target.value))}
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    htmlFor='birthdayDate'>
                         Data de Nascimento
                </label>
                <div
                    className={styles.input_container}>
                    <div
                        className={styles.logo_container}>
                        <img 
                            src="src/assets/icons/_iconData.png" 
                            alt="userLogo"/>
                    </div>
                    <input 
                        className={styles.input}
                        type="date" 
                        id='birthdayDate'
                        onChange={((e) => setDataNascimento(e.target.value))}
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    htmlFor='password'>
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
                        id='password'
                        onChange={((e) => setPassword(e.target.value))}
                        required/>
                </div>
            </div>
            <div
                className={styles.button_box}>
                <button
                    onClick={voltar}>
                        Voltar
                </button>
                <button
                    onClick={handleCadastro}>
                    Cadastre-se 
                </button>
            </div>
        </>

    )

}

export default SignUpForm;