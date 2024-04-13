import SignUpForm from "../../components/forms/SignUpForm";
import styles from './SignUp.module.css'


function SignUp() {
    

    return (
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
                    <SignUpForm />
                    <footer>

                    </footer>
                </article>
            </section>
        </main>
    )
}


export default SignUp;