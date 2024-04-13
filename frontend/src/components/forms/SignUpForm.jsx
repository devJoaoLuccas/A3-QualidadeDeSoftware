import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css'


function SignUpForm() {

    const navigate = useNavigate();

    const voltar = () => {
        navigate('/');
    }

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
                        id="username"
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    id="email">
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
                        id="email" 
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    id="confirmEmail">
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
                        id="birthdayDate"
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    id="birthdayDate">
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
                        id="birthdayDate"
                        required/>
                </div>
            </div>
            <div
                className={styles.input_box}>
                <label
                    className={styles.label} 
                    id="password">
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
                        id="password"
                        required/>
                </div>
            </div>
            <div
                className={styles.button_box}>
                <button
                    onClick={voltar}>
                        Voltar
                </button>
                <button>Cadastre-se </button>
            </div>
        </>

    )

}

export default SignUpForm;