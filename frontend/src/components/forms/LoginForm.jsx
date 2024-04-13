import styles from './LoginForm.module.css'


function LoginForm() {

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
                        type="text" />
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
                        type="password" />
                </div>
            </div>
            <div
                className={styles.button_box}>
                <button>Cadastre-se</button>
                <button>Login</button>
            </div>
        </>
    )
    
}


export default LoginForm;