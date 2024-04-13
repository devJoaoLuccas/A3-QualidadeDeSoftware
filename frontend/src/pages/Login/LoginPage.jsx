import styles from './LoginPage.module.css'

import LoginForm from "../../components/forms/LoginForm";

function LoginPage() {


    return (
        <>
            <main>
                <section
                     className={styles.screen}>
                    <article
                        className={styles.box}>
                        <header>
                            <img 
                                className={styles.logo}
                                src="src/assets/icons/_iconCalculadora.png" 
                                alt="logo"/>
                            <h1>Calculadora de IMC</h1>
                        </header>
                        <LoginForm />
                        <footer>

                        </footer>
                    </article>
                </section>
            </main>
        </>
    )

}


export default LoginPage;